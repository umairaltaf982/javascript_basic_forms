function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");
    let category = document.getElementById("category");

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

        if (bmi < 18.5) {
            category.innerHTML = "Underweight";
            category.style.color = "blue";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category.innerHTML = "Normal weight";
            category.style.color = "green";
        } else if (bmi >= 25 && bmi < 29.9) {
            category.innerHTML = "Overweight";
            category.style.color = "orange";
        } else {
            category.innerHTML = "Obese";
            category.style.color = "red";
        }
    } else {
        result.innerHTML = "Please enter valid values";
        category.innerHTML = "";
    }
}
