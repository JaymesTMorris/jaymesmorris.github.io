const softwareProjects = [
  {
    title: "ASRC Federal Software Engineer Intern",
    type: "Jan 2025 - Present",
    desc: "This is a description of my internship role at ASRC Federal."
  },
  {
    title: "Student Tech Lead at Rowan University",
    type: "Sep 2024 - Present",
    desc: "This is a description of my role as a Student Tech Lead at Rowan University."
  },
  {
    title: "Crytptologic Technician Technical (CTT) - US Navy Reserves",
    type: "June 2024 - Present",
    desc: "This is a description of my service as a Cryptologic Technician Technical in the US Navy Reserves."
  },
  {
    title: "Crytptologic Technician Technical (CTT) - US Navy [ACTIVE DUTY]",
    type: "Feb 2019 - Feb 2024",
    desc: "This is a description of my service as a Cryptologic Technician Technical in the US Navy."
  }
];

function loadSoftware() {
  const container = document.getElementById("software-list");
  if (!container) return;

  container.innerHTML = "";

  softwareProjects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>
         <a>${proj.title}</a>
      </h3>
      <p>${proj.desc}</p>
      <span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px;">${proj.type.toUpperCase()}</span>`;
    container.appendChild(card);
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", loadSoftware);
