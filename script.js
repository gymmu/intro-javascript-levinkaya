function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText(){
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"

}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num
}

function resetCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = 0
  numberElement.textContent = num
}


function writeText() {
const inputElement = document.querySelector("#input")
const outputElement = document.querySelector("#output")

const inputValue = inputElement.value
const outputValue = output.textContent

const newValue = outputValue +"\n" + inputValue

outputElement.textContent =newValue

}




