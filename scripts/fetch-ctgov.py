#!/usr/bin/env python3
"""Refreshes src/content/data/ctgov-geo.json from the ClinicalTrials.gov API v2.

Counts studies with overall status Recruiting and at least one location in each
state or region, overall and by therapeutic-area keyword search, plus a few
example studies per area. Run:  python3 scripts/fetch-ctgov.py  (takes a few minutes)

City areas use a radius search (filter.geo) and keep their own query date and US
totals, so they can be refreshed without touching the state pages:
  python3 scripts/fetch-ctgov.py --only boston,seattle
"""
import json, urllib.request, urllib.parse, time, datetime
BASE = "https://clinicaltrials.gov/api/v2/studies"
def count(params):
    q = dict(params); q.update({"countTotal":"true","pageSize":"1","fields":"NCTId"})
    url = BASE + "?" + urllib.parse.urlencode(q)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=40) as r:
                return json.load(r)["totalCount"]
        except Exception as e:
            time.sleep(2*(attempt+1))
    return None
def sample(params, n=8):
    q = dict(params); q.update({"pageSize":str(n),"fields":"NCTId,BriefTitle,Condition,LeadSponsorName,Phase,StudyType","sort":"LastUpdatePostDate:desc"})
    url = BASE + "?" + urllib.parse.urlencode(q)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(url, timeout=40) as r:
                data = json.load(r)
                out=[]
                for s in data.get("studies",[]):
                    p=s["protocolSection"]
                    out.append({"nct":p["identificationModule"]["nctId"],"title":p["identificationModule"].get("briefTitle"),
                        "conditions":p.get("conditionsModule",{}).get("conditions",[])[:4],
                        "sponsor":p.get("sponsorCollaboratorsModule",{}).get("leadSponsor",{}).get("name"),
                        "phase":p.get("designModule",{}).get("phases",[]),
                        "type":p.get("designModule",{}).get("studyType")})
                return out
        except Exception as e:
            time.sleep(2*(attempt+1))
    return []
geos = {
  "texas":["Texas"],"florida":["Florida"],"arizona":["Arizona"],"nevada":["Nevada"],"utah":["Utah"],
  "southeast":["Georgia","North Carolina","South Carolina","Tennessee","Alabama","Mississippi","Kentucky","Virginia","Louisiana","Arkansas"],
  "midwest":["Ohio","Michigan","Illinois","Indiana","Wisconsin","Minnesota","Iowa","Missouri","Kansas","Nebraska","North Dakota","South Dakota"],
}
# City areas: (description, latitude, longitude, radius in miles)
cities = {
  "boston": ("25 miles of downtown Boston", 42.3601, -71.0589, 25),
  "new-york-city": ("25 miles of Midtown Manhattan", 40.7549, -73.9840, 25),
  "philadelphia": ("25 miles of Center City Philadelphia", 39.9526, -75.1652, 25),
  "los-angeles": ("30 miles of downtown Los Angeles", 34.0522, -118.2437, 30),
  "san-francisco-bay-area": ("40 miles of San Mateo, covering San Francisco, Oakland and San Jose", 37.5630, -122.3255, 40),
  "seattle": ("25 miles of downtown Seattle", 47.6062, -122.3321, 25),
}
conds = {"all":None,"oncology":"cancer OR neoplasm OR carcinoma OR lymphoma OR leukemia","obesity":"obesity OR overweight OR type 2 diabetes",
 "cardiology":"heart failure OR coronary OR atrial fibrillation OR hypertension OR cardiovascular","neurology":"Alzheimer OR dementia OR Parkinson OR multiple sclerosis OR migraine OR epilepsy",
 "dermatology":"psoriasis OR atopic dermatitis OR eczema OR hidradenitis OR vitiligo OR alopecia","pain":"chronic pain OR low back pain OR osteoarthritis OR neuropathic pain OR migraine",
 "gastroenterology":"Crohn OR ulcerative colitis OR NASH OR MASH OR irritable bowel OR celiac OR eosinophilic esophagitis","psychiatry":"depression OR schizophrenia OR bipolar OR anxiety OR PTSD OR ADHD"}
import sys, os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src", "content", "data", "ctgov-geo.json")
only = None
if "--only" in sys.argv:
    only = sys.argv[sys.argv.index("--only") + 1].split(",")
if only:
    result = json.load(open(OUT))
    today = datetime.date.today().isoformat()
    us_today = {}
    for cname, cq in conds.items():
        p = {"query.locn": "United States", "filter.overallStatus": "RECRUITING"}
        if cq: p["query.cond"] = cq
        us_today[cname] = count(p)
    for key in only:
        if key not in cities: raise SystemExit(f"unknown city key: {key}")
        desc, lat, lon, miles = cities[key]
        geo = f"distance({lat},{lon},{miles}mi)"
        entry = {"states": [], "area": desc, "as_of": today, "us": us_today, "counts": {}, "samples": {}}
        for cname, cq in conds.items():
            p = {"filter.geo": geo, "filter.overallStatus": "RECRUITING"}
            if cq: p["query.cond"] = cq
            entry["counts"][cname] = count(p)
        for cname in ["oncology", "obesity", "cardiology", "neurology"]:
            entry["samples"][cname] = sample({"filter.geo": geo, "filter.overallStatus": "RECRUITING", "query.cond": conds[cname]}, 6)
        result["geos"][key] = entry
        print(key, entry["counts"], flush=True)
    json.dump(result, open(OUT, "w"), indent=1)
    print("saved", OUT)
    raise SystemExit(0)
result={"as_of":datetime.date.today().isoformat(),"source":"ClinicalTrials.gov API v2 (https://clinicaltrials.gov/data-api/api)","geos":{}}
for g, states in geos.items():
    entry={"states":states,"counts":{},"samples":{}}
    for cname, cq in conds.items():
        total=0; ok=True
        for st in states:
            p={"query.locn":st,"filter.overallStatus":"RECRUITING"}
            if cq: p["query.cond"]=cq
            c=count(p)
            if c is None: ok=False; break
            total+=c
        entry["counts"][cname]= total if ok else None
    # samples: for single states, sample a few recruiting trials; for regions use first 2 states
    for cname in ["oncology","obesity","cardiology","neurology"]:
        p={"query.locn":states[0],"filter.overallStatus":"RECRUITING","query.cond":conds[cname]}
        entry["samples"][cname]=sample(p,6)
    # US total for comparison
    result["geos"][g]=entry
    print(g, entry["counts"], flush=True)
us={}
for cname,cq in conds.items():
    p={"query.locn":"United States","filter.overallStatus":"RECRUITING"}
    if cq: p["query.cond"]=cq
    us[cname]=count(p)
result["us"]=us
print("US", us)
# Keep city areas from the last --only run.
if os.path.exists(OUT):
    for k, v in json.load(open(OUT))["geos"].items():
        if k in cities and k not in result["geos"]: result["geos"][k] = v
json.dump(result, open(OUT,"w"), indent=1)
print("saved", OUT)
