// Element definitions

const vowel_btn = document.querySelector(".add-vowel");
const consonant_btn = document.querySelector(".add-consonant");
const random_btn = document.querySelector(".add-random");

const shuffle_btn = document.querySelector(".shuffle-letters");
const clear_btn = document.querySelector(".clear-letters");
const copy_btn = document.querySelector(".copy-letters");

const menu = document.querySelector(".letter-menu");

const letter_container = document.querySelector(".letter-container");

document.body.onclick = bodyClick;

// 🖱️ Onclick functions

vowel_btn.onclick = vowel;
consonant_btn.onclick = consonant;
random_btn.onclick = randomLetter;

shuffle_btn.onclick = shuffle;
clear_btn.onclick = clear;
copy_btn.onclick = copy;

// 🔣 Variable definitions

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let weighted = true;

// 🚦 Functions

function randomItem(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function addLetter(letter, classname) {
	const elem = document.createElement("div");
	elem.classList.add("letter");
	elem.textContent = letter;

	letter_container.appendChild(elem);

	elem.oncontextmenu = letterMenu;
	elem.onclick = deleteLetter;
}

function letterMenu(e) {
	e.preventDefault();
	
	menu.style.left = e.clientX + "px";
	menu.style.top = e.clientY + "px";
	console.log
	console.log("Hey!");
	menu.classList.add("visible");
	
	console.log("Hey!");
}
function deleteLetter() {
	//
}
function bodyClick(e) {
	if (e.currentTarget !== menu && menu.classList.contains("visible")) {
		menu.classList.remove("visible");
	}
}

function vowel() {
	const letter = randomItem(vowels);
	addLetter(letter);
}

function consonant() {
	const letter = randomItem(consonants);
	addLetter(letter);
}

function randomLetter() {
	if (weighted) {
		if(Math.random() < 0.5) vowel();
		else consonant();
		
		return;
	}
	else {
		const alphabet = vowels.concat(consonants);
		addLetter(randomItem(alphabet));
	}
}
function shuffle() {
	//
}
function clear() {
	letter_container.innerHTML = "";
}
function copy() {
	let letters = "";
	for (const letter of letter_container.children) {
		letters += letter.textContent;
	}
	console.log(letters);
}