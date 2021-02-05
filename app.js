
const userInput = document.location.search.replace(/^.*?\=/, "")
// used this code to help make collapsible buttons on results page https://stackoverflow.com/questions/51031556/display-collapse-content-one-at-a-time
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
// gets specific Senate Member Information
async function getsData() {
let sMemberUrl = 'https://api.propublica.org/congress/v1/116/senate/members.json';
  try {
    let res = await axios.get(sMemberUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
    let response = res.data.results[0].members
    console.log(response)
    response.forEach(element => {
      if (element.first_name === userInput || element.id === userInput || element.last_name === userInput ) {
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
//gets specific House Member Information
async function gethData() {
  let hMemberUrl = 'https://api.propublica.org/congress/v1/116/house/members.json';
  try {
    let res = await axios.get(hMemberUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
    res.data.results[0].members.forEach(element => {
      if (element.first_name === userInput || element.id === userInput || element.last_name === userInput || element.first_name + element.last_name === userInput) {
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
const renderImage = (rId) => {
//using rId we can access images by size and by id from the below url and append to site
  let imgUrl = 'https://theunitedstates.io/images/congress/225x275/' + (rId) + '.jpg'
  let rImg = document.createElement('img')
  rImg.setAttribute('id', 'headShot')
  rImg.src = imgUrl
  let imgContainer = document.querySelector('#rImg')
  imgContainer.append(rImg)
  }
//Uses ProPublica Congress API 'Statements' end-point
async function getStatement(rId) {
  let statementUrl = 'https://api.propublica.org/congress/v1/members/' + rId + '/statements/116.json';
  try {
    let res2 = await axios.get(statementUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
//after data is retrieved it is renderd to the page with the below code block
    res2.data.results.forEach(element => {
      let statement = document.createElement('div')
      statement.setAttribute('class', 'statement')
      let title = element.title
      let type = element.statement_type
      let statUrl = element.url
      let sDate = element.date
      statement.innerHTML = `<strong>${sDate}</strong><br><br>${type}<br><br><a href='${statUrl}'>${title}</a>`
      let wStat = document.querySelector('#pr')
      wStat.append(statement)
    })
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}

//Pulls active bills that member is sponsoring
async function getActiveBills(rId) {
  let activeUrl = 'https://api.propublica.org/congress/v1/members/' + rId + '/bills/active.json';
  try {
    let res2 = await axios.get(activeUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
//after data is retrieved it is renderd to the page with the below code block
    if (res2.data.results[0].num_results >= 1) {
      res2.data.results[0].bills.forEach(element => {
        let activeB = document.createElement('div')
        activeB.setAttribute('class', 'bill')
        let title = element.title
        let billId = element.bill_id
        let introduced = element.introduced_date
        let link = element.govtrack_url
        activeB.innerHTML = `<strong>${billId}</strong><br><br>Introduced ${introduced}<br><br><a href='${link}'>${title}</a><br>`
        let wActiveB = document.querySelector('#activeB')
        wActiveB.append(activeB)
      })
// if else accounts for reps who may have not sponsored legislation during this congress--often newer reps.
    } else {
      let activeB = document.createElement('p')
      activeB.innerHTML = `No bills enacted during the 116th Congress`
      let wActiveB = document.querySelector('#passedB')
      wActiveB.append(activeB)
    }
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}
//Pulls recent bills member is sponsor of that passed
async function getPassedBills(rId) {
  let passedUrl = 'https://api.propublica.org/congress/v1/members/' + rId + '/bills/passed.json';
  try {
    let res2 = await axios.get(passedUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
//after data is retrieved it is renderd to the page with the below code block
    if (res2.data.results[0].num_results >= 1) {
      res2.data.results[0].bills.forEach(element => {
        let passedB = document.createElement('div')
        passedB.setAttribute('class', 'bill')
        let title = element.title
        let billId = element.bill_id
        let introduced = element.introduced_date
        let link = element.govtrack_url
        passedB.innerHTML =`<strong>${billId}</strong><br><br>Introduced ${introduced}<br><br><a href='${link}'>${title}</a><br>`
        let wPassedB = document.querySelector('#passedB')
        wPassedB.append(passedB)
      })
// if else accounts for reps who may have not sponsored legislation during this congress--often newer reps.
    } else {
      let passedB = document.createElement('p')
      passedB.innerHTML = `No bills enacted during the 116th Congress`
      let wPassedB = document.querySelector('#passedB')
      wPassedB.append(passedB)
    }
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}
//Pulls recent bills member is sponsor of that were enacted
async function getEnactedBills(rId) {
  let enactedUrl = 'https://api.propublica.org/congress/v1/members/' + rId + '/bills/enacted.json';
  try {
    let res2 = await axios.get(enactedUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
//after data is retrieved it is renderd to the page with the below code block
    if (res2.data.results[0].num_results >= 1) {
      res2.data.results[0].bills.forEach(element => {
        let enactedB = document.createElement('div')
        enactedB.setAttribute('class', 'bill')
        let title = element.title
        let billId = element.bill_id
        let introduced = element.introduced_date
        let link = element.govtrack_url
        enactedB.innerHTML = `<strong>${billId}</strong><br><br>Introduced ${introduced}<br><br><a href='${link}'>${title}</a><br>`
        let wEnactedB = document.querySelector('#enactedB')
        wEnactedB.append(enactedB)
      })
// if else accounts for reps who may have not sponsored legislation during this congress--often newer reps.
    } else {
      let enactedB = document.createElement('p')
      enactedB.innerHTML = `No bills enacted during the 116th Congress`
      let wEnactedB = document.querySelector('#enactedB')
      wEnactedB.append(enactedB)
    }
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}
//Pulls recent bills member is sponsor of that were vetoed 
async function getVetoBills(rId) {
  let vetoUrl = 'https://api.propublica.org/congress/v1/members/' + rId + '/bills/vetoed.json';
  try {
    let res2 = await axios.get(vetoUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
//after data is retrieved it is renderd to the page with the below code block
    if (res2.data.results[0].num_results >= 1) {
      res2.data.results[0].bills.forEach(element => {
        let vetoedB = document.createElement('p')
        vetoedB.setAttribute('class', 'bill')
        let title = element.title
        let billId = element.bill_id
        let introduced = element.introduced_date
        let link = element.govtrack_url
        vetoedB.innerHTML = `<strong>${billId}</strong><br><br>Introduced ${introduced}<br><br><a href='${link}'>${title}</a><br>`
        let wVetoedB = document.querySelector('#vetoedB')
        wVetoedB.append(vetoedB)
      })
//if else accounts for reps who may have not sponsored legislation during this congress
//or reps from the ruling party who may not have had legislation vetoed
    } else {
      let vetoedB = document.createElement('p')
      vetoedB.innerHTML = `No bills vetoed during the 116th Congress`
      let wVetoedB = document.querySelector('#vetoedB')
      wVetoedB.append(vetoedB)
    }
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}
//Pulls specific votes by member
async function getVotes(rId) {
  let votesUrl = 'https://api.propublica.org/congress/v1/members/' + rId + '/votes.json'
  try {
    let res2 = await axios.get(votesUrl, {
      headers: {
        'X-API-Key': 'gdUoATjHhHM8KkcS99bBqRw9vLEqGfvMYtHRCbgE'
      }
    })
//after data is retrieved it is renderd to the page with the below code block
    res2.data.results[0].votes.forEach(element => {
      let date = element.date
      let id = element.bill.bill_id.toUpperCase()
      let title = element.bill.title
//if statements help handle inconsitincy in data. For instance, if the vote is in 
//relation to a nomination it will not have a title
      if (title === null) {
        title = 'N/A'
      }
      let description = element.description
      if (description === null) {
        description = 'N/A'
      }
      let latestAction = element.bill.latest_action
      if (latestAction === null) {
        latestAction = 'N/A'
      }
      let position = element.position
      let no = element.total.no
      let noVotes = element.total.not_voting
      let present = element.total.present
      let yes = element.total.yes
      let vote = document.createElement('div')
      vote.setAttribute('class', 'vote')
//The code below appends the data into a table, which I designed in microsoft word and
//converted using a tool online.
      vote.innerHTML =
      `<table>
      <tbody>
        <tr>
          <td>
            <p>${id}</p>
          </td>
          <td>
          <p>    </p>
          </td>
          <td>
            <p><strong>Date: </strong>${date}</p>
          </td>
          <td>
          <p>    </p>
          </td>
          <td>
            <p><strong>Rep&rsquo;s Position: </strong>${position}</p>
          </td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td>
            <p><strong>Title:</strong></p>
          </td>
          <td style>
            <p>${title}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p><strong>Description:</strong></p>
          </td>
          <td>
            <p>${description}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p><strong>Latest Action:</strong></p>
          </td>
          <td>
            <p>${latestAction}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td>
            <p>Total Votes:</p>
          </td>
          <td>
          <p>  </p>
          </td>
          <td>
            <p><strong>Yes:</strong> ${yes}</p>
          </td>
          <td>
          <p>    </p>
          </td>
          <td>
            <p><strong>No:</strong> ${no}</p>
          </td>
          <td>
          <p>    </p>
          </td>
          <td>
            <p><strong>Present:</strong> ${present}</p>
          </td>
          <td>
          <p>    </p>
          </td>
          <td>
            <p><strong>Not Voting:</strong> ${noVotes}</p>
          </td>
        </tr>
      </tbody>
    </table>`
      let sVote = document.querySelector('#votes')
      sVote.append(vote)
    })
  } catch (error) {
    console.log(`This is your ${error}`)
  }
}
//Finally we call the gethData, which matches house reps with our user input
//as well as getsdata, doing the same thing for senators.These functions call the
//rest of the functions in our js file accept for the two at the top which handle
//the search function and the collapsible buttons on our results page
gethData()
getsData()


