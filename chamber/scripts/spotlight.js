const membersURL         = "./data/members.json";
const memberImgURL       = "./images/"
const validSpotlightLvls = ["Silver", "Gold"];
const spotlightEl        = document.getElementById("spotlights");

async function fetchMembers() {
  try {
    const response = await fetch(membersURL);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    displayMemberSpotlights(selectRandomMembers(data.members));
  } catch (error) {
    console.log(error);
  }
}

const selectRandomMembers = (members) => {
  const validMembers    = members.filter(member => validSpotlightLvls.includes(member.membership_level));

  return validMembers.sort(() => Math.random() - 0.5).slice(0,3);
}

const displayMemberSpotlights = (members) => {
  let spotlightHTML = "";

  members.forEach(member => {
    spotlightHTML += `
      <div class="card p-20">
        <h3 class="member-card-header">${member.name} <span><img src="${memberImgURL + member.image}" width="50" height="50"></span></h3>
        <p>${member.other_information}</p>
        <p>Phone: ${member.phone}</p>
        <p><a href="https://google.com" target="_blank">${member.website}</a></p>
      </div>
    `
  });

  spotlightEl.innerHTML = spotlightHTML;
}

// Main
fetchMembers();