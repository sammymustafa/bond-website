# Search and AI-answer (GEO) scripts

Scripts that pull Bond's search data, ask AI models the questions buyers ask, and judge every page. They use the OpenAI API directly and write reports to `reports/geo/<date>/`, which git ignores. Nothing here changes the site: suggestions are applied to `src/content` by hand and pass `npm run validate` like any other edit.

| Command | What it does |
| --- | --- |
| `npm run geo:check` | Confirms the OpenAI key, lists the models it can use, and checks Search Console access. |
| `npm run geo:queries` | **Step 1.** Labels every Search Console query by who is searching (site buyer, sponsor/CRO, patient, student, competitor, brand) and flags buyer queries that rank below page 1 or get no clicks. |
| `npm run geo:citations` | **Steps 2 and 4.** Asks each question in `questions.txt` through OpenAI with web search, several times. Records whether Bond is mentioned or cited, who is mentioned and cited instead, and what the model searched for. |
| `npm run geo:pages` | **Step 6.** Keep or change for the title, meta description, H1, FAQ and schema of every live page, using Search Console clicks and queries when available. |
| `npm run geo:match` | **Step 3.** Matches each buyer question to the best page and lists questions with no good page. Questions come from Search Console buyer queries, `questions.txt`, and ChatGPT's searches. Uses the Decisions API. |
| `npm run geo:score` | **Step 5.** Scores each page on what gets a page cited (answer up front, specific sourced facts, question headings, quotable structure, clarity about Bond, coverage, original material). Low scores become a rewrite checklist per page. Uses the Decisions API. |
| `npm run geo:plan` | **Step 7.** Sorts the pages ChatGPT cites by type, picks a page type for each unanswered buyer question that Bond can credibly answer, and lists pages to edit. Uses the Decisions API. It writes lists, not pages: drafting goes through the normal content process. |

Run order for a full pass: `geo:queries`, `geo:citations`, `geo:pages`, then `geo:match`, `geo:score` and `geo:plan`, which read the earlier reports.

The Decisions API (`POST /v1/decisions`, gpt-6-luna) handles bounded judgments: a probability, a choice or a score. It returns no text, so anything that writes, such as suggested titles, uses the Responses API.

Every command takes `--dry-run`, which shows what it would send without calling any API, and `--limit N` for a cheap test.

## Setup

1. **OpenAI key.** Create `.env.local` in the repo root (git ignores it):

   ```
   OPENAI_API_KEY=sk-...
   # optional; run geo:check to see which models your key can use
   OPENAI_MODEL=gpt-6-luna
   OPENAI_SEARCH_MODEL=gpt-6-luna
   ```

2. **Search Console (pick one).**
   - **Export (no setup).** In Search Console, open Performance, set the date range, click Export > Download CSV, and unzip. Then run `npm run geo:queries -- --queries-csv Queries.csv` or `npm run geo:pages -- --pages-csv Pages.csv`. An export has no query-to-page breakdown, so the API gives better page audits.
   - **API (set up October 2026).** Bond's Google organization blocks service-account key files, so the scripts use a key-less service account instead:
     - Google Cloud project `bond-website-search`, with the Search Console API and IAM Credentials API turned on.
     - Service account `search-console-reader@bond-website-search.iam.gserviceaccount.com`, with no Google Cloud roles. Its only access is "Restricted" (read-only) on the bondtrials.com property in Search Console.
     - rishabh@bondtrials.com holds "Service Account Token Creator" on that account. Each run, the scripts ask gcloud for a one-hour token, so nothing long-lived is stored.

     On a machine with the Google Cloud CLI, sign in with `gcloud auth login`, then add this line to `.env.local`:

     ```
     GSC_IMPERSONATE_SERVICE_ACCOUNT=search-console-reader@bond-website-search.iam.gserviceaccount.com
     # GSC_SITE=sc-domain:bondtrials.com   (default; use https://bondtrials.com/ for a URL-prefix property)
     ```

     To give someone else access, grant them Token Creator on the service account. Where key files are allowed, `GSC_SERVICE_ACCOUNT_FILE=/path/to/key.json` also works.

3. Run `npm run geo:check`.

## Cost

Labeling and page audits are batched where possible: about 40 queries per request, and one request per page. Decisions requests cost $0.10 per million input tokens, with no output charge. At launch prices, GPT-6 Luna through the Responses API costs $0.10 per million input tokens and $0.50 per million output tokens, and web search costs $10 per 1,000 calls. The citation check pays for web searches as well as tokens: 22 questions × 3 runs is 66 requests, each of which can search several times. Each report ends with a usage line (requests, tokens, web searches) to price against OpenAI's current rates.

## Limits

- The API with web search stands in for the ChatGPT app; its searches and answers are close but not identical.
- Answers vary from run to run; read the citation results as rates, not single answers.
- Claude and Gemini are not checked yet; that needs their API keys.
- Vendor-name matching in the citation report is approximate.
