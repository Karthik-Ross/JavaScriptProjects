function computeLoan() {

	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest').value;
	var months = document.getElementById('month').value;
	var interests = (amount * (interest_rate * 0.01)) / months;
	var payments = ((amount / months) * interests).toFixed(2);
	payments = payments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly payment = $" + payments; 
}