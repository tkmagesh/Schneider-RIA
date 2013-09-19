function Calculator(){
	this.add = function() {
		var that = this;
	  function parseArg(x){
	    if (typeof x == "number") return x;
	    if (typeof x == "string") 
	      return isNaN(x) ?  0 : parseInt(x);
	    if (typeof x == "function") return parseArg(x());
	    if (typeof x.length != "undefined") return that.add.apply(that,x);
	    return 0;
	  }
	  return (arguments.length == 1) ? parseArg(arguments[0]) : parseArg(arguments[0]) + this.add.apply(this,[].splice.call(arguments,1));
	};
}