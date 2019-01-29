class Calculation {
	sum(val1, val2) {
		let result = val1 + val2;
		return result;
	}
}

// Export to another file >> Calculation.sum()
module.exports = Calculation;