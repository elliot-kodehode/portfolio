const projectsRow = document.getElementById("projects-row")
const nextButton = document.getElementById("project-nav-btn-right")
const previousButton = document.getElementById("project-nav-btn-left")

import { colorPicker } from "./script.js";


const projects = [
	{
		name: "React Calculator",
		nameNor: "React Kalkulator",
		image: "images/react-calc.png",
		description: "A basic calculator made in React that. It has working functionality and logic, as well as a theme switcher with a choice of 3 different themes.  ",
		descNor: "En enkel kalkulator laget i React. Den har standard funksjonalitet og logikk, og en knapp hvor man kan velge 3 forskjellige temaer.",
		skills: ["React"],
		liveLink: "https://elliot-react-calculator.netlify.app/",
		repoLink: "https://github.com/elliot-kodehode/React-Calculator" },
	{
		name: "API-project: F2P Games",
		nameNor: "API-prosjekt: F2P Games",
		image: "images/api-project.png",
		description: "My project for an assignment to create a website using APIs. I decided to make a website listing free to play games with FreeToGame's API. I also added functions to sort the content based on user input.",
		descNor: "Mitt prosjekt for en oppgave om å bruke API'er for å lage en valgfri nettside med innholdet en henter. Jeg brukte FreeToGame sin API med gratis spill. Listen kan også sorteres etter hva bruker ønsker.",
		skills: ["HTML", "CSS", "Javascript", "API"],
		liveLink: "https://elliot-kodehode.github.io/f2p-games/",
		repoLink: "https://github.com/elliot-kodehode/f2p-games" },
	{
		name: "Interactive JS Drumkit",
		nameNor: "Interaktivt JS Trommesett",
		image: "images/jsdrumkit.png",
		description: "A small assignment where I had to use audio files, data keys and event listeners to make an interactive drumkit that plays sound on both keypress and button clicks.",
		descNor: "Ett lite prosjekt der jeg brukte lydfiler, event listeners og data keys for å lage ett trommesett som spiller lyd både med museklikk og tastatur-knapper.",
		skills: ["HTML", "CSS", "Javascript"],
		liveLink: "https://elliot-kodehode.github.io/js-drumkit/",
		repoLink: "https://github.com/elliot-kodehode/js-drumkit" },
	{
		name: "React Social Media Feed",
		nameNor: "Sosial media feed i React",
		image: "images/some-pic.png",
		description: "My first react project I made to get familiar with the basic setup of React. It uses React hooks such as useEffect and useState, with functionality for new posts to be saved locally.",
		descNor: "Mitt første React-prosjekt laget for å bli kjent med det grunnleggende oppsettet. Jeg brukte React-hooks som useEffect og useState, med funksjonalitet for å lagre nye poster lokalt.",
		skills: ["React"],
		liveLink: "https://elliot-kodehode-socialmedia.netlify.app/",
		repoLink: "https://github.com/elliot-kodehode/social-media" },

]

console.log(projects)

let currentIndex = 0;
let projectsPerPage = 4;

// not in use before i have 4+ projects listed

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
