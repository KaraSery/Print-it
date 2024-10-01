const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
function initCarousel() {
	let index = 0;
	const maxIndex = 3
	const minIndex = 0

	const carousel = document.getElementById('banner')
	const carouselImg = carousel.querySelector('.banner-img')
	const carouselText = carousel.querySelector('p')

	const arrowLeft = document.querySelector('.arrow_left')
	const arrowRight = document.querySelector('.arrow_right')

	arrowLeft.addEventListener('click', carouselPrev)
	arrowRight.addEventListener('click', carouselNext)

	// Init dot

	const dots = Array.from(document.querySelectorAll('.dot'))
	dots[index].classList.add('dot_selected')
	
	function carouselPrev() {
		index -= 1
		if (index < minIndex) {
			index = maxIndex
		}
		carouselToggle(index)
	}
	function carouselNext() {
		index += 1
		if (index > maxIndex) {
			index = minIndex
		}
		carouselToggle(index)
	}
	function carouselToggle(index) {
		const slide = slides[index]
		const imgFullPath = `./assets/images/slideshow/${slide.image}`
		carouselImg.setAttribute('src', imgFullPath)
		carouselText.innerHTML = slide.tagLine
		const dotsSelected = Array.from(document.querySelectorAll('.dot_selected'))
		dotsSelected.forEach(dot => {dot.classList.remove('dot_selected')})
		dots[index].classList.add('dot_selected')
	}
}
initCarousel()