const bill = document.querySelector("#yourBill");
const tipInput = document.querySelector("#tipInput");
const tipValue = document.querySelector("#tipValue");
const totalWithTip = document.querySelector("#totalWithTip");
const tipPercent = document.querySelector("#tipPercent");
const split = document.querySelector("#splitInput");
const splitValue = document.querySelector("#splitValue");
const billEach = document.querySelector("#billEach");
const tipEach = document.querySelector("#tipEach");



bill.addEventListener("input", () => {
    console.log(bill.value);
});

tipInput.addEventListener("input", () => {
    if (bill.value === ""){
        alert("please fill in your bill amount")
    } else {
        
        tipPercent.innerHTML = tipInput.value + "%";
        tipValue.innerHTML = "£" + (Number(bill.value * tipInput.value/100).toFixed(2));
        let finalAmount = (parseInt(bill.value) + parseFloat(bill.value * tipInput.value/100));
        totalWithTip.innerHTML = "£" + finalAmount;
    }
    
});

split.addEventListener("input", () => {
    
    if (split.value === "1") {
        splitValue.innerHTML = split.value + " person";
    } else {
        splitValue.innerHTML = split.value + " people";
    }
    billEach.innerHTML = "£" + (bill.value / split.value).toFixed(2);
    tipEach.innerHTML = "£" + (((bill.value * tipInput.value/100) / split.value).toFixed(2));
});

