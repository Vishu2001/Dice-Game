
var n = Math.floor(Math.random() * 6) + 1;
var imgNum = "dice" + n + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imgNum);

var a = Math.floor(Math.random() * 6) + 1;
var im = "dice" + a + ".png";
document.querySelectorAll("img")[1].setAttribute("src", im);

if(n>a){
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
else if(n<a){
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}