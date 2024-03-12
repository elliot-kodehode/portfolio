const projectsRow = document.getElementById("projects-row")
const nextButton = document.getElementById("project-nav-btn-right")
const previousButton = document.getElementById("project-nav-btn-left")

import { colorPicker } from "./script.js";


const projects = [
	{
		name: "API-project: F2P Games",
		nameNor: "API-prosjekt: F2P Games",
		image: "images/api-project.png",
		description: "My project for an assignment to create a website using APIs. I decided to make a website listing free to play games with FreeToGame's API. I also added functions to sort the content based on user input.",
		descNor: "Mitt prosjekt",
		skills: ["HTML", "CSS", "Javascript", "API"],
		liveLink: "https://elliot-kodehode.github.io/f2p-games/",
		repoLink: "https://github.com/elliot-kodehode/f2p-games" },
	{
		name: "Interactive JS Drumkit",
		image: "images/jsdrumkit.png",
		description: "A small assignment where I had to use audio files, data keys and event listeners to make an interactive drumkit that plays sound on both keypress and button clicks.",
		skills: ["HTML", "CSS", "Javascript"],
		liveLink: "https://elliot-kodehode.github.io/js-drumkit/",
		repoLink: "https://github.com/elliot-kodehode/js-drumkit" },


	// add later
	// {
	// 	name: "Something with the move cube",
	// 	image: "icons/",
	// 	description: "",
	// 	skills: ["HTML", "CSS", "React"],
	// 	liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
	// 	repoLink: "" },
	// {
	// 	name: "Pet profiles",
	// 	image: "icons/",
	// 	description: "A user-generated list of pet profiles saved to local storage. During the backend module of the course, I want to make an API for this to make a functioning pet-adoption website that is easy for the owner to quickly add pets.",
	// 	skills: ["HTML", "CSS", "Javascript"],
	// 	liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
	// 	repoLink: "" },
	// {
	// 	name: "Score Counter",
	// 	image: "icons/",
	// 	description: "A project we had very early in javascript where I made a simple score tracker that keeps tabs on which team is winning. ",
	// 	skills: ["HTML", "CSS", "Javascript"],
	// 	liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
	// 	repoLink: "" },
	// {
	// 	name: "",
	// 	image: "images/",
	// 	description: "",
	// 	skills: ["HTML", "CSS", "Javascript"],
	// 	liveLink: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-elliot-kodehode/deployments/github-pages",
	// 	repoLink: "" },
]

console.log(projects)

let currentIndex = 0;
let projectsPerPage = projects.length;

// not in use before i have 3+ projects listed
// const mobile = window.matchMedia("(max-width: 700px)")
//
// function responsive(mobile) {if (mobile.matches) {
// 	projectsPerPage = projects.length
//     }
// 	// else projectsPerPage = 3; add later
// }

// responsive(mobile);

// mobile.addEventListener("change", function() {
// 	responsive(mobile);
//   });

console.log(projectsPerPage)

function createProject()  {

	while (projectsRow.firstChild) {
		projectsRow.removeChild(projectsRow.firstChild);
	}

	for (let i = 0; i < projectsPerPage; i++) {

		// gets the 3 projects to show
		const adjustedIndex = (currentIndex + i) % projects.length;

		// deconstructing the objects that are shown
		const { name, nameNor, image, description, descNor, skills, liveLink, repoLink } = projects[adjustedIndex];

		// making elements
		const projectContainer = document.createElement("div");
		projectContainer.classList.add("project-container");

		const projectImageGradient = document.createElement("div")
		projectImageGradient.classList.add("project-image-gradient");
		const projectImage = document.createElement("div");
		projectImage.classList.add("project-image");

		const projectInfo = document.createElement("div")
		projectInfo.classList.add("project-info")

		const projectName = document.createElement("h3")
		
		const githubRepo = document.createElement("a")
		const githubRepoText = document.createElement("span")
		githubRepoText.classList.add("gradient-text", "project-repo")
		githubRepo.classList.add("link")
		githubRepoText.textContent = "// Github repo"
		githubRepo.setAttribute("href", repoLink)
		githubRepo.appendChild(githubRepoText)

		const projectDesc = document.createElement("p")
		projectDesc.style.height = "130px";	

		const usedSkillsContainer = document.createElement("div")
		usedSkillsContainer.classList.add("skills-container")

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
		liveLinkElement.classList.add("link-text")
		liveLinkElement.setAttribute("href", liveLink)

		const pointerArrow = document.createElement("img")
		pointerArrow.classList.add("pointer-about")


		// language-specific elements

		if (document.documentElement.lang === "NOR") {
			projectDesc.textContent = descNor;
			projectName.textContent = nameNor;
			liveLinkElement.textContent = "Se live";
			pointerArrow.setAttribute("src", "../icons/arrow-pointer.svg");
			projectImage.style.backgroundImage = `url(../${image})`;
		}	
		else {
			projectDesc.textContent = description;
			projectName.textContent = name;
			liveLinkElement.textContent = "See live";
			pointerArrow.setAttribute("src", "icons/arrow-pointer.svg");
			projectImage.style.backgroundImage = `url(${image})`;
		};


		// appending things

		projectImage.appendChild(projectImageGradient)
		gradientButton.append(liveLinkElement, pointerArrow)
		projectLinks.append(gradientButton)
		projectInfo.append(projectName, githubRepo, projectDesc, usedSkillsContainer, projectLinks)
		projectContainer.append(projectImage, projectInfo)
		projectsRow.appendChild(projectContainer)
	}
colorPicker()
}

// loading previous and next projects

function loadPreviousProjects() {
	currentIndex = (currentIndex - projectsPerPage) % projects.length;
	if (currentIndex < 0) currentIndex += projects.length;
	createProject();
	colorPicker()
}

function loadNextProjects() {
	currentIndex = (currentIndex + projectsPerPage) % projects.length;
	createProject();
	colorPicker()
}

if (nextButton && previousButton)  {
nextButton.addEventListener("click", loadNextProjects)
previousButton.addEventListener("click", loadPreviousProjects)
}

createProject();
