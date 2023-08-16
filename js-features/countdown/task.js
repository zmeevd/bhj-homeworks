// Задача 1

const addCounter = function() {
	const timer = document.getElementById("timer"); //Обращение к таймер в разметке
	if (timer.textContent > 0 ) {
		timer.textContent -= 1;
	} else {
		alert("Вы победили в конкурсе!")
	}
};
setInterval(addCounter, 1000) //Функция которая запускается с интервалом