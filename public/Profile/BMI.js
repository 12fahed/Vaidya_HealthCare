let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];


function calculate() {
	if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)) {
		modal.style.display = "block";
    	modalText.innerHTML = `All fields are required!`;
  	}
	else {
    	countBmi();
  	}
}

function countBmi() {
	let p = [age.value, height.value, weight.value];

	if(male.checked) {
		p.push("male");
  	}
	else if(female.checked) {
    	p.push("female");
  	}

  	let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);  
  	let result = '';

  	if(bmi<18.5){
    	result = 'Underweight';
    }	
	else if(bmi<=24.9){
    	result = 'Healthy';
    }
	else if(bmi<=29.9){
    	result = 'Overweight';
    }
	else if(bmi<=34.9){
    	result = 'Obese';
    }
	else {
    	result = 'Extremely obese';
    }

	resultArea.style.display = "block";
	document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
	document.querySelector("#result").innerHTML = bmi.toFixed(2);
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
