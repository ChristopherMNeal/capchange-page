function capChange(input) {
  input = input.toLowerCase();
  let inputArray = input.split("");
  for (let i = 0; i < input.length; i++) {
    if ((input.charAt(i) !== 'i') &&  (Math.random() < 0.4)) {
      inputArray[i] = inputArray[i].toUpperCase();
    }
    if (inputArray[i] === inputArray[i + 1]) {
      inputArray[i] = inputArray[i].toLowerCase();
      inputArray[i + 1] = inputArray[i + 1].toUpperCase();
    }
  }
  return(inputArray.join(''));
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const userInput = $("#text-input").val();

    const userResult = capChange(userInput);
    $("#result-list").prepend("<li>" + userResult + "</li>");
  });
});


