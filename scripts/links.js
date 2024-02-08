const baseURL       = "https://aaroncdee.github.io/wdd230/";
const linksURL      = "https://aaroncdee.github.io/wdd230/data/links.json";
const courseLinksEl = document.getElementById("course-links");

async function fetchLinks() {
  try {
    const response = await fetch(linksURL);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    displayLinks(data.weeks);
  } catch (error) {
    console.log(error);
  }
}

const displayLinks = (weeks) => {
  let links = weeks.map(week => `<li>${week.week}: ${week.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(" | ")}</li>`).join("");

  courseLinksEl.innerHTML = links;
}

// MAIN
fetchLinks();