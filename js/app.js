var addToHead = document.querySelector("head");
var cssLink = document.createElement("link");
addToHead.appendChild(cssLink);
cssLink.setAttribute("rel","stylesheet");
cssLink.setAttribute("href","./css/style.css");
var wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
var bodY = document.querySelector("body");
bodY.appendChild(wrapper);

for (var i = 0; i < 4; i++) {
    var divs = document.createElement("div");
    wrapper.appendChild(divs);
    divs.classList.add("wrapperDivs");
}

var color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";
var color2 = "linear-gradient(330deg, #5BCOBE 0%, #3A506B 100%)";
var color3 = "linear-gradient(35deg, #0B132B 0%, #5BCOBE 100%)";
var color4 = "linear-gradient(235deg, #5BCOBE 0%, #3A506B 100%)";

var colorsArray =[color1, color2, color3, color4];

console.log(colorsArray); //Reveals css values in each div

var wrapper_Divs = document.getElementsByClassName("wrapperDivs");

console.log(wrapper_Divs); //Creates an Html collection of the divs 

var divOne = wrapper_Divs.item(0);
var divTwo = wrapper_Divs.item(1);
var divThree = wrapper_Divs.item(2);
var divFour = wrapper_Divs.item(3); 

var allDivs =[divOne, divTwo, divThree, divFour]; //Suspected point of Error 

console.log(allDivs); 

for (var i = 0;i<4; i++){
var myDiv= allDivs[i]; 
myDiv.style.backgroundImage=colorsArray[i]; //Only targets/changes the first div
var update = document.createElement('section');
myDiv.appendChild(update);
myDiv.setAttribute("id","ID" + [i]);
}