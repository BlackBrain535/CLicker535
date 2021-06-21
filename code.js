



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
	if(click >= 100){
		click -= 100;
		dollars++;
		textclick.textContent = click;
		textdollars.textContent = dollars;

		localStorage.setItem("dollars", dollars);
		localStorage.setItem("click", click);
	}
	else{
		let r = 100 - click;
		alert("Вам не хватает" + r + 'CL')
	}
});










































//Shop




//check
//f = отвечает за то куплен ли обьект или нет
//ff  = 'Buy', '+', '-'
 



//imgclickbutton
let buttonclick = document.querySelector("#buttonclick");



//imgclick
let imgclick = 'https://static10.tgstat.ru/channels/_0/4f/4f8e3eeb21141e482306e3de65c16730.jpg';
if(localStorage.getItem('imgclick') === null){
	localStorage.setItem('imgclick', imgclick);

}
imgclick = localStorage.getItem('imgclick');
buttonclick.src = imgclick;











//img-1

//img-loading-check-1
let button1f = document.querySelector("#button1f");
let check1ff = '-';
if(localStorage.getItem("check1ff") === null){
	localStorage.setItem("check1ff", check1ff);
	console.log("true1");
}
check1ff = localStorage.getItem("check1ff");
button1f.textContent = check1ff;



//img-button-1
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

		if(check4f === 'true'){
			check4ff = '+';
			button4f.textContent = check4ff;
			localStorage.setItem("check4ff", check4ff);
			ColorGreen('text4f');
		}





		if(check5f === 'true'){
			check5ff = '+';
			button5f.textContent = check5ff;
			localStorage.setItem("check5ff", check5ff);
			ColorGreen('text5f');
		}




		if(check6f === 'true'){
			check6ff = '+';
			button6f.textContent = check6ff;
			localStorage.setItem("check6ff", check6ff);
			ColorGreen('text6f');
		}
	
			


		imgclick = 'https://static10.tgstat.ru/channels/_0/4f/4f8e3eeb21141e482306e3de65c16730.jpg';
		localStorage.setItem('imgclick', imgclick);
		buttonclick.src = imgclick;

	}
}


//img-check-1
if(check1ff === '+'){
	ColorGreen('text1f');

}
else if(check1ff === '-'){
	ColorYellow('text1f');
}

















//
//
//
//
//
//
//
//img-2
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


		if(check4f === 'true'){
			check4ff = '+';
			button4f.textContent = check4ff;
			localStorage.setItem("check4ff", check4ff);
			ColorGreen('text4f');
		}




		if(check5f === 'true'){
			check5ff = '+';
			button5f.textContent = check5ff;
			localStorage.setItem("check5ff", check5ff);
			ColorGreen('text5f');
		}


		if(check6f === 'true'){
			check6ff = '+';
			button6f.textContent = check6ff;
			localStorage.setItem("check6ff", check6ff);
			ColorGreen('text6f');
		}

		imgclick = 'https://pbs.twimg.com/profile_images/548018397120720896/8_QiVzFa.jpeg';
		localStorage.setItem('imgclick', imgclick);
		buttonclick.src = imgclick;
	}
}
















//
//
//
//
//img-3
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


//img-button-3
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



		if(check4f === 'true'){
			check4ff = '+';
			button4f.textContent = check4ff;
			localStorage.setItem("check4ff", check4ff);
			ColorGreen('text4f');
		}



		if(check5f === 'true'){
			check5ff = '+';
			button5f.textContent = check5ff;
			localStorage.setItem("check5ff", check5ff);
			ColorGreen('text5f');
		}




		if(check6f === 'true'){
			check6ff = '+';
			button6f.textContent = check6ff;
			localStorage.setItem("check6ff", check6ff);
			ColorGreen('text6f');
		}

		imgclick = 'https://pixelbox.ru/wp-content/uploads/2021/04/anim-avatar-discord-92.gif';
		localStorage.setItem('imgclick', imgclick);
		buttonclick.src = imgclick;
	}
}
























//
//
//
//
//img-4
let check4f = 'false';
if(localStorage.getItem("check4f") === null){
	localStorage.setItem("check4f", check4f);

}
check4f = localStorage.getItem("check4f");

let check4ff = 'Buy 10$'
if(localStorage.getItem("check4ff") === null){
	localStorage.setItem("check4ff", check4ff);

}
check4ff = localStorage.getItem("check4ff");
button4f.textContent = check4ff;

