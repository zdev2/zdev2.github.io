document.addEventListener("DOMContentLoaded", function () {
  let projects = [
    { name: "TutkiLibrary", description: "A library management system" },
    { name: "CempakaCash", description: "An online payment platform" },
    { name: "CCCalc", description: "A calculator application" },
    {
      name: "PHP Simple C.R.U.D.",
      description: "A simple CRUD application using PHP",
    },
    { name: "MasakinAja", description: "A cooking recipe website" },
  ];

  const app = document.getElementById("portfolio-app");

  for (var i = 0; i < projects.length; i++) {
    const portfolioCard = document.createElement("div");
    portfolioCard.className = "portfolio-card";

    const projectName = document.createElement("h2");
    projectName.textContent = projects[i].name;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = projects[i].description;

    portfolioCard.appendChild(projectName);
    portfolioCard.appendChild(projectDescription);

    app.appendChild(portfolioCard);
  }
});
