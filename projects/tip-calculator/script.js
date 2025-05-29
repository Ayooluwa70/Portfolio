document.getElementById("calculate").addEventListener("click", function () {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);
  
    if (isNaN(bill) || isNaN(tipPercent)) {
      document.getElementById("result").innerText = "Please enter valid numbers.";
      return;
    }
  
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
  
    document.getElementById("result").innerText = `Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)};`
  });