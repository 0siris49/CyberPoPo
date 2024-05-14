class buyerMortgageController{
    calculateMortgage(principal,interest,payments) {
        var x = Math.pow(1 + interest, payments);
        var monthly = (principal * x * interest) / (x - 1);

        if (isFinite(monthly)) {
            document.getElementById('monthlyPayment').textContent = 'Monthly Payment: $' + monthly.toFixed(2);
        } else {
            document.getElementById('monthlyPayment').textContent = 'Monthly Payment: $0';
        }
    }
}

var calculateButton = document.getElementById('calculateMort');
calculateButton.addEventListener("click", function(){
    var principal = document.getElementById('principal').value;
    var interest = document.getElementById('interest').value / 100 / 12;
    var payments = document.getElementById('years').value * 12;

    let initBuyerMortgageController = new buyerMortgageController();
    initBuyerMortgageController.calculateMortgage(principal,interest,payments);
})