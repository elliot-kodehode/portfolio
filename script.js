/** @format */

const gradients = document.getElementsByClassName('gradient')
const linkedIn = document.getElementById('linked-in')

function colorPicker() {
	const gradientColours = ['#22FFE4', '#9747FF', '#2DFF81', '#FF9A51']

	let chosenColor = gradientColours[Math.floor(Math.random() * gradientColours.length)]
	console.log(chosenColor)

	for (let i = 0; i < gradients.length; i++) {
		gradients[i].style.fill = chosenColor
		gradients[i].style.color = chosenColor
	}
}

colorPicker()
