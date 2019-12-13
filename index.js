/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(strTime) {
  let splitTime = strTime.split(':');
  let intTime = parseInt(splitTime[0], 10);

  if (intTime < 12) {
    return 'Good Morning';
  } else if (intTime > 12 && intTime < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(greetingStr) {
  let ele = document.getElementById('greeting');
  ele.innerText = greetingStr;
}