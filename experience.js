const softwareProjects = [
  {
    title: "ASRC Federal Software Engineer Intern",
    type: "Jan 2025 - Present",
    desc: "I support ASRC Federal Mission Solutions as part of Rowan University’s research team, helping \
    modernize U.S. Navy combat-system interfaces using C++ and Qt (a C++ UI framework) to improve usability \
    and support current naval fleet requirements. I focus on improving usability, updating legacy components, \
    and contributing to ongoing modernization work."
  },
  {
    title: "Student Tech Lead at Rowan University",
    type: "Sep 2024 - Present",
    desc: "Oversees technical equipment in the Rowan University TechLounge & MakerSpace, including 3D \
    printers, 3D scanners, and robotic arms. Responsibilities include participating in the interviewing and \
    hiring of 24 student workers and developing detailed user guides covering setup, operation, and closing \
    procedures for lab equipment."
  },
  {
    title: "Crytptologic Technician Technical (CTT) - US Navy Reserves",
    type: "June 2024 - Present",
    desc: "Continuing service in the U.S. Navy Reserves while pursuing academic and professional goals, \
    maintaining an active clearance."
  },
  {
    title: "Crytptologic Technician Technical (CTT) - US Navy ACTIVE DUTY",
    type: "Feb 2019 - Feb 2024",
    desc: "Served as a Cryptologic Technician Technical and Work Center Supervisor, leading a division of \
    20 sailors and ensuring the completion of corrective and preventive maintenance across mission-critical \
    systems. Responsibilities included training and mentoring junior personnel, maintaining operational \
    readiness, and supporting anti-ship cruise missile defense and electronic warfare operations."
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
      <h3 class="experience-title">${proj.title}</h3>
      <p>${proj.desc}</p>
      <span class="skills-badge" style="font-size:0.75rem; background:#444; padding: 4px 10px;">${proj.type.toUpperCase()}</span>`;
    container.appendChild(card);
  });
}

// Run on load
document.addEventListener("DOMContentLoaded", loadSoftware);
