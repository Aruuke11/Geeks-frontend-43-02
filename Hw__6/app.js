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
let backgroundImages = {
    spring: "url(https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65b5447b98779f1cacf16043_65b545c8bb12e30bc0c17d81/scale_1200)",
    summer: "url(https://img.goodfon.ru/wallpaper/big/3/57/badfon-tropical-drinks-coconut.webp)",
    autumn: "url(https://static.tildacdn.com/tild3133-3463-4033-b236-666461356539/_2023-09-14_12045968.png)",
    winter: "url(https://img.freepik.com/free-photo/christmas-celebration-with-snowman_23-2151085040.jpg)"
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
    document.body.style.backgroundImage = backgroundImages[season];
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
