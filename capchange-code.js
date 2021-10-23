userInput = prompt('Type what you want to see capchanged here:', 'My name is Ettie Spaghettiiiiiiiiiiiiiiiiiii and I am a can of noodles');
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


