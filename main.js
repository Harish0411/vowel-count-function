let vowelCount = function(a){
let m=0;
     for(i=0; i<a.length; i++){
	     if(a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u" || a[i] == "A" || a[i] == "E" || a[i] == "I" || a[i] == "O" || a[i] == "U"){
		     m++;
		  }
	}
	document.write(`${a} has ${m} vowels`);
}
vowelCount("Hariharan");