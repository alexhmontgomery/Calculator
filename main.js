

var button = document.querySelectorAll("h2")
var number = document.querySelector(".number")
var operator = document.querySelector(".operator")
var equal = document.querySelector(".equal")
var decimal = document.querySelector(".decimal")
var output = document.querySelector(".output")
var clear = document.querySelector(".clear")

var calculation = []

for (var i = 0; i < button.length; i++) {
  let value = button[i].textContent
  if (value == "X") {
    value = "*"
  }
  let type = button[i].id
  let className = button[i].className

  button[i].addEventListener('click', function() {
    console.log(value)

    if (className == "clear") {
      console.log("poop")
      output.textContent = ""
      calculation = []
    }
    else if (className == "equal"){
      var answer = calculation.join("")
      answer = eval(answer)

      calculation = []
      calculation = [answer]
      console.log(answer)
      console.log(calculation)

      function roundToEight(num) {
        return +(Math.round(num + "e+8")  + "e-8");
      }

      let answerLength = String(answer)
      answerLength = answerLength.length

      if (answerLength > 15) {
        output.style.fontSize = "95%"
        output.textContent = answer
      }
      else {
        output.textContent = answer
      }

    }
    else {
      if (output.textContent == answer) {
        calculation = [answer]
      }

      calculation.push(value)
      console.log(calculation)
      output.textContent = calculation.join(" ")
    }
    //
    // if (className !== "clear") {
    //
    //   if (className == "equal"){
    //     var answer = calculation.join("")
    //     answer = eval(answer)
    //     function roundToEight(num) {
    //       return +(Math.round(num + "e+8")  + "e-8");
    //     }
    //     // answer = roundToEight(answer)
    //     let answerLength = String(answer)
    //     answerLength = answerLength.length
    //     console.log(answer)
    //     console.log(answerLength)
    //     if (answerLength > 15) {
    //       output.style.fontSize = "90%"
    //       output.textContent = answer
    //     }
    //     else {
    //       output.textContent = answer
    //       //max 10 characters
    //     }
    //
    //
    //
    //   }
    //
    //   else {
    //     calculation.push(value)
    //     console.log(calculation)
    //     output.textContent = calculation.join(" ")
    //   }
    // }
    //
    // else {
    //
    // console.log("poop")
    // output.textContent = ""
    // calculation = []
    //
    // }

  })

}
