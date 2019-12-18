/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  if ((parseInt(time, 24)) < (26)) {
    return `Good Morning`;
  }
  if ((parseInt(time, 24)) > (31)) {
    return `Good Evening`;
  }
  if ((26) < (parseInt(time, 24)) < (31)) {
    return `Good Afternoon`;
  }
}
 
  let result = greet(time);


/* Write your implementation of displayMessage() */
function displayMessage(result) {
  // document.querySelector("#greeting").textContent = result;
  document.getElementById("greeting").innerText = result;
}

 

