const membersURL       = "./data/members.json";
const memberGridEl     = document.getElementById("member-grid");
const memberGridToggle = document.getElementById("member-grid-toggle");

async function fetchMembers() {
  try {
    const response = await fetch(membersURL);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    displayMembers(data.members);
  } catch (error) {
    console.log(error);
  }
}

const displayMembers = (members) => {
  let memberHTML = members.map(member => {
    return `<div class="card member">
              <div class="member-card-header">
                <h3>${member.name}</h3>
                <img src="./images/${member.image}" width="50" height="50">
              </div>
              <p>Address: ${member.address}</p>
              <p>Phone: ${member.phone}</p>
              <p>Membership level: ${member.membership_level}</p>
              <p class="other-info">Other Info: ${member.other_information}</p>
              <a href="${member.website}">Website</a>
            </div>`
  }).join("");

  memberGridEl.innerHTML = memberHTML;
}

memberGridToggle.addEventListener("click", () => {
  memberGridEl.classList.toggle("member-grid");
  memberGridEl.classList.toggle("member-column");

  let members = document.getElementsByClassName("member");

  Array.from(members).forEach(memberEl => {
    memberEl.classList.toggle("card");
    memberEl.classList.toggle("member-line-item");
  });
});

// Main
fetchMembers();