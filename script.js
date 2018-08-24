let furled = document.querySelector("header.phone-header");
let mobilenav = document.querySelector("header.phone-header2");

let lifestylemenu = document.querySelector("header.lifestyle");
let conceptualmenu = document.querySelector("header.conceptual");
let skatemenu = document.querySelector("header.skate");
let weddingsmenu = document.querySelector("header.weddings");
let musicmenu = document.querySelector("header.music");

function showTop () {
	window.scrollTo(0, 0);
	furled.style.display = "none";
	mobilenav.style.display = "block";
}

function menuClose () {
	mobilenav.style.display = "none"
	lifestylemenu.style.display = "none";
	conceptualmenu.style.display = "none";
	skatemenu.style.display = "none";
	weddingsmenu.style.display = "none";
	musicmenu.style.display = "none";
	furled.style.display = "block";
}

function menuBack () {
	lifestylemenu.style.display = "none";
	conceptualmenu.style.display = "none";
	skatemenu.style.display = "none";
	weddingsmenu.style.display = "none";
	musicmenu.style.display = "none";
	mobilenav.style.display = "block";	
}

function lifestyle () {
	mobilenav.style.display = "none";
	lifestylemenu.style.display = "block";
}

function conceptual () {
	mobilenav.style.display = "none";
	conceptualmenu.style.display = "block";
}

function skate () {
	mobilenav.style.display = "none";
	skatemenu.style.display = "block";
}

function weddings () {
	mobilenav.style.display = "none";
	weddingsmenu.style.display = "block";
}

function music () {
	mobilenav.style.display = "none";
	musicmenu.style.display = "block";
}
