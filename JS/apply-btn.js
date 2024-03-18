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
