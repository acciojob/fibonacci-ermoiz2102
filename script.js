function fibonacci(num) {
// your code here
	if(num<=2)
			return num-1
		let a=0
	     let b=1
	let ans=0
	while(num-->2){
		ans=a+b
		a=b
		b=ans
	}
	return b
	  
}

module.exports = fibonacci;
