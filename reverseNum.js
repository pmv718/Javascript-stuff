/*	finding out reverse of a number and naming it */
module.exports = function revNum(a){
	/*	convert to string , split & reverese to access the element and rename it	*/
	var val = [];
	var str = "";
	var i;
	a = a.toString();
	a = a.split("");
	a = a.reverse();
	/*	find out the string matching to the number	*/
	for (i = 0; i < a.length; i++) {
		if(a[i] === "1") 
			val[i] = "ONE";
		else if(a[i] === "2")
			val[i] ="TWO";
		else if(a[i] === "3")
			val[i] = "THREE";
		else if(a[i] === "4")
			val[i] = "FOUR";
		else if(a[i] === "5")
			val[i] = "FIVE";
		else if(a[i] === "6")
			val[i] = "SIX";
		else if(a[i] === "7")
			val[i] = "SIX";
		else if(a[i] === "8")
			val[i] = "EIGHT";
		else if(a[i] === "9")
			val[i] = "NINE";
		else if(a[i] === "0")
			val[i] = "ZERO";
	}
	/*	convert it to string again	*/
	for(i of val)
		str = str + " " + i;
	/*	return the result	*/
	return str;	
}