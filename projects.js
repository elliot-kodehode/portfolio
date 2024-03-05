const projectsRow = document.getElementById("projects-row")

const projects = [
	{
		name: "API-project: F2P Games",
		image: "icons/placeholderpic1.png",
		description: "In my frontend developer course we got an assignment to create a website using API-endpoints. I also added functions to sort and filter the content based on user input.",
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
]

function createProject()  {
	projects.forEach(({ name, image, description, skills, liveLink, repoLink }) => {
		const projectContainer = document.createElement("div");
		projectContainer.classList.add("project-container");

		const projectImageGradient = document.createElement("div")
		projectImageGradient.classList.add("project-image-gradient");


		const projectImage = document.createElement("div");
		projectImage.classList.add("project-image");
		projectImage.style.backgroundImage = `url(${image})`;

		const projectInfo = document.createElement("div")
		projectInfo.classList.add("project-info")

		const projectName = document.createElement("h3")
		projectName.textContent = name;

		const githubRepo = document.createElement("a")
		githubRepo.classList.add("gradient-text", "project-repo")
		githubRepo.textContent = "// Github repo"
		githubRepo.setAttribute("href", repoLink)

		const projectDesc = document.createElement("p")
		projectDesc.textContent = description

		const usedSkillsContainer = document.createElement("div")

		for (let i = 0; i < skills.length; i++) {
			const skillElement = document.createElement("span")
			skillElement.classList.add("skill-element")
			skillElement.textContent = skills[i]
			usedSkillsContainer.appendChild(skillElement)
		}

		const gradientButton = document.createElement("div")
		const liveLinkElement = document.createElement("a")
		liveLinkElement.textContent = "See Live"
		liveLinkElement.setAttribute("href", liveLink)


		console.log(name)
	})

}

createProject()
