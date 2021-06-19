let click = 0;



let textclick = document.querySelector(".cl");
let button = document.querySelector(".click__button");



click = localStorage.getItem("cl");
textclick.textContent = click;


button.addEventListener('click', function () {
	click++;
	localStorage.setItem("cl", click);
	textclick.textContent = click;	
});




