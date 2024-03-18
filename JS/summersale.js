
function shoppingSelection(priceID,totalPriceID)
{
    const initialPrice = document.getElementById(priceID);
    const initialPriceString = initialPrice.innerText;
    const initialPriceFinal = parseFloat(initialPriceString);
    console.log(initialPriceFinal);
   

    const initialTotalPrice = document.getElementById(totalPriceID);
    const totalPriceString = initialTotalPrice.innerText;
    const startingTotalPrice = parseFloat(totalPriceString);

    const updatedTotalPrice = startingTotalPrice + initialPriceFinal;

    initialTotalPrice.innerText = updatedTotalPrice;

    const purchaseButton = document.getElementById("purchase-btn");
    if (updatedTotalPrice > 0) {
        purchaseButton.removeAttribute('disabled');
    } else {
        purchaseButton.setAttribute('disabled', 'disabled');
    }
    const couponButton = document.getElementById("coupon-btn");
    if (updatedTotalPrice >= 200) {
        couponButton.removeAttribute('disabled');
    } else {
        couponButton.setAttribute('disabled', 'disabled');
    }
}
function couponActivator() {
    const couponText = document.getElementById("coupon-btn").innerText.trim();
    const applyCoupon = document.getElementById("coupon-input");
    const applyButton = document.getElementById("apply-btn"); 
    // Set the value of the input field to the coupon code
    applyCoupon.value = couponText;
    // Add an event listener to detect changes in the input field
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
}

