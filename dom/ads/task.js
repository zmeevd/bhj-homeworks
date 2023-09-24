// Задача 2. Ротатор рекламы.

const rotatorCases = document.querySelectorAll('.rotator__case'); // доступ к списку элементов
let cunrrentCaseIndex = 0; // переменная текущий индекс

function changeCase() { // создание функции смены текста
  const newCase = rotatorCases[cunrrentCaseIndex]; // получает элемент по индексу
  
  rotatorCases.forEach(item => {
    if(item.closest('rotator')) { // проверка если отношения к действующему ротатору на странице
      throw new Error('У этого элемента другой родитель!');
    };
  });

  cunrrentCaseIndex++; // если нет увеличить индекс +1

  if(cunrrentCaseIndex >= rotatorCases.length) {
    cunrrentCaseIndex = 0; // обнуляет индекс, чтобы начать сначала
  };

  newCase.classList.remove('rotator__case_active'); // удаляет класс

  rotatorCases[cunrrentCaseIndex].classList.add('rotator__case_active'); // добавляет класс

};

setInterval(() => {
  changeCase();
}, 500);