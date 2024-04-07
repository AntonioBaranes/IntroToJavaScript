

function func(num){
	if (num == 1){
		return "The number was 1!";
	}
	else if(num==2){
		return "The number was 2";
	}
	else if(num==3){
		return "The number was 3";
	}
	else{
		return "The number wasn't 1, 2, or 3";
	}
}

let num = 7;
let result = func(num);

alert("Q4: number: " + num + " Function to see if number is 1, 2, or 3 --> " + result);