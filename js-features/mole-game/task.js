const dead = document.getElementById("dead"); // подключение id dead

const lost = document.getElementById("lost"); // подключение id lost

for (let i = 1; i <= 9; i++) {
	let hole = document.getElementById(`hole${i}`); // перебор нор  по индексу  hole 1-9

	hole.addEventListener("click", () => { // обработчки события при нажатие мышки, анонимная функция.
		console.log("Клик!");
		if (hole.classList.contains("hole_has-mole")) { //  проверить наличие класса
			dead.textContent++; //если есть dead +1
		} else {
			lost.textContent++; //если нет  lost +1
		}
		if (lost.textContent >= 5) { //проверка победы и поражения. Если больше 5 - lost, сброс счетчиков
			dead.textContent = 0;
			lost.textContent = 0;
			return alert("Вы проиграли!");
		} else if (dead.textContent >= 10) { // если больше 10 победа, сброс счетчиков
			dead.textContent = 0;
			lost.textContent = 0;
			return alert("Победа!");
		};
	});
};