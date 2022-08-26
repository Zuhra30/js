// var firstName = prompt("Ismingizni kiriting...", "").trim();
// var surName = prompt("Familyangizni kiriting...", "").trim();
// var age = prompt("Yoshingizni kiriting...", "").trim();
// console.log(`Sizning ismingiz: ${firstName},\nSizning familyangiz: ${surName},\nSizning yoshingiz: ${age},\n`);

// var firstName = prompt("Ismingizni kiriting...", "").trim().toUpperCase();
// var surName = prompt("Familyangizni kiriting...", "").trim().toUpperCase();
// var age = prompt("Yoshingizni kiriting...", "").trim();
// var birthYear = 2022 - age;
// var month = 12 * age;
// var week = 52 * age;
// var day = 365 * age;
// var hour = 24 * age;
// var minut = 1440 * age;
// var seconds = 86400 * age;
// console.log(`Sizning ismingiz: ${firstName},\nSizning familyangiz: ${surName},\nSizning yoshingiz: ${age},\nSizning tug'ilgan yilingiz: ${birthYear}-yil,\nSizning yashagan oyingiz: ${month},\nSizning yashagan haftangiz: ${week},\nSizning yashagan kuningiz: ${day},\nSizning yashagan soatingiz: ${hour},\nSizning yashagan minutingiz: ${minut},\nSizning yashagan soniyangiz: ${seconds},`);

var body = document.querySelector("body");
var sun = document.querySelector(".fa-sun");
var icon = document.querySelector(".btn__icon");


sun.addEventListener("click", function() {
    body.classList.toggle("active");
    icon.classList.toggle("animated")


    if(body.classList.contains("active")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    setTimeout( () => {
        icon.classList.remove("animated");
    }, 500)
});


// var sun = document.querySelector(".fa-sun");
// var moon = document.querySelector(".fa-moon");
// var aqua = document.querySelector(".fa-sun");
// var crimson = document.querySelector(".fa-moon");
// var text = document.querySelector(".text");

// sun.addEventListener("click", function () {
//     aqua.classList.toggle("active");
//     text.classList.toggle("text-active")
// } );

// moon.addEventListener("click", function () {
//     crimson.classList.toggle("active");
//     text.classList.toggle("text-active")
// } );