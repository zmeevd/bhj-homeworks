// Задача 1

const addCounter = function() {
	const timer = document.getElementById("timer"); //Обращение к таймер в разметке
	timer.textContent -= 1;
	
	if (timer.textContent <= 0) {
		clearInterval(intervalId);
		alert("Вы победили в конкурсе!")
	}	
};

const intervalId = setInterval(addCounter, 1000) //Функция которая запускается с интервалом