
console.log('ready')
function next_step1() {
	var value1 = $('input[value=1]:checked').val();
	
	var value2 = $('input[value=2]:checked').val();
	
	var value3 = $('input[value=3]:checked').val();
	
	if(value1) {
		$('#q1').hide()
		$('#q2').show()
	}
	else if(value2){
		$('#q1').hide()
		$('#q4').show()

	 }
	 else {
	 	$('#q1').hide()
		$('#q8').show()
	 }
}

function next_step2() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q2').hide()
		$('#plant1').show() //SHOW RESULT: ZZ PLANT
	}
	 else {
	 	$('#q2').hide()
		$('#q3').show()
	 }
}

function next_step3() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q3').hide()
		$('#plant2').show() //SHOW RESULT: LEPEL PLANT
	}
	 else {
	 	$('#q3').hide()
		$('#plant3').show() //SHOW RESULT: VARENS
	 }
}

function next_step4() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q4').hide()
		$('#q5').show()
	}
	 else {
	 	$('#q4').hide()
		$('#q6').show()
	 }
}

function next_step5() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q5').hide()
		$('#plant4').show() //SHOW RESULT: ORCHIDEE
	}
	 else {
	 	$('#q5').hide()
		$('#plant5').show() // SHOW RESULT: VETPLANT
	 }
}

function next_step6() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q6').hide()
		$('#q7').show() 
	}
	 else {
	 	$('#q6').hide()
		$('#plant11').show() // SHOW RESULT: BANANENPLANT
	 }
}

function next_step7() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q7').hide()
		$('#plant6').show() // SHOW RESULT: GRASLELIE
	}
	 else {
	 	$('#q7').hide()
		$('#plant7').show() // SHOW RESULT: VROUWENTONG
	 }
}

function next_step10() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q10').hide()
		$('#plant7').show() // SHOW RESULT: VROUWENTONG
	}
	 else {
	 	$('#q10').hide()
		$('#plant8').show() // SHOW RESULT: BOSTON VARENS
	 }
}

function next_step8() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q8').hide()
		$('#q9').show() 
	}
	 else {
	 	$('#q8').hide()
		$('#plant9').show() // SHOW RESULT: CACTUS
	 }
}

function next_step9() {
	var value1 = $('input[value=true]:checked').val();
	
	var value2 = $('input[value=false]:checked').val();
	
	if(value1) {
		$('#q9').hide()
		$('#q10').show() 
	}
	 else {
	 	$('#q9').hide()
		$('#plant10').show() // SHOW RESULT: KRUIDEN
	 }
}

function prev_step1() {
	document.getElementById("q1").style.display = "block";
	document.getElementById("q2").style.display = "none";
}

function prev_step2() {
	document.getElementById("q2").style.display = "block";
	document.getElementById("q3").style.display = "none";
}

function prev_step3() {
	document.getElementById("q1").style.display = "block";
	document.getElementById("q4").style.display = "none";
}

function prev_step4() {
	document.getElementById("q4").style.display = "block";
	document.getElementById("q5").style.display = "none";
}

function prev_step5() {
	document.getElementById("q4").style.display = "block";
	document.getElementById("q6").style.display = "none";
}

function prev_step6() {
	document.getElementById("q6").style.display = "block";
	document.getElementById("q7").style.display = "none";
}

function prev_step7() {
	document.getElementById("q1").style.display = "block";
	document.getElementById("q8").style.display = "none";
}

function prev_step8() {
	document.getElementById("q8").style.display = "block";
	document.getElementById("q9").style.display = "none";
}

function prev_step9() {
	document.getElementById("q9").style.display = "block";
	document.getElementById("q10").style.display = "none";
}

