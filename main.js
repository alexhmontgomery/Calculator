

var button = document.querySelectorAll("h2")
var number = document.querySelector(".number")
var operator = document.querySelector(".operator")
var equal = document.querySelector(".equal")
var decimal = document.querySelector(".decimal")
var output = document.querySelector(".output")
var clear = document.querySelector(".clear")

var calculation = []

for (var i = 0; i < button.length; i++) {
  let value = button[i].id
  let className = button[i].className

  button[i].addEventListener('click', function() {
    console.log(value)

    if (className == "clear") {
      output.textContent = ""
      output.style.fontSize = "1.5em"
      calculation = []
    }
    else if (className == "equal"){
      //adjust array to perform Square Roots
      for (var i = 0; i < calculation.length; i++) {
        if (calculation[i] == "SqRt") {
          calculation[i] = "Math.sqrt("
        }
      }
      for (var i = 0; i < calculation.length; i++) {
        if (calculation[i] == "Math.sqrt(") {
          calculation.push(')')
        }
      }
      //adjust array to perform Squares
      let power = []
      for (var i = 0; i < calculation.length; i++) {
        if (calculation[i] == "^2") {
          power = ['Math.pow(']
          calculation[i] = ", 2)"
        }
      }

      calculation = power.concat(calculation)
      var answer = calculation.join("")

      answer = eval(answer)
      console.log(answer)

      calculation = [answer]
      console.log(calculation)

      function roundToEight(num) {
        return +(Math.round(num + "e+8")  + "e-8");
      }

      let answerLength = String(answer)
      answerLength = answerLength.length

      if (answerLength > 15) {
        output.style.fontSize = "1.1em"
        output.textContent = answer
      } else if (answerLength > 25) {
        output.style.fontSize = "0.9em"
        output.textContent = answer
      }
      else {
        output.textContent = answer
      }

    }
    else if (value == 'question') {
      output.style.fontSize = "0.8em"
      output.textContent = "alex is best programmer in world"
      setTimeout(function() {
        output.textContent = ""
        output.style.fontSize = "1.5em"
        calculation = []
      }, 3000)
    }
    else {
      if (output.textContent == answer) {
        calculation = [answer]
      }

      calculation.push(value)
      console.log(calculation)
      output.textContent = calculation.join(" ")
    }
  })

}
