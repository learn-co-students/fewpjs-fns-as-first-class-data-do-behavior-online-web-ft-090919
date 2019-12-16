/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  let arr = timeString.split(":");
  let time = parseInt(arr[0], 10);
  if (time < 12) return "Good Morning";
  if (time > 17) return "Good Evening";
  return "Good Afternoon"
};

function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
};