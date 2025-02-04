document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.getElementById("bill");
    const tipInput = document.getElementById("tip");
    const peopleInput = document.getElementById("quan");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const calculateBtn = document.getElementById("submit");

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary");
    document.body.appendChild(summaryDiv);

    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";
    errorMessage.style.textAlign = "center";
    errorMessage.style.fontWeight = "bold";
    document.body.insertBefore(errorMessage, summaryDiv);

    billInput.addEventListener("input", function () {
        let bill = parseFloat(billInput.value) || 0;

        if (bill < 1000 || bill > 5000) {
            errorMessage.textContent = "Total bill must be between $1000 and $5000.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }

        tipInput.value = (bill / 1000).toFixed(1);

        peopleInput.value = Math.max(1, Math.round(bill / 1000));
    });

    decreaseBtn.addEventListener("click", function () {
        let people = parseInt(peopleInput.value) || 1;
        if (people > 1) {
            peopleInput.value = people - 1;
        }
    });

    increaseBtn.addEventListener("click", function () {
        let people = parseInt(peopleInput.value) || 1;
        peopleInput.value = people + 1;
    });

    calculateBtn.addEventListener("click", function () {
        let bill = parseFloat(billInput.value) || 0;
        let tipPercent = parseFloat(tipInput.value) || 0;
        let people = parseInt(peopleInput.value) || 1;
        let taxRate = 5;

        if (bill < 1000 || bill > 5000) {
            errorMessage.textContent = "Total bill must be between $1000 and $5000.";
            errorMessage.style.display = "block";
            return;
        } else {
            errorMessage.style.display = "none";
        }

        let tipAmount = (bill * tipPercent) / 100;
        let taxAmount = (bill * taxRate) / 100;
        let totalBill = bill + tipAmount + taxAmount;
        let perPerson = totalBill / people;

        summaryDiv.innerHTML = `
            <h2>Summary</h2>
            <p><strong>Total Bill:</strong> $${bill.toFixed(2)}</p>
            <p><strong>Tip Amount:</strong> $${tipAmount.toFixed(2)}</p>
            <p><strong>Tax (${taxRate}%):</strong> $${taxAmount.toFixed(2)}</p>
            <hr>
            <p><strong>Total Per Person:</strong> $${perPerson.toFixed(2)}</p>
        `;
    });
});
