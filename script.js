//your JS code here. If required.
let array = [1,2,3,4];
let output = document.getElementById('output');
let promise1 = new Promise ((res) => {
	setTimeout (() => {
		let odd = array.filter((i) => i % 2 != 0);
		res(odd);
	}, 1000)
})

let promise2 =  new Promise ((res) => {
	setTimeout (() => {
		let even = array.filter((i) => i % 2 == 0);
		 for(let i = 0; i < even.length; i++){
			 even[i] = even[i] * 2;
		 }
		res(even);
	}, 2000)
})

promise1.then((data) => {
	output.innerText = data;
	return promise2;
}).then((data) => {
	output.innerText += data;
})	
