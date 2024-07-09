var app = document.getElementById("app");

var projectData = [
  // 6 elements
  {
    title: "Minimalist Portfolio Web",
    description: "a minimalist portfolio web using HTML, CSS and JavaScript",
    link: "https://zdev2.github.io",
  },
  {
    title: "CMD Books",
    description:
      "c++ based cli program that provides various books from a google drive.",
    link: "https://zdev2.github.io/cmdbooks",
  },
  {
    title: "Biography Web",
    description:
      "it's my teacher biography web, this web is designed by my friend Dendra",
    link: "https://biografi-kelompok2.netlify.app",
  },
];

var experienceData = [
  {
    position: "Junior Backend Developer",
    duration: "2024 - present",
    description: "i got a certificate from a workshop!",
  },
  {
    position: "Game Developer",
    duration: "2020 - Present",
    description: "i love to make games, but the files got corrupted",
  },
];

function FontHandle() {
  var val = document.getElementById("font").value;
  switch (val) {
    case "ms":
      document.body.style.fontFamily = "JetBrains Mono";
      document.documentElement.style.setProperty(
        "--font-family",
        "JetBrains Mono"
      );
      break;
    case "ss":
      document.body.style.fontFamily = "Helvetica";
      document.documentElement.style.setProperty("--font-family", "Helvetica");
      break;
    case "s":
      document.body.style.fontFamily = "Georgia";
      document.documentElement.style.setProperty("--font-family", "Georgia");
      break;
  }
}

function ColorHandle() {
  var val = document.getElementById("color").value;
  switch (val) {
    // Color: Grayscale, Red, Green, Yellow, Cyan, Orange, Pink
    case "grayscale":
      document.documentElement.style.setProperty("--main-color", "#000000");
      document.documentElement.style.setProperty("--bg-color", "#FFFFFF");
      document.documentElement.style.setProperty("--link-color", "#757575");
      document.documentElement.style.setProperty("--card-color", "#E0E0E0");
      break;
    case "red":
      document.documentElement.style.setProperty("--main-color", "#530101");
      document.documentElement.style.setProperty("--bg-color", "#FFE2E2");
      document.documentElement.style.setProperty("--link-color", "#FF5353");
      document.documentElement.style.setProperty("--card-color", "#FFC1C1");
      break;
    case "green":
      document.documentElement.style.setProperty("--main-color", "#003606");
      document.documentElement.style.setProperty("--bg-color", "#D6FFDB");
      document.documentElement.style.setProperty("--link-color", "#6A9C70");
      document.documentElement.style.setProperty("--card-color", "#ADFFB6");
      break;
    case "yellow":
      document.documentElement.style.setProperty("--main-color", "#4E4200");
      document.documentElement.style.setProperty("--bg-color", "#FFFACD");
      document.documentElement.style.setProperty("--link-color", "#978000");
      document.documentElement.style.setProperty("--card-color", "#FFF8DC");
      break;
    case "cyan":
      document.documentElement.style.setProperty("--main-color", "#006560");
      document.documentElement.style.setProperty("--bg-color", "#C5FFFC");
      document.documentElement.style.setProperty("--link-color", "#00978F");
      document.documentElement.style.setProperty("--card-color", "#B0E0E6");
      break;
    case "orange":
      document.documentElement.style.setProperty("--main-color", "#D57500");
      document.documentElement.style.setProperty("--bg-color", "#FFE4B5");
      document.documentElement.style.setProperty("--link-color", "#FF8C00");
      document.documentElement.style.setProperty("--card-color", "#FFDAB9");
      break;
    case "pink":
      document.documentElement.style.setProperty("--main-color", "#FF69B4");
      document.documentElement.style.setProperty("--bg-color", "#FFF0F5");
      document.documentElement.style.setProperty("--link-color", "#FF1493");
      document.documentElement.style.setProperty("--card-color", "#FFD0E5");
      break;
  }
}

window.onload = function () {
  app.append(Hero(), About(), Projects(), Experience(), Contact());

  // Add event listeners for the buttons after appending
  document
    .getElementById("instagram-btn")
    .addEventListener("click", function () {
      window.location.href = "https://www.instagram.com/_bgspw";
    });

  document.getElementById("threads-btn").addEventListener("click", function () {
    window.location.href = "https://www.threads.net/_bgspw";
  });

  document.getElementById("email-btn").addEventListener("click", function () {
    window.location.href = "mailto:mail.bagusperwira@gmail.com";
  });
};

function Hero() {
  var hero = document.createElement("div");
  hero.id = "home";
  hero.className = "screen items-center";
  hero.innerHTML = `
        <h1 class="hero-title">Bagus Perwira</h1>
        <h3 class="hero-jobdesk">Backend & Game Developer</h3>
        <p class="hero-paragraph">I'm a web developer with a passion for creating engaging and user-friendly websites.</p>
    `;
  return hero;
}

function About() {
  var about = document.createElement("div");
  about.id = "about";
  about.className = "screen items-center";
  about.innerHTML = `
        <h2 class="about-title">About Me</h2>
        <p class="about-description">I recently learn Golang and JavaScript Framework like <b>Vue, React and Express</b>.<br>My Goal is to use my skills to create amazing games for learning JavaScript or other programming languages</p>
    `;
  return about;
}

function Projects() {
  var projects = document.createElement("div");
  var projectsContainer = document.createElement("div");
  projects.id = "projects";
  projects.className = "min-screen p-screen justify-center";
  projectsContainer.className = "projects-container";
  projects.innerHTML = `
        <h2 class="projects-titlex">Projects</h2>
        `;
  projects.appendChild(projectsContainer);

  if (projectData.length === 0) {
    projects.innerHTML = `
    <h2 class="projects-titlex">Projects</h2>
          <p class="placeholder">There is no project here!</p>
        `;
  } else {
    for (var i = 0; i < projectData.length; i++) {
      projectsContainer.innerHTML += `
            <div class="project card-projects">
                <img src="https://picsum.photos/1000/500">
                <div class="text-project">
                  <h3>${projectData[i].title}</h3>
                  <p>${projectData[i].description}</p>
                  <a href="${projectData[i].link}" class="link">View Project</a>
                </div>
            </div>
          `;
    }
    projects.innerHTML += `
          <p class="end-text">and that's it!</p>
        `;
  }

  return projects;
}

function Experience() {
  var experience = document.createElement("div");
  var experienceContainer = document.createElement("div");
  experience.id = "experience";
  experience.className = "min-screen p-screen";
  experienceContainer.className = "experience-container";
  experience.innerHTML = `
        <h2 class="experience-title">Experience</h2>
        `;
  experience.appendChild(experienceContainer);
  for (var i = 0; i < experienceData.length; i++) {
    experienceContainer.innerHTML += `
          <div class="experiences">
              <h3>${experienceData[i].position}</h3>
              <p>${experienceData[i].duration}</p>
              <p>${experienceData[i].description}</p>
          </div>
        `;
  }
  experience.innerHTML += `
          <p class="end-text">and that's it!</p>
        `;
  return experience;
}

function Contact() {
  var contact = document.createElement("div");
  contact.id = "contact";
  contact.className = "screen items-center justify-center";
  contact.innerHTML = `
    <h2>You Can Contact Me on:</h2>
    <div class="social-media">
      <button id="instagram-btn">Instagram</button>
      <button id="threads-btn">Threads</button>
      <button id="email-btn">Email</button>
    </div>
  `;

  return contact;
}
