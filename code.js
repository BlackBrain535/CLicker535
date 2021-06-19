



let click = 0;
let dollars = 0;


let textclick = document.querySelector(".cl");
let button = document.querySelector(".click__button");
let textdollars = document.querySelector(".dollars");
let buttondollars = document.querySelector(".shop__button-dollars")




if(localStorage.getItem("click") === null){
	localStorage.setItem("click", click);
	console.log("true");
}
click = localStorage.getItem("click");
textclick.textContent = click;




if(localStorage.getItem("dollars") === null){
	console.log("dollarsTrue");
	localStorage.setItem("dollars", dollars);
}
dollars = localStorage.getItem("dollars");
textdollars.textContent = dollars;




button.addEventListener('click', function () {
	click++;
	localStorage.setItem("click", click);
	textclick.textContent = click;	
});


buttondollars.addEventListener('click', function(){
	if(click >= 500){
		click -= 500;
		dollars++;
		textclick.textContent = click;
		textdollars.textContent = dollars;

		localStorage.setItem("dollars", dollars);
		localStorage.setItem("click", click);
	}
	else{
		let r = 500 - click;
		alert("Вам не хватает" + r + 'CL')
	}
});































let buttonclick = document.querySelector("#buttonclick");






let button1f = document.querySelector("#button1f");


let check1ff = '-';



if(localStorage.getItem("check1ff") === null){
	localStorage.setItem("check1ff", check1ff);
	console.log("true1");
}
check1ff = localStorage.getItem("check1ff");
button1f.textContent = check1ff;


document.querySelector("#button1f").onclick = function(){
	if(check1ff === '+'){

		check1ff = '-';
		button1f.textContent = check1ff;
		localStorage.setItem("check1ff", check1ff);
		ColorYellow('text1f');


		if(check2f === 'true'){
			check2ff = '+';
			button2f.textContent = check2ff;
			localStorage.setItem("check2ff", check2ff);
			ColorGreen('text2f');
		}
		
		if(check3f === 'true'){
			check3ff = '+';
			button3f.textContent = check3ff;
			localStorage.setItem("check3ff", check3ff);
			ColorGreen('text3f');
		}

		buttonclick.src = 'https://static10.tgstat.ru/channels/_0/4f/4f8e3eeb21141e482306e3de65c16730.jpg';

	}
}

if(check1ff === '+'){
	ColorGreen('text1f');

}

else if(check1ff === '-'){
	ColorYellow('text1f');
}







let check2f = 'false';
if(localStorage.getItem("check2f") === null){
	localStorage.setItem("check2f", check2f);
	console.log("true");
}
check2f = localStorage.getItem("check2f");

let check2ff = 'Buy 10$'
if(localStorage.getItem("check2ff") === null){
	localStorage.setItem("check2ff", check2ff);
	console.log("true2");
}
check2ff = localStorage.getItem("check2ff");
button2f.textContent = check2ff;

if(check2f === 'true'){
	ColorGreen('text2f');
	if(check2ff === '-'){
		ColorYellow('text2f');
	}
}

document.querySelector("#button2f").onclick = function(){
	if(dollars >= 10 && check2f === 'false'){
		dollars -= 10;
		textdollars.textContent = dollars;
		ColorGreen('text2f');
  		alert('Вы совершили покупку -10$')
  		check2f = 'true';
  		localStorage.setItem("check2f", check2f);
  		console.log(localStorage.getItem("check2f"));
  		check2ff = '+';
  		localStorage.setItem("check2ff", check2ff);
  		button2f.textContent = check2ff;

	}

	else if(check2f === 'true'){
		ColorGreen('text2f');
		check2ff = '+';
		button2f.textContent = check2ff;
		localStorage.setItem("check2ff", check2ff);
	}

	else{
		let r = 10 - dollars;
		alert('Вам не хватает ' + r + '$!!!')
	}
  	
	if(check2ff === '+'){

		check1ff = '+';
		button1f.textContent = check1ff;
		localStorage.setItem("check1ff", check1ff);
		ColorGreen('text1f');

		check2ff = '-';
		button2f.textContent = check2ff;
		localStorage.setItem("check2ff", check2ff);
		ColorYellow('text2f');



		if(check3f === 'true'){
			check3ff = '+';
			button3f.textContent = check3ff;
			localStorage.setItem("check3ff", check3ff);
			ColorGreen('text3f');
		}
		
		buttonclick.src = "https://pbs.twimg.com/profile_images/548018397120720896/8_QiVzFa.jpeg";
	}
}







let check3f = 'false';
if(localStorage.getItem("check3f") === null){
	localStorage.setItem("check3f", check3f);
	console.log("true");
}
check3f = localStorage.getItem("check3f");

let check3ff = 'Buy 15$'
if(localStorage.getItem("check3ff") === null){
	localStorage.setItem("check3ff", check3ff);

}
check3ff = localStorage.getItem("check3ff");
button3f.textContent = check3ff;

if(check3f === 'true'){
	ColorGreen('text3f');
	if(check3ff === '-'){
		ColorYellow('text3f');
	}
}

document.querySelector("#button3f").onclick = function(){
	if(dollars >= 15 && check3f === 'false'){
		dollars -= 15;
		textdollars.textContent = dollars;
		ColorGreen('text3f');
  		alert('Вы совершили покупку -15$')
  		check3f = 'true';
  		localStorage.setItem("check3f", check3f);
  		console.log(localStorage.getItem("check3f"));
  		check3ff = '+';
  		localStorage.setItem("check3ff", check3ff);
  		button3f.textContent = check3ff;

	}

	else if(check3f === 'true'){
		ColorGreen('text3f');
		check3ff = '+';
		button3f.textContent = check3ff;
		localStorage.setItem("check3ff", check3ff);
	}

	else{
		let r = 15 - dollars;
		alert('Вам не хватает ' + r + '$!!!')
	}
  	
	if(check3ff === '+'){
		check1ff = '+';
		button1f.textContent = check1ff;
		localStorage.setItem("check1ff", check1ff);
		ColorGreen('text1f');


		if(check2f === 'true'){
			check2ff = '+';
			button2f.textContent = check2ff;
			localStorage.setItem("check2ff", check2ff);
			ColorGreen('text2f');
		}
			

		check3ff = '-';
		button3f.textContent = check3ff;
		localStorage.setItem("check3ff", check3ff);
		ColorYellow('text3f');
		buttonclick.src = "https://pixelbox.ru/wp-content/uploads/2021/04/anim-avatar-discord-92.gif";
	}
}





















function ColorGreen(id){
	document.getElementById(id).style.color = 'green';
	document.getElementById(id).style.borderColor = 'green';
}
function ColorYellow(id){
	document.getElementById(id).style.color = 'yellow';
	document.getElementById(id).style.borderColor = 'yellow';
}






function deletProgress(){
	check1ff = '-';
	button1f.textContent = check1ff;
	localStorage.setItem("check1ff", check1ff);
	ColorYellow('text1f');
	localStorage.removeItem('check2f');
	localStorage.removeItem('check2ff');
	localStorage.removeItem('check3f');
	localStorage.removeItem('check3ff');
	localStorage.removeItem('dollars');
	
}



function clickplus(){
	click = 99999;
	textclick.textContent = click;
	localStorage.setItem('click', click);
}

function clearall(){
	localStorage.clear();
}