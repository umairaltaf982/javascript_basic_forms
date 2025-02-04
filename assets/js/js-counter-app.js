const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let counter = 0;

increaseBtn.addEventListener("click", function () {
    counter++;
    counterDisplay.textContent = counter;
});

decreaseBtn.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        counterDisplay.textContent = counter;
    }
});
