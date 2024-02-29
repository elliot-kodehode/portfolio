/** @format */
// import githubLogo from 'icons/github.svg'

const gradientText = document.getElementsByClassName('gradient-text')
const gradientIcon = document.getElementsByClassName('gradient-icon')
const linkedIn = document.getElementById('linked-in')
const languageSwitch = document.querySelector(".toggle-mode")
const modeIcon = document.getElementById("mode-icon")
// const iconPath = document.querySelector(".icon-path")

function colorPicker() {
	const gradientColours = [
		{ start: "#c516cd", end: "#00d4ff" },
		{ start: "#731ee9", end: "#24e324" },
		{ start: "#ffee28", end: "#ff361c" },
		{ start: "#255ddb", end: "#06ff65" }
	]

	const chosenColors = gradientColours[Math.floor(Math.random() * gradientColours.length)]
	console.log(chosenColors)

	// setting text-color gradient
	for (let i = 0; i < gradientText.length; i++) {
		// setting text-color gradient for each element
		gradientText[i].style.backgroundImage = `linear-gradient(60deg, ${chosenColors.start}, ${chosenColors.end})`;
		gradientText[i].style.WebkitBackgroundClip = 'text';
		gradientText[i].style.color = 'transparent';
	}

	// setting svg color
	for (let i = 0; i < gradientIcon.length; i++) {
		const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
		gradient.setAttribute("id", `icon-gradient-${i}`);
		gradient.setAttribute("x1", "0%");
		gradient.setAttribute("y1", "0%");
		gradient.setAttribute("x2", "100%");
		gradient.setAttribute("y2", "100%");

		const startStop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
		startStop1.setAttribute("offset", "0%");
		startStop1.setAttribute("style", `stop-color: ${chosenColors.start}`);

		const startStop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
		startStop2.setAttribute("offset", "100%");
		startStop2.setAttribute("style", `stop-color: ${chosenColors.end}`);

		gradient.appendChild(startStop1);
		gradient.appendChild(startStop2);

		gradientIcon[i].appendChild(gradient)

		const iconPaths = gradientIcon[i].getElementsByTagName("path");
		for (let j = 0; j < iconPaths.length; j++) {
			iconPaths[j].setAttribute("fill", `url(#icon-gradient-${i})`);
		}

	}
}
// linear-gradient(#2DFF81, #9747FF)

colorPicker()

const changeMode = () => {

}
;


languageSwitch.addEventListener("click", changeMode)