/** @format */

const gradients = document.getElementsByClassName('gradient2')
const linkedIn = document.getElementById('linked-in')
const languageSwitch = document.querySelector(".toggle-mode")
const modeIcon = document.getElementById("mode-icon")
const iconPath = document.getElementById("icon-path")

function colorPicker() {
	// const gradientColours = ['#9747FF', '#2DFF81', '#FF9A51']

	// let chosenColor = gradientColours[Math.floor(Math.random() * gradientColours.length)]
	// console.log(chosenColor)

	// setting text-color gradient
	for (let i = 0; i < gradients.length; i++) {
		// setting text-color gradient for each element
		gradients[i].style.backgroundImage = 'linear-gradient(to right, magenta, orange )';
		gradients[i].style.WebkitBackgroundClip = 'text';
		gradients[i].style.color = 'transparent';
}
}
// linear-gradient(#2DFF81, #9747FF)

colorPicker()

const changeMode = () => {
}
;


languageSwitch.addEventListener("click", changeMode)