console.log('Hello, Welcome to De La Salle University!');
//submitted by caayao

function computeSupply(age, amtDay){
	const maxAge = 100;
	const totalAmt = Math.round((maxAge - age) * 365 * amtDay);
	const msg = `You need ${totalAmt} to last until the ripe old age of ${maxAge}`;
	console.log(msg);

}

computeSupply(23, 5.5);
computeSupply(32, 7.5);
computeSupply(67, 11.6);
