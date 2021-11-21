$(document).ready(function() {
	$("a").click(function() {
		$("a").removeClass('active');
		var index = $(this).index('.navmenu a') + 1;
		$("nav a:nth-child(-n+"+index+")").addClass('active');
	});
});

function sliderFunc(smallImg) {
	let fullImg = document.querySelector('#imageBox');
	fullImg.src = smallImg.src;
}

function readMore() {
	document.querySelector('.overview__key').style.display = 'block';
	document.querySelector('#read_more').style.display = 'none';
}



const firstStep = document.querySelector('.steps__content__first');
const secondStep = document.querySelector('.steps__content__second');
const thirdStep = document.querySelector('.steps__content__third');
const fourthStep = document.querySelector('.steps__content__fourth');
const fifthStep = document.querySelector('.steps__content__fifth');
const imgFacebook = document.querySelector('#img__facebook');
const imgGiveaway = document.querySelector('#img__giveaway');
const pressArrow = document.querySelector('#img__press_here');
const redArrow = document.querySelector('#red_arrow');
const redArrowCaption = document.querySelector('#red_arrow_caption');

const allItems = document.querySelectorAll('.navmenu a');
console.log(allItems);

allItems.forEach(item => {
	item.addEventListener('click', function(e) {
		this.classList.add('active');
		let stepValue = this.getAttribute('value');
		console.log(stepValue);
		switch (stepValue) {
			case 'first step':
				firstStep.style.display = 'block';
				secondStep.style.display = 'none';
				thirdStep.style.display = 'none';
				fourthStep.style.display = 'none';
				fifthStep.style.display = 'none';
				imgGiveaway.style.display = 'block';
				imgFacebook.style.display = 'none';
				pressArrow.style.display = 'none';
				redArrow.style.display = 'none';
				redArrowCaption.style.display = 'none';
				break;
			case 'second step':
				firstStep.style.display = 'none';
				secondStep.style.display = 'block';
				thirdStep.style.display = 'none';
				fourthStep.style.display = 'none';
				fifthStep.style.display = 'none';
				imgGiveaway.style.display = 'none';
				imgFacebook.style.display = 'block';
				pressArrow.style.display = 'block';
				redArrow.style.display = 'block';
				redArrowCaption.style.display = 'block';
				break;
			case 'third step':
				firstStep.style.display = 'none';
				secondStep.style.display = 'none';
				thirdStep.style.display = 'block';
				fourthStep.style.display = 'none';
				fifthStep.style.display = 'none';
				imgGiveaway.style.display = 'block';
				imgFacebook.style.display = 'none';
				pressArrow.style.display = 'none';
				redArrow.style.display = 'none';
				redArrowCaption.style.display = 'none';
				break;
			case 'fourth step':
				firstStep.style.display = 'none';
				secondStep.style.display = 'none';
				thirdStep.style.display = 'none';
				fourthStep.style.display = 'block';
				fifthStep.style.display = 'none';
				imgGiveaway.style.display = 'block';
				imgFacebook.style.display = 'none';
				pressArrow.style.display = 'none';
				redArrow.style.display = 'none';
				redArrowCaption.style.display = 'none';
				break;
			case 'fifth step':
				firstStep.style.display = 'none';
				secondStep.style.display = 'none';
				thirdStep.style.display = 'none';
				fourthStep.style.display = 'none';
				fifthStep.style.display = 'block';
				imgGiveaway.style.display = 'block';
				imgFacebook.style.display = 'none';
				pressArrow.style.display = 'none';
				redArrow.style.display = 'none';
				redArrowCaption.style.display = 'none';
				break;
		}
	});
});