const expect = require('chai').expect;   // call expect() from Chai library

const Calculation = require('../src/sum.js');   // import file to be tested 

// Test suite
describe('Test class Calculate', () => {

	let calculate;

	beforeEach(() => {
		calculate = new Calculation(); // create object from class
	});

	// Test case
	it('If val1=1 and val2=2, expect result=3', () => {
		// Arrage
		const val1=1;
		const val2=2;

		// Act
		const result = calculate.sum(val1, val2);

		// Assert
		expect(3).equal(result); // result=3 ?
		expect(4).not.equal(result);
	});

});

// Cr: https://medium.com/@weerapon/beginner-unit-test-for-javascript-7baca05caad0