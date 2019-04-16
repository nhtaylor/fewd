document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('blueButton').onclick = switchBlue;

function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
  document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchRed() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#c0392b';
  document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = '#2980b9';
  document.getElementsByTagName('body')[0].style.color = 'white';
}
