let myHiddenline = document.querySelector('.hidden-arguments');
let myLine = document.querySelector('.container-arguments');
let myDisplay = document.querySelector('.container-display input');
let myNumbersbutton = document.querySelectorAll('.numbersbutton');//collection
let myNumbers = document.querySelectorAll('.number');//collection
let myNumbersvalue;
let operators = document.querySelectorAll('.operator');
let differntoperators = document.querySelectorAll('.different');
let mycalculation = "";

myDisplay.setAttribute("value","");

for(let i = 0;i <4;i++){
   let operatorsvalue = ["/","*","-","+"];//for operators
   operators[i].setAttribute("value",operatorsvalue[i]);
}
for(let i = 0;i <= 10;i++){//for numbers value
   let myNumbersvalue =  myNumbers[i].innerHTML;
   myNumbersbutton[i].setAttribute("value",myNumbersvalue);
}
function togglehiddenline(){
   myHiddenline.classList.toggle("active");
   myLine.classList.toggle('active');
}
function Numbers(event){
   let value = event.target.value;

   mycalculation += value;
   myDisplay.value += value;

   console.log(mycalculation);
}
function clearDisplay(){
   mycalculation = "";
   myDisplay.value = "";

   console.log(mycalculation);
}
function DeleteDisplay(){
   mycalculation = mycalculation.slice(0,-1);
   myDisplay.value =  myDisplay.value.slice(0,-1);

   console.log(mycalculation);
}
function percentDisplay(){
   mycalculation = mycalculation / "100" + "";
   myDisplay.value = myDisplay.value / "100"+ "";
   if(mycalculation == "NaN"){
      mycalculation = "";
      myDisplay.value = "";
   }
   console.log(mycalculation);
}
function operator(event){
   if(event.target.classList.contains("different")){
      mycalculation += event.target.value;
      myDisplay.value += event.target.attributes[0].value;
   }else {
      mycalculation += event.target.value;
      myDisplay.value += event.target.value;
   }
   console.log(mycalculation);
}
function equals(){
   mycalculation = eval(mycalculation).toString();
   myDisplay.value = mycalculation;

   console.log(mycalculation);
}