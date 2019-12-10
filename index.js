/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const [hour, minute] = time.split(':');
  if (parseInt(hour) < 12) {
    return "Good Morning";
  } else if (parseInt(hour) >=17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

function displayMessage(msg) {
  const heading = document.getElementById('greeting');
  heading.innerText = msg;
}



/* Write your implementation of displayMessage() */
