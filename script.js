
let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

buttons.forEach( (btn)=>{
btn.addEventListener("click", (e)=>{

   if (e.target.innerHTML == "=") {
  inputBox.value = eval(inputBox.value);

   } else if(e.target.innerHTML == "DEL"){
     inputBox.value = inputBox.value.slice(0,-1);
   }
   else if(e.target.innerHTML == "AC"){
    inputBox.value = "";
   }
   
   else{
    inputBox.value +=  e.target.innerHTML;
   }



})
})
