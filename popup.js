// Format number to 2 decimal places
function formatNumber(num) {
    return Number(num).toFixed(2);
}

// Calculate from total price
function calculateFromTotal() {
    const totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;
    const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;

    if (totalPrice <= 0) {
        alert('Please enter a valid total price');
        return;
    }

    const vatMultiplier = 1 + (vatRate / 100);
    const priceWithoutVat = totalPrice / vatMultiplier;
    const vatAmount = totalPrice - priceWithoutVat;

    document.getElementById('vatAmount1').textContent = formatNumber(vatAmount);
    document.getElementById('priceWithoutVat1').textContent = formatNumber(priceWithoutVat);
}

// Calculate from price without VAT
function calculateFromNet() {
    const priceWithoutVat = parseFloat(document.getElementById('priceWithoutVat').value) || 0;
    const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;

    if (priceWithoutVat <= 0) {
        alert('Please enter a valid price without VAT');
        return;
    }

    const vatAmount = priceWithoutVat * (vatRate / 100);
    const totalPrice = priceWithoutVat + vatAmount;

    document.getElementById('vatAmount2').textContent = formatNumber(vatAmount);
    document.getElementById('totalPrice2').textContent = formatNumber(totalPrice);
}

// Add input event listeners for real-time calculation
document.getElementById('totalPrice').addEventListener('input', calculateFromTotal);
document.getElementById('priceWithoutVat').addEventListener('input', calculateFromNet);
document.getElementById('vatRate').addEventListener('input', () => {
    if (document.getElementById('totalPrice').value) calculateFromTotal();
    if (document.getElementById('priceWithoutVat').value) calculateFromNet();
}); 