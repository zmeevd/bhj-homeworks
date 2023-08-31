// Задача 1

const reveal = document.querySelectorAll('.reveal'); // обращение к селектору .reveal

addEventListener('scroll', (event) => { // событие скролл
	const innerHeight = window.innerHeight; // константа величина экрана (вьюпорт)
	const yOne = reveal[0].getBoundingClientRect().y; // Y первого дива с текстом
	const yTwo = reveal[1].getBoundingClientRect().y; // Y второго дива с текстом
	const bottomOne = reveal[0].getBoundingClientRect().bottom; // координаты нижней границы 
	const bottomTwo = reveal[1].getBoundingClientRect().bottom; // координаты нижней границы 

	if (yOne >= 0 && bottomOne <= innerHeight) {
		reveal[0].classList.add('reveal_active');
	} else {
		reveal[0].classList.remove('reveal_active');
	}

	if (yTwo >= 0 && bottomTwo <= innerHeight) {
		reveal[1].classList.add('reveal_active');
	} else {
		reveal[1].classList.remove('reveal_active');
	}
});