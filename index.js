var random = (Math.floor(Math.random() * 6)) + 1;

var imageName = "images/dice" + random + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageName);




var random2 = (Math.floor(Math.random() * 6)) + 1;

var imageName2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageName2);
