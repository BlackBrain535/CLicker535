let click = 0;



let textclick = document.querySelector(".cl");
textclick.textContent = click;
let button = document.querySelector(".click__button");


button.addEventListener('click', function () {
	click++;
	textclick.textContent = click;
});




