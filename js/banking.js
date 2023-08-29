// <---------------------  Deposit Section --------------------->

document
    .getElementById("deposit-button")
    .addEventListener("click", function () {
        // <------------- Deposit Input Value -------------->

        var depositInput = document.getElementById("deposit-input");
        var depositValue = depositInput.value;

        var depositAmount = parseFloat(depositValue); // ### Deposit Amount  ###

        // <---------------  Total Diposit ----------------->

        var deposit = document.getElementById("deposit-total");
        var depositTotalValue = deposit.innerText;

        var depositTotalAmount = parseFloat(depositTotalValue); // Deposit Total Amount

        if (depositAmount > 0) {
            deposit.innerText = depositAmount + depositTotalAmount;

            depositInput.value = "";

            // <---------------- Total Balance ---------------->

            var totalBalanceInput = document.getElementById("balace-input");
            var totalBalanceValue = totalBalanceInput.innerText;
            var totalBalanceAmount = parseFloat(totalBalanceValue); // Total Balance Amount

            totalBalanceInput.innerText = depositAmount + totalBalanceAmount;
        } else {
            alert("Please Give positive Value");
        }
    });

// <-------------------------- Withdraw Section ----------------------->

document
    .getElementById("withdraw-button")
    .addEventListener("click", function () {
        // <------------- Withdraw Input Value -------------->

        var withdrawInput = document.getElementById("withdraw-input");
        var withdrawValue = withdrawInput.value;

        var withdrawAmount = parseFloat(withdrawValue); // ### Withdraw Amount  ###

        // <---------------  Total Withdraw ----------------->

        var withdraw = document.getElementById("withdraw-total");
        var withdrawTotalValue = withdraw.innerText;

        var withdrawTotalAmount = parseFloat(withdrawTotalValue); // Withdraw Total Amount

        // <---------------- Total Balance ---------------->

        var totalBalanceInput = document.getElementById("balace-input");
        var totalBalanceValue = totalBalanceInput.innerText;
        var totalBalanceAmount = parseFloat(totalBalanceValue); // Total Balance Amount

        if (withdrawAmount > 0) {
            if (totalBalanceAmount > 0 && withdrawAmount <= totalBalanceAmount) {
                withdraw.innerText = withdrawAmount + withdrawTotalAmount;

                withdrawInput.value = "";
                totalBalanceInput.innerText = totalBalanceAmount - withdrawAmount;
            } else {
                alert("No Money Available");
            }
        } else {
            alert("Please give Positive Value");
            withdrawInput.value = "";
        }
    });
