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
let myTodes = document.querySelector('.todes');
let minecontainer = document.querySelector('.container');
let operatorsvalue = ["/","*","-","+"]
let myDisplayconsole = document.querySelector('.consolelog');
let x=0;
let mybutton = document.querySelector('.culoum button');
// console.log(myDisplayconsole);
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
   myTodes.classList.toggle("active");
   setTimeout(function(){
      minecontainer.addEventListener('click', function(){
         myTodes.classList.remove("active");
      })
   },2000);
}
function togglehiddenline(){
   myHiddenline.classList.toggle("active");
}
function togglebox(){
   HTML.classList.toggle("active");
}
function Numbers(event){
   let value = event.target.value;

   mycalculation += value;
   myDisplay.value += value;

   seconddisplay(mycalculation);
   myDivdisplay.classList.remove("active");
   myDivdisplay.classList.add("visible");

   x++;
   console.log(mycalculation);
   addtoconsole(mycalculation,x);
}
function clearDisplay(){
   mycalculation = "";
   myDisplay.value = "";

   seconddisplay(mycalculation);
   myDivdisplay.classList.remove("active");
   myDivdisplay.classList.remove("visible");
   
   console.log(mycalculation);
   x++;
   addtoconsole(mycalculation,x);
}
function DeleteDisplay(){
   mycalculation = mycalculation.slice(0,-1);
   myDisplay.value = myDisplay.value.slice(0,-1);

   seconddisplay(mycalculation);
   myDivdisplay.classList.remove("active");
   if(myDisplay.value == ""){
      myDivdisplay.classList.remove("visible");
   }
   if(mysecondDisplay.value == "= undefined"){
      mysecondDisplay.value = mycalculation;
   }
   
   console.log(mycalculation);
   x++;
   addtoconsole(mycalculation,x);
}
function percentDisplay(){
   mycalculation = mycalculation / '100' + '';
   myDisplay.value = myDisplay.value / '100' + '';
   if(myDisplay.value == 'NaN'){
      myDisplay.value = mycalculation;
   }

   seconddisplay(mycalculation);
   myDivdisplay.classList.remove("active");
   myDivdisplay.classList.add("visible");

   console.log(mycalculation);
   x++;
   addtoconsole(mycalculation,x);
}
function operator(event){
   let lastletter = mycalculation.charAt(mycalculation.length -1);
   let lastletterDisplay = myDisplay.value.charAt(myDisplay.value.length -1);
  
  
   for(let i = 0;i <4; i++){
         if(lastletter == operatorsvalue[i]){//* / + -
            mycalculation =  mycalculation.replace(lastletter,event.target.value);
            myDisplay.value = myDisplay.value.replace(lastletterDisplay,event.target.value);
            myDisplay.value = myDisplay.value.replace('/',decodeHtmlCharCodes('&#247;'));
             myDisplay.value = myDisplay.value.replace('*',decodeHtmlCharCodes('&#215;'));
             console.log('condition is true');
             return;
         }
      }
      console.log('condition is false');
      mycalculation += event.target.value;
      myDisplay.value = mycalculation;
      for(let i = 0;i < mycalculation.length;i++){
         myDisplay.value = myDisplay.value.replace('/',decodeHtmlCharCodes('&#247;'));
         myDisplay.value = myDisplay.value.replace('*',decodeHtmlCharCodes('&#215;'));
      }

   myDivdisplay.classList.remove("active");
   console.log(mycalculation);
   x++;
   addtoconsole(mycalculation,x);
}
function equals(){
   seconddisplay(mycalculation);
   mycalculation = mysecondDisplay.value.slice(1).toString();
   myDivdisplay.classList.add("active");

   console.log(mycalculation);
   x++;
   addtoconsole(mycalculation,x);
}
function seconddisplay(key){
   mysecondDisplay.value =  "= " + eval(key);
}
function decodeHtmlCharCodes(str) { 
   return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
     return String.fromCharCode(charCode);
   });
}
function addtoconsole(str,i){
   newElem = document.createElement('div');
   newElem.classList.add("display");
   newElem.innerHTML= "<span>" + i + ": "+"</span>" + str;

   myDisplayconsole.append(newElem);
   myDisplayconsole.scrollBy(0,23);
}
function resetlog(){
   myDisplayconsole.innerHTML = "";
}
function visiblelog(){
   // mysecondDisplay.classList.add('active');
   myDisplayconsole.classList.toggle('active');
   mybutton.classList.toggle('active');
}
function clearlog(){
   myDisplayconsole.innerHTML = "";
}