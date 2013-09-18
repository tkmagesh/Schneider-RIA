function Employee(id,name,salary){
	var _id = id,
		_name = name,
		_salary = salary;
		
	function triggerModelChange(){
		console.log(this);
		this.onModelChange();
	}

	this.id = function(){
		if (arguments.length == 0) return _id;
		//after validation
		_id = arguments[0];
		triggerModelChange();

	};

	this.name = function(){
		if (arguments.length == 0) return _name;
		_name = arguments[0];
		triggerModelChange();
	
	};

	this.salary = function(){
		if (arguments.length == 0) return _salary;
		_salary = arguments[0];	
		
		triggerModelChange();
	}
	
	this.onModelChange = null;
}


//Create an employee
var e = new Employee(1,"name",1000);
e.onModelChange = function(){
  console.log("model changed");
}

e.id(201);
//notice that the previous call doesnt display "model changed" in the console... Fix it

