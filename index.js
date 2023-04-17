var showElement=document.querySelector("h3");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("gradient");
var showElement1=document.querySelector("h4");

function changeColor(){
    body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")"
    showElement.textContent=body.style.background="linear-gradient(to right," + color1.value + "," +color2.value +")"
}
color1.addEventListener("input",changeColor);
color2.addEventListener("input",changeColor);



var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ol=document.querySelector("ol");

button.addEventListener("click",function(){
if(input.value.length>0){
var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ol.appendChild(li);
input.value="";
}
})


var abc=document.getElementById("save");
var def=document.getElementById("email");
var ol1=document.querySelector("ol1");

abc.addEventListener("click",function(){
if(def.value.length>0){
var manish=document.createElement("li");
manish.appendChild(document.createTextNode(def.value));
ol1.appendChild(manish);
def.value="";
}
})

var var1=document.getElementById("saved");
var var2=document.getElementById("number");
var ol2=document.querySelector("ol2");

var1.addEventListener("click",function(){
if(var2.value.length>0){
var talmale=document.createElement("li");
talmale.appendChild(document.createTextNode(var2.value));
ol2.appendChild(talmale);
var2.value="";
}
})



var grad=document.getElementById("radient");

function randomGradient(){
var x1 = Math.floor(Math.random() * 256);
var y1 = Math.floor(Math.random() * 256);
var z1 = Math.floor(Math.random() * 256);

var x2 = Math.floor(Math.random() * 256);
var y2 = Math.floor(Math.random() * 256);
var z2 = Math.floor(Math.random() * 256);

var bgColor1 = "rgb(" + x1 + "," + y1 + "," + z1 + ")";
var bgColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";

body.style.background = "linear-gradient(to right, " + bgColor1 + ", " + bgColor2 + ")";
showElement1.textContent=body.style.background="linear-gradient(to right," + bgColor1+ "," +bgColor2 +")";
}

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
grad.addEventListener("click", randomGradient);