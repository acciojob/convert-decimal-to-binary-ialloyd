function decimalToBinary(num) {
  // your code here
	if (num == 0) {
        return '0';
    } else {
        return num.toString(2)
    }
	
}

 const num = parseInt(prompt("Enter a number."));
 alert(decimalToBinary(num));
