

let carts =document.querySelectorAll('.cart');

for (let i=0  ; i<carts.length;i++){
	carts[i].addEventListener('click',()=> {
		 cartNumbers();
	}) ;
}
function onLoadCartNumber(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.btn .num').textContent=productNumbers;
	}
}


function cartNumbers() {

let productNumbers =localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);


if (productNumbers) {

	localStorage.setItem('cartNumbers', productNumbers +1);
	document.querySelector('.btn .num').textContent = productNumbers + 1;
} else {
	localStorage.setItem('cartNumbers',1);
	document.querySelector('.btn .num').textContent = 1;
}

}
onLoadCartNumber();


