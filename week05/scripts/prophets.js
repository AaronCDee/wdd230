const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  let response = await fetch(url);
  let data     = await response.json();

  console.table(data.prophets);

  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  let prophetHtml = "";

  prophets.forEach(prophet => {
    prophetHtml +=  `
                      <div class="card">
                        <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}" loading="lazy" width="340" height="440">
                        <div class="container">
                          <h4><b>${prophet.name} ${prophet.lastname}</b></h4>
                        </div>
                      </div>
                    `;
  });

  cards.innerHTML = prophetHtml;
}

getProphetData();
