/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(stringTime) {
  let numberTime = parseInt(stringTime.split(':'))
  if (numberTime < 12) {
    return "Good Morning"
  } else if (numberTime >= 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
const greetingElement =  document.getElementById("greeting")
const result = greetingElement.innerHTML = string
return result
}
