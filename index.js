/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

/* How would I handle negative number inputs? */
function greet(time) {
  const hour = time.split(":")[0];
  if ( hour < 12 ) return "Good Morning";
  if ( hour <= 17 ) return "Good Afternoon";
  if ( hour > 17 ) return "Good Evening";
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}