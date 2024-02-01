const webApp = document.getElementById("web-apps");
const appProjects = document.getElementById("app-projects");
const feathers = document.getElementById("feathers-games");
const webAppBtn = document.getElementById("web-apps-btn");
const appProjectsBtn = document.getElementById("app-projects-btn");
const feathersBtn = document.getElementById("feathers-games-btn");

function hideAllSections() {
  webApp.classList.add("hidden");
  appProjects.classList.add("hidden");
  feathers.classList.add("hidden");
}

function showSection(section, button, span) {
  section.classList.remove("hidden");
  button.classList.add("active");
  span.classList.remove("hidden");
}

function resetButtons() {
  webAppBtn.classList.remove("active");
  appProjectsBtn.classList.remove("active");
  feathersBtn.classList.remove("active");

  webAppBtn.querySelector("span").classList.add("hidden");
  appProjectsBtn.querySelector("span").classList.add("hidden");
  feathersBtn.querySelector("span").classList.add("hidden");
}

webAppBtn.addEventListener("click", function () {
  hideAllSections();
  resetButtons();
  showSection(webApp, webAppBtn, webAppBtn.querySelector("span"));
});

appProjectsBtn.addEventListener("click", function () {
  hideAllSections();
  resetButtons();
  showSection(
    appProjects,
    appProjectsBtn,
    appProjectsBtn.querySelector("span")
  );
});

feathersBtn.addEventListener("click", function () {
  hideAllSections();
  resetButtons();
  showSection(feathers, feathersBtn, feathersBtn.querySelector("span"));
});

// showSection(appProjects, appProjectsBtn, appProjectsBtn.querySelector("span"));
