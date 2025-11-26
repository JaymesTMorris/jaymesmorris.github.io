const games = [
  {
    title: "Lets Shop",
    type: "hackathon",
    desc: "In 2019, I worked on a team of four at Stetson University's annual hackathon, \
    where we built \"Let's Shop\", a simple 24-hour prototype aimed at reducing checkout \
    wait times and improving shopping accessibility. Using a Makey-Makey circuit board, we \
    created a basic, mostly text-driven interface that let users add items to a virtual cart \
    and view product details. Our team won 1st place in the Makey-Makey track.",
    link: "https://devpost.com/software/lets-shop",
    code: "https://devpost.com/software/lets-shop",
  },
  {
    title: "The Customer Is Always Right!",
    type: "gamejam",
    desc: "-",
    link: "#",
    code: "#",
  },
  {
    title: "The Silent Guardian",
    type: "gamejam",
    desc: "-",
    link: "#",
    code: "#",
  },
  {
    title: "Echoes of the Grove",
    type: "gamejam",
    desc: "-",
    link: "#",
    code: "#",
  },
  {
    title: "AFMS Alert UI",
    type: "swe",
    desc: "-",
    link: "#",
    code: "#",
  }
];

function loadGames() {
  const container = document.getElementById("games-list");
  if (!container) return;

  container.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.setAttribute("data-type", game.type);

    const codeLink =
      game.code !== "#"
        ? `<a href="${game.code}" target="_blank">View Project</a>`
        : `<span style="color:#777; font-size:0.9rem;">Code Private / Concept</span>`;

    card.innerHTML = `
      <h3>
        ${
          game.link !== "#"
            ? `<a href="${game.link}" target="_blank">${game.title}</a>`
            : game.title
        }
      </h3>
      <p>${game.desc}</p>
      <span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px;">${game.type.toUpperCase()}</span>
      <br><br>
      ${codeLink}
    `;
    container.appendChild(card);
  });
}

function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));

  const clickedBtn = Array.from(buttons).find((b) =>
    b.getAttribute("onclick").includes(`'${type}'`)
  );
  if (clickedBtn) clickedBtn.classList.add("active");

  cards.forEach((card) => {
    if (type === "all" || card.dataset.type === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", loadGames);
