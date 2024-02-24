let num1, num2;
let result;

let add = function () {
num1 = parseFloat(document.getElementById("input-1").value);
num2 = parseFloat(document.getElementById("input-2").value);
  result = num1 + num2;
  
  document.getElementById("result").innerText = result;
};
let sub = () => {
num1 = parseFloat(document.getElementById("input-1").value);
num2 = parseFloat(document.getElementById("input-2").value);
  result = num1 - num2;
  
  document.getElementById("result").innerText = result;
}
let mul = function () {
num1 = parseFloat(document.getElementById("input-1").value);
num2 = parseFloat(document.getElementById("input-2").value);
  result = num1 * num2;
 
  document.getElementById("result").innerText = result;
};
let div = () => {
num1 = parseFloat(document.getElementById("input-1").value);
num2 = parseFloat(document.getElementById("input-2").value);
  result = num1 / num2;
  
  document.getElementById("result").innerText = result;
};
// if(result === 0){
//     alert("this is not")
// }
add();
sub();
mul();
div();
