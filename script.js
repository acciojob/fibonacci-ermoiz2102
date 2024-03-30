function fibonacci(num) {
// your code here
	if(num<2)
			return num
		let a=0
	     let b=1
	let ans=0
	while(num>1){
		ans=a+b
		a=b
		b=ans
	}
	return b
	  
}

module.exports = fibonacci;
