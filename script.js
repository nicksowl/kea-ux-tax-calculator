// PIPKA

function calculateTax() {
    let income = document.getElementById('money').value;
    let tax = document.getElementById('tax').value;

    // Add Decemal Check
    if (income < 0 || tax > 100 || tax < 0 || income === 0 || tax === 0) {
        alert('Wrong Values! Please correct!');
    } else {

        function calculation() {
            let incomeTaxAmmount = (income/100*tax).toFixed(2);
            let incomeBrutoAmmount = (income-incomeTaxAmmount).toFixed(2);
    
            document.getElementById('finalTax').innerHTML = incomeTaxAmmount;
            document.getElementById('finalAmount').innerHTML = incomeBrutoAmmount;
        }

    }

    calculation();
}

// $(document).ready(function() {
//     $('form').submit(function(e) {
//         e.preventDefault();
//         // or return false;
//     });
// });