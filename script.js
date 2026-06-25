function firstWord(s) {
	 s = s.trim();

  let index = s.indexOf(" ");

  if (index === -1) {
    return s;
  }

  return s.slice(0, index);
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
