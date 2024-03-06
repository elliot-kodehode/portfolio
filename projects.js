const projectsRow = document.getElementById("projects-row")
const nextButton = document.getElementById("project-nav-btn-right")
const previousButton = document.getElementById("project-nav-btn-left")

import { isDarkMode, colorPicker } from "/script.js";


const projects = [
	{
		name: "API-project: F2P Games",
		image: "icons/placeholderpic1.png",
		description: "In my frontend developer course we got an assignment to create a website using APIs. I decided to make a website listing free to play games with FreeToBrowse's API. I also added functions to sort and filter the content based on user input.",
		skills: ["HTML", "CSS", "Javascript", "API"],
		liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
		repoLink: "" },
	{
		name: "Pet adoption website",
		image: "icons/placeholderpic1.png",
		description: "",
		skills: ["HTML", "CSS", "Javascript"],
		liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
		repoLink: "" },
	{
		name: "Some random project",
		image: "icons/placeholderpic1.png",
		description: "",
		skills: ["HTML", "CSS", "React"],
		liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
		repoLink: "" },
	{
		name: "Some random test project",
		image: "icons/placeholderpic1.png",
		description: "",
		skills: ["HTML", "CSS", "React"],
		liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
		repoLink: "" },
	{
		name: "Some random test project 6",
		image: "icons/placeholderpic1.png",
		description: "",
		skills: ["HTML", "CSS", "React"],
		liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
		repoLink: "" },
	{
		name: "Some random test project 6",
		image: "icons/placeholderpic1.png",
		description: "",
		skills: ["HTML", "CSS", "React"],
		liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
		repoLink: "" },
]

console.log(projects)

let currentIndex = 0;
const projectsPerPage = 3;
function createProject()  {

	while (projectsRow.firstChild) {
		projectsRow.removeChild(projectsRow.firstChild);
	}

	for (let i = 0; i < projectsPerPage; i++) {
		const adjustedIndex = (currentIndex + i) % projects.length;
		const { name, image, description, skills, liveLink, repoLink } = projects[adjustedIndex];
	// projects.forEach(({ name, image, description, skills, liveLink, repoLink }) => {
		const projectContainer = document.createElement("div");
		projectContainer.classList.add("project-container");

		const projectImageGradient = document.createElement("div")
		projectImageGradient.classList.add("project-image-gradient");
		const projectImage = document.createElement("div");
		projectImage.classList.add("project-image");
		projectImage.style.backgroundImage = `url(${image})`;
		projectImage.appendChild(projectImageGradient)

		const projectInfo = document.createElement("div")
		projectInfo.classList.add("project-info")

		const projectName = document.createElement("h3")
		projectName.textContent = name;

		const githubRepo = document.createElement("a")
		const githubRepoText = document.createElement("span")
		githubRepoText.classList.add("gradient-text", "project-repo")
		githubRepo.classList.add("link")
		githubRepoText.textContent = "// Github repo"
		githubRepo.setAttribute("href", repoLink)
		githubRepo.appendChild(githubRepoText)

		const projectDesc = document.createElement("p")
		projectDesc.style.height = "130px"
		projectDesc.textContent = description

		const usedSkillsContainer = document.createElement("div")

		for (let i = 0; i < skills.length; i++) {
			const skillElement = document.createElement("span")
			skillElement.classList.add("skill-element")
			skillElement.textContent = skills[i]
			usedSkillsContainer.appendChild(skillElement)
		}

		const projectLinks = document.createElement("div")
		projectLinks.classList.add("project-links")
		const gradientButton = document.createElement("div")
		gradientButton.classList.add("gradient-btn")
		const liveLinkElement = document.createElement("a")
		liveLinkElement.textContent = "See Live"
		liveLinkElement.classList.add("link-text")
		liveLinkElement.setAttribute("href", liveLink)
		const pointerArrow = document.createElement("img")
		pointerArrow.classList.add("pointer-about")
		if (isDarkMode) {
			pointerArrow.setAttribute("src", "icons/arrow-pointer.svg");
		}
		else {
			pointerArrow.setAttribute("src", "icons/arrow-light.svg");
		}
		gradientButton.append(liveLinkElement, pointerArrow)
		projectLinks.append(gradientButton)

		projectInfo.append(projectName, githubRepo, projectDesc, usedSkillsContainer, projectLinks)
		projectContainer.append(projectImage, projectInfo)
		projectsRow.appendChild(projectContainer)
	}
}


// loading previous and next projects
function loadPreviousProjects() {
	currentIndex = (currentIndex - projectsPerPage) % projects.length;
	createProject();
	colorPicker()
}
function loadNextProjects() {
	currentIndex = (currentIndex + projectsPerPage) % projects.length;
	createProject();
	colorPicker()
}

nextButton.addEventListener("click", loadNextProjects)
previousButton.addEventListener("click", loadPreviousProjects)

createProject();

