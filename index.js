/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let time_array = time.split(":");
  let integer_array = [];
  integer_array.push(parseInt(time_array[0]));
  integer_array.push(parseInt(time_array[1]));

  if (integer_array[0] < 12) {
    return "Good Morning";
  } else if (integer_array[0] >= 12 && integer_array[0] <= 17) {
    return "Good Afternoon";
  } else if (integer_array[0] > 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let el = document.querySelector("h1#greeting");
  el.innerText = message;
}
