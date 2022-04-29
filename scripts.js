let myHiddenline = document.querySelector('.hidden-arguments');
let myDisplay = document.querySelector('.container-display input');
let myNumbersbutton = document.querySelectorAll('.numbersbutton');//collection
let myNumbers = document.querySelectorAll('.number');//collection
let myNumbersvalue;
let operators = document.querySelectorAll('.operator');
let mycalculation='';
let HTML = document.querySelector('html');
let mysecondDisplay = document.querySelector('.container-display input:last-child');
let myDivdisplay = document.querySelector('.container-display');
let boxdisplay = document.querySelector('.boxdisplay');

myDisplay.setAttribute("value","");

for(let i = 0;i <4;i++){
   let operatorsvalue = ["/","*","-","+"];//for operators
   operators[i].setAttribute("value",operatorsvalue[i]);
}
for(let i = 0;i <= 10;i++){//for numbers value
   let myNumbersvalue =  myNumbers[i].innerHTML;
   myNumbersbutton[i].setAttribute("value",myNumbersvalue);
}
function clickedtoggle() {
   boxdisplay.classList.toggle("active");
}
function togglehiddenline(){
   myHiddenline.classList.toggle("active");
}
function togglebox(){
   HTML.classList.toggle("active");
}
function Numbers(event){
   let value = event.target.value;
   myDivdisplay.classList.remove("active");
   myDivdisplay.classList.add("visible");

   mycalculation += value;
   myDisplay.value += value;
   mysecondDisplay.value = "= " +  eval(mycalculation);

   console.log(mycalculation);
   
}
function clearDisplay(){
   mycalculation = "";
   myDisplay.value = "";
   mysecondDisplay.value = "= " +  mycalculation;
   myDivdisplay.classList.remove("active");
   myDivdisplay.classList.remove("visible");
   
   console.log(mycalculation);
}
function DeleteDisplay(){
   mycalculation = mycalculation.slice(0,-1);
   myDisplay.value =  myDisplay.value.slice(0,-1);
   mysecondDisplay.value = "= " + eval(mycalculation);
   myDivdisplay.classList.remove("active");
   if(myDisplay.value == ""){
      myDivdisplay.classList.remove("visible");
   }
   if(mysecondDisplay.value == "undefined"){
      mysecondDisplay.value = "";
   }
   
   console.log(mycalculation);
}
function percentDisplay(){
   mycalculation = mycalculation / 100;
   myDisplay.value = mycalculation;
   mysecondDisplay.value = "= " + mycalculation;
   myDivdisplay.classList.remove("active");

   console.log(mycalculation);
   
}
function operator(event){
   mycalculation += event.target.value;
   myDisplay.value += event.target.attributes[0].value;
   myDivdisplay.classList.remove("active");
   
   console.log(mycalculation);
   
}
function equals(){
   mycalculation = mycalculation.toString();
   mysecondDisplay.value =  "= " + eval(mycalculation);
   myDivdisplay.classList.add("active");

   console.log(mycalculation);
}