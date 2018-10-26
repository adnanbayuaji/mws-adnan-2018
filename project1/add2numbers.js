function kalkulator() {
	let angka = document.querySelectorAll('input');
	let i1 = angka[0].value ? angka[0].value : 0 ;
	let i2 = angka[1].value ? angka[1].value : 0;
	
	angka[2].value = parseInt(i1) + parseInt(i2) ;
}

let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);