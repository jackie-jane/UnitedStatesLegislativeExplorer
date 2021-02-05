# Why-Is-My-Rep-

# Project Overview
An app filled with information on elected members of our federal Legislative branch of government.

## Project Name

WHY IS MY REP

## Project Description

There are many apps that can help a constiuent discover who represents them in The United States Congress. WHY IS MY REP is a resource that allows anyone (with an internet connection) the ability to expand their knowledge on their specific representives. leveraging ProPublica's Congress API, WHY IS MY REP offers access to information regarding a represnetative's voting history, sponsored legislation, and campaign finance filings.

## API and Data Sample

Intall node module "npm install"
Install axios

Why is my rep is leverages ProPublica's Congress API, documentation here:
https://projects.propublica.org/api-docs/congress-api/

Example data from Congress API

```

{
          "id": "A000360",
          "title": "Senator, 2nd Class",
          "short_title": "Sen.",
          "api_uri": "https://api.propublica.org/congress/v1/members/A000360.json",
          "first_name": "Lamar",
          "middle_name": null,
          "last_name": "Alexander",
          "suffix": null,
          "date_of_birth": "1940-07-03",
          "gender": "M",
          "party": "R",
          "leadership_role": null,
          "twitter_account": "SenAlexander",
          "facebook_account": "senatorlamaralexander",
          "youtube_account": "lamaralexander",
          "govtrack_id": "300002",
          "cspan_id": "5",
          "votesmart_id": "15691",
          "icpsr_id": "40304",
          "crp_id": "N00009888",
          "google_entity_id": "/m/01rbs3",
          "fec_candidate_id": "S2TN00058",
          "url": "https://www.alexander.senate.gov/public",
          "rss_url": "https://www.alexander.senate.gov/public/?a=RSS.Feed",
          "contact_form": "http://www.alexander.senate.gov/public/index.cfm?p=Email",
          "in_office": true,
          "cook_pvi": null,
          "dw_nominate": 0.324,
          "ideal_point": null,
          "seniority": "17",
          "next_election": "2020",
          "total_votes": 540,
          "missed_votes": 105,
          "total_present": 0,
          "last_updated": "2020-06-04 15:07:54 -0400",
          "ocd_id": "ocd-division/country:us/state:tn",
          "office": "455 Dirksen Senate Office Building",
          "phone": "202-224-4944",
          "fax": "202-228-3398",
          "state": "TN",
          "senate_class": "2",
          "state_rank": "senior",
          "lis_id": "S289",
          "missed_votes_pct": 19.44,
          "votes_with_party_pct": 96.30,
          "votes_against_party_pct": 3.70
        },

```

## Wireframes

Below are links to the wireframe of the site.

--Please note--
text accompinied by < > represent information accessed by the API
text that ends with * represents a link that is not part of the MVP

Home Page:
https://wireframe.cc/n4GLAi

Search Page:
https://wireframe.cc/1zja8i

Result Page:
https://wireframe.cc/Q0Lf7o

Mobile Home Page:
https://wireframe.cc/bmxyFk

Mobile Search Page:
https://wireframe.cc/u74KVP

Mobile Result Page:
https://wireframe.cc/EnXHE6

### MVP/PostMVP

MVP:
-The site effectively accesses Data from ProPublica's Congress API
-render data onto the page
-Users can search the data by name
-The site is designed via CSS/Flexbox structured by HTML

PostMVP:
-Using Congress API have a search for representatives by zip code function (would be great to translate location data to lat and long)
-add animation to buttons
-Use Congress API to build out a bills section that features legislation sponsored or supported by rep
-connect a second ProPublica API that renders campaign finance filings to site

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 9| Approval / HTML / CSS / API | Complete
|June 10| Initial Clickable Model   | Complete
|June 11| Local Storage / Animation / Testing | Complete
|June 12| MPV Wrap Up / PMVP | Complete
|June 13| PMVP Wrap Up | Complete
|June 14| Final Testing / prepare for presentation | Complete
|June 15| Present | Incomplete

## Priority Matrix