if(check4f === 'true'){
	ColorGreen('text4f');
	if(check4ff === '-'){
		ColorYellow('text4f');
	}
}


//img-button-4
document.querySelector("#button4f").onclick = function(){
	if(dollars >= 10 && check4f === 'false'){
		dollars -= 10;
		textdollars.textContent = dollars;
		ColorGreen('text4f');
  		alert('Вы совершили покупку -10$')
  		check4f = 'true';
  		localStorage.setItem("check4f", check4f);
  		console.log(localStorage.getItem("check4f"));
  		check4ff = '+';
  		localStorage.setItem("check4ff", check4ff);
  		button4f.textContent = check4ff;

	}

	else if(check4f === 'true'){
		ColorGreen('text4f');
		check4ff = '+';
		button4f.textContent = check4ff;
		localStorage.setItem("check4ff", check4ff);
	}

	else{
		let r = 10 - dollars;
		alert('Вам не хватает ' + r + '$!!!')
	}
  	
	if(check4ff === '+'){
		console.log('Абоба');

		check1ff = '+';
		button1f.textContent = check1ff;
		localStorage.setItem("check1ff", check1ff);
		ColorGreen('text1f');

			

		if(check2f == 'true'){
			check2ff = '+';
			button2f.textContent = check2ff;
			localStorage.setItem("check2ff", check2ff);
			ColorGreen('text2f');	
		}
			
			
		if(check3f == 'true'){
			check3ff = '+';
			button3f.textContent = check3ff;
			localStorage.setItem("check3ff", check3ff);
			ColorGreen('text3f');
		}
			

		check4ff = '-';
		button4f.textContent = check4ff;
		localStorage.setItem("check4ff", check4ff);
		ColorYellow('text4f');

		

		if(check5f === 'true'){
			check5ff = '+';
			button5f.textContent = check5ff;
			localStorage.setItem("check5ff", check5ff);
			ColorGreen('text5f');
		}







		if(check6f === 'true'){
			check6ff = '+';
			button6f.textContent = check6ff;
			localStorage.setItem("check6ff", check6ff);
			ColorGreen('text6f');
		}
		



		imgclick = 'https://yt3.ggpht.com/ytc/AAUvwnhOT0-pW0jjV1YEzEiNt-Yb_4auS-P-5oIqZslV=s900-c-k-c0x00ffffff-no-rj';
		localStorage.setItem('imgclick', imgclick);
		buttonclick.src = imgclick;
	}
}














































//
//
//
//
//img-5
let check5f = 'false';
if(localStorage.getItem("check5f") === null){
	localStorage.setItem("check5f", check5f);

}
check5f = localStorage.getItem("check5f");

let check5ff = 'Buy 15$'
if(localStorage.getItem("check5ff") === null){
	localStorage.setItem("check5ff", check5ff);

}
check5ff = localStorage.getItem("check5ff");
button5f.textContent = check5ff;

if(check5f === 'true'){
	ColorGreen('text5f');
	if(check5ff === '-'){
		ColorYellow('text5f');
	}
}


//img-button-5
document.querySelector("#button5f").onclick = function(){
	if(dollars >= 15 && check5f === 'false'){
		dollars -= 15;
		textdollars.textContent = dollars;
		ColorGreen('text5f');
  		alert('Вы совершили покупку -15$')
  		check5f = 'true';
  		localStorage.setItem("check5f", check5f);
  		console.log(localStorage.getItem("check5f"));
  		check5ff = '+';
  		localStorage.setItem("check5ff", check5ff);
  		button5f.textContent = check5ff;

	}

	else if(check5f === 'true'){
		ColorGreen('text5f');
		check5ff = '+';
		button5f.textContent = check5ff;
		localStorage.setItem("check5ff", check5ff);
	}

	else{
		let r = 15 - dollars;
		alert('Вам не хватает ' + r + '$!!!')
	}
  	
	if(check5ff === '+'){
		

		check1ff = '+';
		button1f.textContent = check1ff;
		localStorage.setItem("check1ff", check1ff);
		ColorGreen('text1f');

			

		if(check2f == 'true'){
			check2ff = '+';
			button2f.textContent = check2ff;
			localStorage.setItem("check2ff", check2ff);
			ColorGreen('text2f');	
		}
			
			
		if(check3f == 'true'){
			check3ff = '+';
			button3f.textContent = check3ff;
			localStorage.setItem("check3ff", check3ff);
			ColorGreen('text3f');
		}
			
		if(check4f === 'true'){
			check4ff = '+';
			button4f.textContent = check4ff;
			localStorage.setItem("check4ff", check4ff);
			ColorGreen('text4f');
		}
		


		check5ff = '-';
		button5f.textContent = check5ff;
		localStorage.setItem("check5ff", check5ff);
		ColorYellow('text5f');
			




		if(check6f === 'true'){
			check6ff = '+';
			button6f.textContent = check6ff;
			localStorage.setItem("check6ff", check6ff);
			ColorGreen('text6f');
		}


		imgclick = 'https://s1.tchkcdn.com/i/9/1/141837_d504b159_177155582.gif';
		localStorage.setItem('imgclick', imgclick);
		buttonclick.src = imgclick;
	}
}




























































