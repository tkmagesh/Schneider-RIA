describe("Calculator",function(){
	var calculator;

	beforeEach(function() {
    	calculator = new Calculator();
  	});

	describe("add",function(){
		it("should be able to add 2 numbers",function(){
			//Arrange
			var input1 = 10, input2 = 20, expectedResult = 30;	

			//Act
			console.dir(calculator.add);
			var result = calculator.add(input1,input2);

			//Assert
			expect(result).toEqual(expectedResult);
		});

		it("should be able to 1 number",function(){
			//Arrange
			var input1 = 10;

			//Act
			var result = calculator.add(input1);

			//Assert
			expect(result).toEqual(input1);
		});

		it("should be able to add an array of numbers",function(){
			//Arrange
			var numbers = [1,2,3,4,5], expectedResult = 15;

			//Act
			var result = calculator.add(numbers);

			//Assert
			expect(result).toEqual(expectedResult);
		});
	});
});