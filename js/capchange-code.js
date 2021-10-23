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

window.onload = function() {
  $("#title-change").text(capChange("capchange code"));
  $("#header-change").text(capChange("make your text look like this!!"));
  $("#textbox-change").text(capChange("please enter text here:"));
  $("#submit-change").text(capChange("submit!"));
  $("#reload-change").text(capChange("click here to reset the page"));
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const userResult = capChange($("#text-input").val());
    $("#result-list").prepend("<li>" + userResult + "</li>");

    $("#title-change").text(capChange("capchange code"));
    $("#header-change").text(capChange("make your text look like this!!"));
    $("#textbox-change").text(capChange("please enter text here:"));
    $("#submit-change").text(capChange("submit!"));
    $("#reload-change").text(capChange("click here to reset the page"));
  });

  $("#reload-change").click(function() {
    $("#form1").val("");
    window.location.reload();
  });
});


