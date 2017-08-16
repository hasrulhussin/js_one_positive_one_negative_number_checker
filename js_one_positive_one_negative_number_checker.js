
function positive_negative(){
	
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	
	if(isNaN(input1)||isNaN(input2)){
		document.getElementById("result_box").innerHTML = 
		"<h3 style='color: red;'>Please enter number only you stupid fuck</h3>";
	}else{
		
		var input1 = parseInt(document.getElementById("input1").value);
		var input2 = parseInt(document.getElementById("input2").value);
		
		if ((input1 < 0 && input2 > 0) || input1 > 0 && input2 < 0) {
			document.getElementById("result_box").innerHTML = 
							"<h3 style='color: green;'>Good! You're genius.</h3>";
			}else 
			{
				document.getElementById("result_box").innerHTML =
					"<h3 style='color: red;'>Really? You must be very stupid.</h3>";
			}
	}
}



function clearAll(){
	location.reload();
}
