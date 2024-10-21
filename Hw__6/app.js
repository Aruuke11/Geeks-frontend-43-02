let $winter = document.getElementById("winter");
let $spring = document.getElementById("spring");
let $summer = document.getElementById("summer");
let $autumn = document.getElementById("autumn");
let seasonButtons = document.querySelectorAll('.season-btn');
let monthContainer = document.getElementById('month-container');
let months = {
    winter: ["Декабрь", "Январь", "Февраль"],
    spring: ["Март", "Апрель", "Май"],
    summer: ["Июнь", "Июль", "Август"],
    autumn: ["Сентябрь", "Октябрь", "Ноябрь"]
};
let colors = {
    winter: "winter",
    spring: "spring",
    summer: "summer",
    autumn: "autumn"
};
function monthOfSeasons(season) {
    monthContainer.innerHTML = " ";
    months[season].forEach(function(month) {
        let monthBtn = document.createElement("button");
        monthBtn.textContent = month;
        monthBtn.classList.add("month-btn");
        monthBtn.classList.add(colors[season]);
        monthContainer.appendChild(monthBtn);
    });
}
$winter.classList.add(colors.winter);
$spring.classList.add(colors.spring);
$summer.classList.add(colors.summer);
$autumn.classList.add(colors.autumn);

$winter.addEventListener("click", function() {
    monthOfSeasons("winter");
});
$spring.addEventListener("click", function() {
    monthOfSeasons("spring");
});
$summer.addEventListener("click", function() {
    monthOfSeasons("summer");
});
$autumn.addEventListener("click", function() {
    monthOfSeasons("autumn");
});