You can view my priority matrix here:
https://i.imgur.com/3PwhR1u.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time | Complete/Incomplete |
| --- | :---: |  :---: | :---: | :---: | :---: |
|Wireframing (MVP)| H | 1.5 | 1.5 | 1.5 | complete |
|HTML Structure (MVP)| H | 2hrs | 2.5hrs  | 2.5hrs | complete |
|CSS/ Flex Box (MVP)| H | 4 hrs | 5hrs | 5hrs | complete |
|Adding Form (MVP)| H | 2hrs| 1hr | 1hr | complete |
|Working with API (MVP)| H | 4hrs| 8hrs | 8hrs | complete |
|Formating Result Page (MVP) | H | 3hrs | 5hrs | 5hrs | complete |
|Local Storage | H  | 3hrs  | 0  | 0  |  incomplete (see changelog) |
|Responsive Design| H | 2hrs | 0 | 0 |  incomplete |
|Testing/Debugging (MVP)| H | 3hrs | 4 hrs | 4 hrs | complete |
|CSS Animation (PMVP) | M | 2 hrs| 1.5hrs | 1.5hrs | complete (see change log) |
|Add Find your Rep (PMVP) | M | 4hrs | 8hrs | 8 hrs | complete (see changelog) |
|Additional HTML (PMVP) | L | 1.5hrs | 2hrs |  2hrs |  complete |
|Additional CSS (PMVP) | L | 0 | 3hrs | 3hrs |  complete |
|Add Location Data | L | 3hrs | 0 | 0  |  incomplete |
|Add Bills Page (PMVP) | L | 4hrs | 2hrs |  2hrs |  complete (see change log) |   complete (see change log) |
|Add Finance Page | L | 5 hrs | 1hr | 1hr |   complete (see change log) |
|Add autocomplete function to search bar | L | 0 | 6hrs | 6hrs |   incomplete (see change log) |
|Contingency | - | 5hrs | -  | - |
| Total | H | 49hrs| 50.5hrs | 50.5hrs | complete |

