// Element definitions

const vowel_btn = document.querySelector(".add-vowel");
const consonant_btn = document.querySelector(".add-consonant");
const random_btn = document.querySelector(".add-random");

const shuffle_btn = document.querySelector(".shuffle-letters");
const clear_btn = document.querySelector(".clear-letters");
const copy_btn = document.querySelector(".copy-letters");

const letter_container = document.querySelector(".letter-container");

// 🖱️ Onclick functions

vowel_btn.onclick = vowel;
consonant_btn.onclick = consonant;
random_btn.onclick = randomLetter;

// shuffle_btn.onclick = shuffle;
// clear_btn.onclick = clear;
// copy_btn.onclick = copy;

// 🔣 Variable definitions

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let weighted = true;

// 🚦 Functions

function randomItem(list) {
	return list[Math.floor(Math.random() * list.length)];
}
document.onkeydown = (e) => {
	if (e.key === "v") {
		vowel();
	}
	if (e.key === "c") {
		consonant();
	}
	if (e.key === "r") {
		randomLetter();
	}
}

function addLetter(letter, classname) {
	if (letter_container.childElementCount === 10) return;
	const elem = document.createElement("div");
	elem.classList.add("letter");
	elem.textContent = letter;

	letter_container.appendChild(elem);
	let rotation = -5 + (Math.random() * 10);
	elem.style.rotate = `${rotation}deg`
	elem.onclick = deleteLetter;
}
function deleteLetter() {
	//
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