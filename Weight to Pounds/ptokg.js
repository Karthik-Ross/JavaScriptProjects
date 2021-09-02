function weightConverter(myWeightInKg) {
	var myWeightInKg = myWeightInKg / 2.2046;
	var weights = myWeightInKg.toFixed(0);
	document.getElementById("outputKilograms").innerHTML = weights;
}