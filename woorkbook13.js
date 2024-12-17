document.querySelector("h2").onclick = () => {
  alert("Вы кликнули на заголовой - так держать!");
};

const tableCells = Array.from(
  document.querySelectorAll(".seminars tr td:nth-child(2)")
);

const firstTermSeminars = [
  "Основы языка HTML",
  "Формы и кнопки в HTML",
  "Таблицы и интерактивные элементы в HTML",
  "Основы работы с CSS",
  "Работа с классами в CSS",
  "Работа с сетками и разметкой в HTML",
  "Адаптивная верстка",
  "Bootstrap",
  "Основы языка JavaScript",
  "Базовые задачи на JS",
  "DOM-структура приложений и работа с объектами в языке JS",
  "Встраивание скриптов",
  "Отладка сценариев",
  "Анимации и работа с ними",
  "GitHub",
  "Защита проекта",
];

const secondTermSeminars = [
  "Базовое бэкенд-приложение",
  "HTTP-запросы",
  "JSON и работа с ним",
  "HTTP-ответы",
  "Проектирование API",
  "Роутинг и его настройка",
  "NoSQL базы данных",
  "Обеспечение авторизации и доступа пользователей",
  "Работа сторонних сервисов уведомления и авторизации",
  "Основы ReactJS",
  "Работа с компонентами динамической DOM",
  "Использование хуков в React",
  "Неизвестна",
  "Основы микросервисной архитектуры",
  "Разработка классических модулей веб-приложений",
  "Разработка классических модулей веб-приложений",
];

document.querySelector(".firstTerm").onclick = () => {
  document.querySelector(".switchTerms").classList.remove("secondActive");
  tableCells.forEach((element, index) => {
    element.innerHTML = firstTermSeminars[index];
  });
};

document.querySelector(".secondTerm").onclick = () => {
  document.querySelector(".switchTerms").classList.add("secondActive");
  tableCells.forEach((element, index) => {
    element.innerHTML = secondTermSeminars[index];
  });
};

document.querySelector("#logoKotik").addEventListener("mouseover", (event) => {
  event.preventDefault();
  event.target.style.transform = "scale(1.1)";
});

document.querySelector("#logoKotik").addEventListener("mouseleave", (event) => {
  event.preventDefault();
  event.target.style.transform = "scale(1)";
});

document.querySelector("#logoKotik").addEventListener("click", (event) => {
  event.preventDefault();
  event.target.setAttribute("src", "https://proza.ru/pics/2022/06/18/1437.jpg");
  event.target.setAttribute("width", "92");
  event.target.setAttribute("hight", "85");
});

document.querySelector("#logoKotik").addEventListener("dblclick", (event) => {
  event.preventDefault();
  alert("Котиков больше не будет(((");
});
const firstTermButton = document.querySelector(".firstTerm");
const secondTermButton = document.querySelector(".secondTerm");

firstTermButton.addEventListener("click", () => {
  firstTermButton.classList.add("active");
  secondTermButton.classList.remove("active");
});

secondTermButton.addEventListener("click", () => {
  secondTermButton.classList.add("active");
  firstTermButton.classList.remove("active");
});
