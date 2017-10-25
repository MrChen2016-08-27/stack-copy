const stackCopy = function (obj){
	let _this= this;
	let result = null;
	function isArray (ele){
		if(Object.prototype.toString.call(ele) === '[object Array]'){
			return true;
		}else{
			return false;
		}
	}
	if(isArray(obj)){
		result = [];
		obj.map((ele, i) => {
			if(isArray(obj[i]) || (typeof obj[i] === 'object' && (obj[i] !== null))){
				result[i] = this.$copy(obj[i]);
			}else{
				result[i] = obj[i];	
			}
		});
	}else if(typeof obj === 'object' && obj !== null){
		result = {};
		for(let o in obj){
			if(obj.hasOwnProperty(o)){
				result[o] = this.$copy(obj[o]);
			}
		}
	}else{
		result = obj;
	}
	return result;
}

export default stackCopy;