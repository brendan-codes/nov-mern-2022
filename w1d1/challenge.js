function crazy(a, b, c, d) {
	if(a > 0) {
		return b(d(a));
	} else {
		return c(b(a));
	}
}

var output = crazy(5, function(a) {
	for(var i = 1; i < a; i++) {
		return a*i;
	}	
}, function(a) {
	return a-6;
}, function(a) {
	return a+7;
});

console.log(output);