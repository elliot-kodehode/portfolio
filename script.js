/** @format */

// main elements
const stickyNav = document.getElementById("sticky-sidenav")
const mainContent = document.getElementById("main-content")

// sub elements
const gradientText = document.getElementsByClassName('gradient-text')
const gradientIcon = document.getElementsByClassName('gradient-icon')
const linkedIn = document.getElementById('linked-in')
const languageSwitch = document.querySelector(".toggle-mode")
const modeIcon = document.getElementById("mode-icon")
const gradientBtn = document.getElementsByClassName("gradient-btn")
const textContent = document.getElementsByClassName(".text")
const textLinks = document.getElementsByClassName("link-text")
const pointerArrow = document.getElementsByClassName("pointer-about")
// const iconPath = document.querySelector(".icon-path")
const copyIcon = document.getElementById("copy-icon")
const copyToolTip = document.getElementById("mail-contact")



export function colorPicker() {
	const gradientColours = [
		// { start: "#c516cd", end: "#00d4ff" },
		// { start: "#731ee9", end: "#24e324" },
		// { start: "#9d2aff", end: "#ff361c" },
		// { start: "#255ddb", end: "#06ff65" },

		{ start: '#8e5af4', end: '#4bffe4' },
		{ start: '#ff9447', end: '#ff605a' }
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

	for (let i = 0; i < gradientIcon.length; i++) {
		const svg = gradientIcon[i];
		const existingGradient = svg.querySelector(`linearGradient#icon-gradient-${i}`);
		if (existingGradient) {
			existingGradient.remove();
		}
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
// gradient for buttons
	for (let k = 0; k < gradientBtn.length; k++) {
			gradientBtn[k].style.background = `linear-gradient(60deg, ${chosenColors.start}, ${chosenColors.end})`;
}

}


colorPicker()



let emailCopy = "elliotalexander98@gmail.com"
function TextCopy() {
	navigator.clipboard.writeText(emailCopy);

	copyToolTip.textContent = "Email copied!"

}

const resetCopy = () => copyToolTip.textContent = "Copy mail";


if (copyIcon) {
	copyIcon.addEventListener("click", TextCopy)
	copyIcon.addEventListener("mouseleave", resetCopy)
}