//
//
//
//
//img-6
let check6f = 'false';
if(localStorage.getItem("check6f") === null){
	localStorage.setItem("check6f", check6f);

}
check6f = localStorage.getItem("check6f");

let check6ff = 'Buy 15$'
if(localStorage.getItem("check6ff") === null){
	localStorage.setItem("check6ff", check6ff);

}
check6ff = localStorage.getItem("check6ff");
button6f.textContent = check6ff;

if(check6f === 'true'){
	ColorGreen('text6f');
	if(check5ff === '-'){
		ColorYellow('text6f');
	}
}


//img-button-6
document.querySelector("#button6f").onclick = function(){
	if(dollars >= 15 && check6f === 'false'){
		dollars -= 15;
		textdollars.textContent = dollars;
		ColorGreen('text6f');
  		alert('Вы совершили покупку -15$')
  		check6f = 'true';
  		localStorage.setItem("check6f", check6f);
  		console.log(localStorage.getItem("check6f"));
  		check6ff = '+';
  		localStorage.setItem("check6ff", check6ff);
  		button6f.textContent = check6ff;

	}

	else if(check6f === 'true'){
		ColorGreen('text6f');
		check6ff = '+';
		button6f.textContent = check6ff;
		localStorage.setItem("check6ff", check6ff);
	}

	else{
		let r = 15 - dollars;
		alert('Вам не хватает ' + r + '$!!!')
	}
  	
	if(check6ff === '+'){
		

		check1ff = '+';
		button1f.textContent = check1ff;
		localStorage.setItem("check1ff", check1ff);
		ColorGreen('text1f');

			

		if(check2f == 'true'){
			check2ff = '+';
			button2f.textContent = check2ff;
			localStorage.setItem("check2ff", check2ff);
			ColorGreen('text2f');	
		}
			
			
		if(check3f == 'true'){
			check3ff = '+';
			button3f.textContent = check3ff;
			localStorage.setItem("check3ff", check3ff);
			ColorGreen('text3f');
		}
			
		if(check4f === 'true'){
			check4ff = '+';
			button4f.textContent = check4ff;
			localStorage.setItem("check4ff", check4ff);
			ColorGreen('text4f');
		}
		


		if(check5f === 'true'){
			check5ff = '+';
			button5f.textContent = check5ff;
			localStorage.setItem("check5ff", check5ff);
			ColorGreen('text5f');
		}
		


		check6ff = '-';
		button6f.textContent = check6ff;
		localStorage.setItem("check6ff", check6ff);
		ColorYellow('text6f');
			

		imgclick = 'https://static.wikia.nocookie.net/dcaa7390-2cfb-40f2-a610-618f5c2c2f06';
		localStorage.setItem('imgclick', imgclick);
		buttonclick.src = imgclick;
	}
}

















































chit = 'true';


if(chit){
	document.addEventListener('keydown', function(){
		if(event.code == "KeyQ"){
			alert("Куча долларов");
			dollarsplus();
		}
		if(event.code == "KeyE"){
			alert("Куча кликов");
			clickplus();
		}
		if(event.code == "KeyR"){
			alert("Очищение магазина");
			deletProgress();
		}
		if(event.code == "KeyT"){
			alert('Удаление всех сохранений');
				clearall();
			
		}
		if(event.code == "KeyH"){
			alert("Q-Куча долларов, E-Куча кликов, R-Очищение магазина, T-Удаление всех сохранений");
		}


	});
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

	
}



function clickplus(){
	click = 99999;
	textclick.textContent = click;
	localStorage.setItem('click', click);
}



function dollarsplus(){
	dollars = 99999;
	textdollars.textContent = dollars;
	localStorage.setItem('dollars', dollars);
}



function clearall(){
	localStorage.clear();
}













