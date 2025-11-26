const softwareProjects = [
  {
    title: "ASRC Federal Software Engineer Intern",
    type: "Jan 2025 - Present",
    desc: "This is a description of my internship role at ASRC Federal.",
    link: "#",
    code: "#",
  },
  {
    title: "Student Tech Lead at Rowan University",
    type: "Sep 2024 - Present",
    desc: "This is a description of my role as a Student Tech Lead at Rowan University.",
    link: "#",
    code: "#",
  },
  {
    title: "Crytptologic Technician Technical (CTT) - US Navy Reserves",
    type: "June 2024 - Present",
    desc: "This is a description of my service as a Cryptologic Technician Technical in the US Navy Reserves.",
    link: "#",
    code: "#",
  },
  {
    title: "Crytptologic Technician Technical (CTT) - US Navy [ACTIVE DUTY]",
    type: "Feb 2019 - Feb 2024",
    desc: "This is a description of my service as a Cryptologic Technician Technical in the US Navy.",
    link: "#",
    code: "#",
  }
];

function loadSoftware() {
  const container = document.getElementById("software-list");
  if (!container) return;

  container.innerHTML = "";

  softwareProjects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const codeLink =
      proj.code !== "#"
        ? `<a href="${proj.code}" target="_blank">View Code</a>`
        : `<span style="color:#777; font-size:0.9rem;">Code Private</span>`;

    card.innerHTML = `
      <h3>
         <a href="${proj.link}" target="_blank">${proj.title}</a>
      </h3>
      <p>${proj.desc}</p>
      <span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px;">${proj.type.toUpperCase()}</span>
      <br><br>
      ${codeLink}
    `;
    container.appendChild(card);
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", loadSoftware);
