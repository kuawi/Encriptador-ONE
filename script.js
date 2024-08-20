const clave = {"e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat"};
const inputBox = document.querySelector('textarea');
const encBtn = document.querySelector('#btn1');
const deseBtn = document.querySelector('#btn2');
const outputBox = document.querySelector('#output-p1');

encBtn.addEventListener('click', encriptar);

function encriptar(){
	let msg = inputBox.value;
	let vocales = [...msg.matchAll(/[aeiou]/g)].map((e) => e[0]);
	let sinVocales = msg.split(/[aeiou]/);
	outputBox.textContent = makeString(sinVocales, vocales);
}

function makeString(arr1, arr2){
	let res = [];
	let lim = arr1.length + arr2.length;
	for(let i=0; i < lim; i++){
		if (i%2 == 0) {
			res.push(arr1.pop());
		} else {
			res.push(clave[arr2.pop()]);
		}
	}
	return res.reverse().join('');
}