## Code Snippet
Below is the code that enables the search function to pass along data to the results page. This is the first time I have used a search function and regex.
```
const userInput = document.location.search.replace(/^.*?\=/, "")
```
Below is the code that allows me to use buttons to toggle whether parts of the page are visible or hidden. I have used this before, but this is the first time I fully understood exactly what was happening.
```
const coll = document.getElementsByClassName('collapse')
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("inactive")
    let content = this.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
      content.style.overflow = scroll
    }
  });
}
```
Below is the code that access and renders data from the API and calls the rest of the functions that access and render different endpoints.
```
// gets specific Senate Member Information
async function getsData() {
let sMemberUrl = 'https://api.propublica.org/congress/v1/116/senate/members.json';
  try {
    let res = await axios.get(sMemberUrl, {
      headers: {
        'X-API-Key': 'My Api Key'
      }
    })
    let response = res.data.results[0].members
    console.log(response)
    response.forEach(element => {
      if (element.first_name === userInput) {
// The block below identifies the rep's name and appends to the site
        let fName = element.first_name
        let lName = element.last_name
        let rState = element.state
        let title = element.title
        let party = element.party
        let intro = document.createElement('p')
        intro.innerHTML = `<strong>${fName} ${lName}</strong><br><strong>${title}</strong><br>${rState} (${party})`
        let namePage = document.querySelector('#name')
        namePage.append(intro)
// The block below identifies the rep's office address and appends to the site
        let office = element.office
        let oAdd = document.createElement('p')
        oAdd.innerHTML = `${office} <br> Washington, DC 20510`
        let address = document.querySelector('#address')
        address.append(oAdd)
// The block below identifies the rep's phone number and appends to the site
        let phone = element.phone
        let rPhone = document.createElement('p')
        rPhone.innerHTML = `${phone}`
        let sPhone = document.querySelector('#phone')
        sPhone.append(rPhone)
// The block below identifies the rep's email and appends to the site
        let email = element.contact_form
        let rEmail = document.createElement('p')
        if (email === null) {
          rEmail.innerHTML = `Email not provided`
        } else {
          rEmail.innerHTML = `<a href='${email}'>Email</a>`
        }
        let contactInfo = document.querySelector('#contactInfo')
        contactInfo.append(rEmail)
// The block below identifies the rep's Website and appends to the site
        let web = element.url
        let rWeb = document.createElement('p')
        if (web === null) {
          rWeb.innerHTML = `Website not provided`
        } else {
          rWeb.innerHTML =`<a href='${web}'>Website</a>`
        }
        contactInfo.append(rWeb)
// The block below identifies the rep's Facebook and appends to the site
        let fb = element.facebook_account
        let rFb = document.createElement('p')
        if (fb === null) {
          rFb.innerHTML = `Facebook not provided`
        } else {
          `<a href='https://www.facebook.com/${fb}'>Facebook</a>`
        }
        contactInfo.append(rFb)
// The block below identifies the rep's YouTube and appends to the site
        let yt = element.youtube_account
        let rYt = document.createElement('p')
        if (yt === null) {
          rYt.innerHTML = `YouTube not provided`
        } else {
          rYt.innerHTML = `<a href='https://www.youtube.com/${yt}}'>YouTube</a>`
        }
        contactInfo.append(rYt)
// The block below identifies the rep's Fax Number and appends to the site
        let fax = element.fax
        let rFax = document.createElement('p')
        if (fax === null) {
          rFax.innerHTML = `Fax not provided`
        } else {
          rFax.innerHTML = `${fax}`
        }
        let sFax = document.querySelector('#fax')
        sFax.append(rFax)
// The block below identifies information to include in our summary page
        let dob = element.date_of_birth
        let crp = element.crp_id
        let fec = element.fec_candidate_id
        let govTrack = element.govtrack_id
        let missedV = element.missed_votes
        let missedVPct = element.missed_votes_pct
        let opp = element.next_election
        let votesAg = element.votes_against_party_pct
        let voteSmart = element.votesmart_id
        let age = ''
//The block below appends data to our summary page
        let summary = document.createElement('div')
        summary.setAttribute('class', 'summary')
        summary.innerHTML = `
          <table>
	          <tbody>
		          <tr>
			          <td>
				          <p><strong>Date of Birth:</strong> ${dob}</p>
                </td>
              </tr>
		          <tr>
			          <td>
				          <p><strong>Next Election:</strong> ${opp}</p>
			          </td>
			          <td>
				          <a href='https://runforsomething.net/'>(why don&rsquo;t you run against them?)</a>
			          </td>
		          </tr>
		          <tr>
			          <td colspan="2">
				          <p><strong>Percent of votes against their party:</strong> ${votesAg}</p>
			          </td>
		          </tr>
		          <tr>
			          <td colspan="2">
				          <p><h2 style='text-align:center'>Information on missed votes during the 116<sup>th</sup> congress:</h2></p>
			          </td>
		          </tr>
		          <tr>
			          <td>
				          <p><strong>Total Missed Votes:</strong> ${missedV}</p>
			          </td>
			          <td>
				          <p><strong>Percent of Missed Votes:</strong> ${missedVPct}</p>
			          </td>
		          </tr>
		          <tr>
			          <td colspan="2">
				          <p><h2 style='text-align:center'>Research Resources:</h2></p>
			          </td>
		          </tr>
		          <tr>
			          <td>
				          <a href='https://www.fec.gov/data/candidate/${fec}/' target='_blank'>FEC Filings</a>
			          </td>
			          <td>
				          <a href='https://www.opensecrets.org/members-of-congress/summary?cid=${crp}&amp;cycle=2020' target='_blank'>Open Secrets Data on Rep</a>
			          </td>
		          </tr>
		          <tr>
			          <td>
				          <a href='https://www.govtrack.us/congress/members/${fName}_${lName}/${govTrack}/report-card/2019' target='_blank'>GovTrack Report Card</a>
			          </td>
			          <td>
				          <a href='https://justfacts.votesmart.org/candidate/biography/${voteSmart}' target='_blank'>Vote Smart Data</a>
			          </td>
		          </tr>
	          </tbody>
          </table>`
        let wSummary = document.querySelector('#summary')
        wSummary.append(summary)
        let rId = element.id
        renderImage(rId)
        getStatement(rId)
        getActiveBills(rId)
        getPassedBills(rId)
        getEnactedBills(rId)
        getVetoBills(rId)
        getVotes(rId)
      }
    });
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}
```
## Change Log
6.10.2020 -- While beginning to format the data provided on the result of a search it seems best to display it all on one page rather than seperate pages. This mean that there will not be seperate bills and finacne pages it will all be in on result page. I added a navgation bar to the right to help filter the user filter through the responses.

6.11.2020 -- The search function still does not autocomplete. I have spent a significant amount of time trying to get it to work and it's best that I move on with the project and incorperae autocomplete later.

6.11.2020 -- open-source data to find representatives based on geography seems to be hard to come by. There is one option that invovles census data in a legacy shapefiles in R. I have opted to include an Iframe of congressional districts, with a link to govtrack to find your rep. I will try to include a better way to find your rep in furhter updates.

6.12.2020 -- At the moment there is not a valid reason for me to add local stroage to the site. When I get a valid find your reps function then I will incorperate local data.

6.13.2020 -- I have included buttons that toggle wheter information is hidden or visible, rather than css animation.

