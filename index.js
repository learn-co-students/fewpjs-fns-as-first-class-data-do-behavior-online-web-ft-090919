/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/
function greet(arg) {
  const num = arg.split(":");
  let num2 = num[0].concat("", num[1]);

  if (num2 < 1200) {
    return "Good Morning";
  } else if (num2 > 1200 && num2 < 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(arg) {
  let theThing = document.getElementById("greeting");
  theThing.innerText = arg;
}
