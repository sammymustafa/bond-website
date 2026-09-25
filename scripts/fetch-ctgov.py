#!/usr/bin/env python3
"""Refreshes src/content/data/ctgov-geo.json from the ClinicalTrials.gov API v2.

Counts studies with overall status Recruiting and at least one location in each
state or region, overall and by therapeutic-area keyword search, plus a few
example studies per area. Run:  python3 scripts/fetch-ctgov.py  (takes a few minutes)
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
conds = {"all":None,"oncology":"cancer OR neoplasm OR carcinoma OR lymphoma OR leukemia","obesity":"obesity OR overweight OR type 2 diabetes",
 "cardiology":"heart failure OR coronary OR atrial fibrillation OR hypertension OR cardiovascular","neurology":"Alzheimer OR dementia OR Parkinson OR multiple sclerosis OR migraine OR epilepsy",
 "dermatology":"psoriasis OR atopic dermatitis OR eczema OR hidradenitis OR vitiligo OR alopecia","pain":"chronic pain OR low back pain OR osteoarthritis OR neuropathic pain OR migraine",
 "gastroenterology":"Crohn OR ulcerative colitis OR NASH OR MASH OR irritable bowel OR celiac OR eosinophilic esophagitis","psychiatry":"depression OR schizophrenia OR bipolar OR anxiety OR PTSD OR ADHD"}
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
import os; out=os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src", "content", "data", "ctgov-geo.json"); json.dump(result, open(out,"w"), indent=1)
print("saved", out)
