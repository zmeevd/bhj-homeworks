// Задача 2

const count = document.getElementById("clicker__counter"); 
const image = document.getElementById("cookie")



const cookieClicker = function () { //функция счетчик +1 клик
   count.textContent++;
}

function changeSizeCookieSmall () { //функция маленькой картинки
    if(cookie.width > 200) {
      cookie.width = 200;
    }
}

function changeSizeCookieBig () {  //функция  увеличения изображения + счетчик клика
    cookieClicker();
    cookie.width = 230;
    setInterval(changeSizeCookieSmall, 500);
  }
  
  cookie.onclick = changeSizeCookieBig; // вызов функции