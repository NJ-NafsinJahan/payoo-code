document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1- get the agent number & validate(11 digit ar hote hobe)
    const cashoutNumberInput=document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if (cashoutNumber.length !== 11){
        alert('Invalid Agent Number');
    }

    // 2-get amount & validate & convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // 3-get the current balance, validate & convert to number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4- calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    
    if (newBalance < 0){
        alert("Invalid Amount");
        return;
        
    }
    // 5-get the pin & verify

    const cashoutPinInput = document.getElementById("cashout-pin");
    const Pin = cashoutPinInput.value;
    if (Pin === "1234"){
        // 5-1-if true::: show an alert >> set new balance
        alert("Cashout Successful")
        console.log("New Balance: ",newBalance);
        balanceElement.innerText = newBalance;
    } else{
        // 5-1-if false::: show an error alert >> return
        alert('Invalid Pin');
        return;
    }
    
    
});