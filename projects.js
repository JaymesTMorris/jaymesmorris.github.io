const games = [
  {
    title: "Lets Shop",
    type: "hackathon",
    desc: "Built a shopping accessibility prototype in 24 hours at Stetson University's annual hackathon \
    with a team of 4. Using a Makey-Makey circuit board, we created a text-driven interface that let users \
    add items to a virtual cart and view product details. Placed 1st in the Makey-Makey track.",
    link: "https://devpost.com/software/lets-shop",
    code: "https://devpost.com/software/lets-shop",
  },
  {
    title: "The Customer Is Always Right!",
    type: "gamejam",
    desc: "A casual order-management simulation game inspired by Papa's Pizzeria, built in 30 days with a \
    team of 4 using Godot and GDScript. Players manage customer orders under time pressure. Received an \
    honorable mention for Best Art at the Rowan ACM Spring 2024 Game Jam.",
    link: "https://fourteencoast.itch.io/the-customer-is-always-right",
    code: "#",
  },
  {
    title: "The Silent Guardian",
    type: "gamejam",
    desc: "A 2D tower defense game where players take on the role of a ghost defending a village from \
    waves of enemies. Features upgradeable powers and towers with wave-based survival gameplay. Built in \
    30 days with a team of 2 using Godot and GDScript. Placed 3rd at the Rowan ACM Fall 2024 Game Jam.",
    link: "https://sagaciouspangolin.itch.io/the-silent-guardian",
    code: "#",
  },
  {
    title: "Echoes of the Grove",
    type: "gamejam",
    desc: "A 2D platformer where players control a satyr navigating a dying forest as time collapses \
    around them. Features dashing, relic collection, and a narrative about restoring balance. Built in \
    30 days with a team of 2 using Godot and GDScript. Placed 2nd at the Rowan ACM Fall 2025 Game Jam.",
    link: "https://sagaciouspangolin.itch.io/echoes-of-the-grove",
    code: "https://github.com/SafiaNassiri/ACM-GameJamFall25-EchoesOfTheGrove",
  },
  {
    title: "Limbo",
    type: "gamejam",
    desc: "A 2D puzzle game where players take on the role of a QA tester trapped inside the game they \
    are supposed to be testing, solving puzzles to satisfy an all-powerful AI overlord. Built in 30 days \
    with a team of 4 using Godot and GDScript. Placed 1st at the Rowan ACM Spring 2026 Game Jam.",
    link: "https://bluekillspop.itch.io/limbo",
    code: "#",
  },
  {
    title: "AFMS Alert UI",
    type: "swe",
    desc: "A Qt C++ desktop application built during a software engineering internship with ASRC Federal \
    Mission Solutions. Redesigned the alert client UI and replaced a SQLite backend with Redis/Valkey, \
    then introduced an Oat++ WebSocket layer to decouple the UI from the data backend.",
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
