/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
const time_24 = parseInt(time);
if (time_24 < 12) return "Good Morning"
if (time_24 > 17) return "Good Evening"
return "Good Afternoon"
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(message) {
document.getElementById("greeting").innerText = message; 
}
