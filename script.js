let furled = document.querySelector("header.phone-header");
let mobilenav = document.querySelector("header.phone-header2");

let lifestylemenu = document.querySelector("header.lifestyle");
let conceptualmenu = document.querySelector("header.conceptual");
let skatemenu = document.querySelector("header.skate");
let weddingsmenu = document.querySelector("header.weddings");
let musicmenu = document.querySelector("header.music");

function showTop () {
	furled.style.display = "none";
	mobilenav.style.display = "block";
}

function menuClose () {
	mobilenav.style.display = "none"
	furled.style.display = "block";
}

function lifestyle () {
	mobilenav.style.display = "none";
	lifestylemenu.style.display = "block";
}

function conceptual () {
	mobilenav.style.display = "none";
}

function skate () {
	mobilenav.style.display = "none";
}

function weddings () {
	mobilenav.style.display = "none";
}

function music () {
	mobilenav.style.display = "none";
}
