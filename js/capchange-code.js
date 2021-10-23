const userInput = $(document).ready(function() {
  $("#form1").submit(function(event) {
    return (this).val();
  });
});
console.log(userInput);
userInput = userInput.toLowerCase();
let ary = [];
for (let k = 0; k < userInput.length; k++) {
  ary.push(userInput.charAt(k));
}
for (let j = 0; j < 3; j++) {
	for (let i = 0; i < userInput.length; i++) {
		if ((userInput.charAt(i) !== 'i') &&  (Math.random() < 0.4)) {
			ary[i] = ary[i].toUpperCase();
		}
    if (ary[i] === ary[i + 1]) {
    	ary[i] = ary [i].toLowerCase();
      ary[i + 1] = ary[i + 1].toUpperCase();
    }
  }
  alert(ary.join(''));
}


