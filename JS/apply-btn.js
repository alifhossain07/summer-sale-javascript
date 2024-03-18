const applyCoupon = document.getElementById("coupon-input");
const applyButton = document.getElementById("apply-btn");

applyCoupon.addEventListener('input', function() {
    const enteredCoupon = applyCoupon.value.trim();
    if (enteredCoupon.toUpperCase() === "SELL200") {
        applyButton.removeAttribute('disabled');
    } else {
        applyButton.setAttribute('disabled', 'disabled');
    }
});

// Check initially if the input field matches the coupon code
if (applyCoupon.value.toUpperCase() === "SELL200") {
    applyButton.removeAttribute('disabled');
} else {
    applyButton.setAttribute('disabled', 'disabled');
}
document.getElementById("apply-btn").addEventListener("click", function() {
    const initialPriceElement = document.getElementById("total-price");
    const initialPriceString = initialPriceElement.innerText;
    const initialPrice = parseFloat(initialPriceString);

    // Calculate discount (20% of total price)
    const discountAmount = initialPrice * 0.2;
    const discountAmountElement = document.getElementById("discount-amount");
    discountAmountElement.innerText = discountAmount.toFixed(2); // Display the discounted amount

    // Calculate discounted total price
    const discountedTotalPrice = initialPrice - discountAmount;
    const discountedTotalElement = document.getElementById("discounted-price");
    discountedTotalElement.innerText = discountedTotalPrice.toFixed(2); // Display the discounted total price
});