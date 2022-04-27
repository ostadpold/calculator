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

function togglehiddenline(){
   myHiddenline.classList.toggle("active");
   myLine.classList.toggle('active');
}
for(let i = 0;i<2;i++){
   let operatorsvalue = ["&#247;","&#215;"];
   differntoperators[i].setAttribute("Display",operatorsvalue[i]);
   // console.log(differntoperators[i]);
}

for(let i = 0;i <4;i++){
   let operatorsvalue = ["/","*","-","+"];
   operators[i].setAttribute("value",operatorsvalue[i]);
}

for(let i = 0;i <= 10;i++){
   let myNumbersvalue =  myNumbers[i].innerHTML;
   myNumbersbutton[i].setAttribute("value",myNumbersvalue);
}
function Numbers(event){
   let value = event.target.value;

   mycalculation += value;
   myDisplay.value = mycalculation;

   console.log(mycalculation);
}
function clearDisplay(){
   mycalculation = "";
   myDisplay.value = mycalculation;

   console.log(mycalculation);
}
function DeleteDisplay(){
   mycalculation = mycalculation.slice(0,-1);
   myDisplay.value = mycalculation;

   console.log(mycalculation);
}
function percentDisplay(){
   mycalculation = mycalculation / "100" + "";
   if(mycalculation == "NaN"){
      mycalculation = "";
      myDisplay.value = "ERROR";
   }else {
      myDisplay.value = mycalculation;
   }

   console.log(mycalculation);
}
function operator(event){
   // if(event.target.classList.contains("different")){
   //    mycalculation += event.target.value;
   //    myDisplay.value += event.target.attributes[2].value;
   // }
      mycalculation += event.target.value;
      myDisplay.value = mycalculation;


   console.log(mycalculation);
}
function equals(){
   mycalculation = eval(mycalculation).toString();
   myDisplay.value = mycalculation;

   console.log(mycalculation);
}