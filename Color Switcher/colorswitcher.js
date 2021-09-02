document.getElementById('graybutton').onclick = switchGray;
document.getElementById('whitebutton').onclick = switchWhite;
document.getElementById('blackbutton').onclick = switchBlack;
document.getElementById('bluebutton').onclick = switchBlue;
document.getElementById('greenbutton').onclick = switchGreen;
document.getElementById('yellowbutton').onclick = switchYellow;
document.getElementById('redbutton').onclick = switchRed;
document.getElementById('pinkbutton').onclick = switchPink;

function switchGray() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
	document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchWhite() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'White';
	document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlack() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
	document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchBlue() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
	document.getElementsByTagName('body')[0].style.color = 'yellow';
}

function switchGreen() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
	document.getElementsByTagName('body')[0].style.color = 'red';
}

function switchYellow() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
	document.getElementsByTagName('body')[0].style.color = 'blue';
}

function switchRed() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
	document.getElementsByTagName('body')[0].style.color = 'lightgreen';
}

function switchPink() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
	document.getElementsByTagName('body')[0].style.color = 'red';
}
