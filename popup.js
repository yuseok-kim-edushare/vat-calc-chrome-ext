let currentLanguage = 'ko';

function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });

    // Update the language toggle button text
    const toggleButton = document.getElementById('languageToggle');
    toggleButton.textContent = translations[lang][lang === 'ko' ? 'switchToEnglish' : 'switchToKorean'];
}

// Add event listener for language toggle
document.getElementById('languageToggle').addEventListener('click', () => {
    updateLanguage(currentLanguage === 'ko' ? 'en' : 'ko');
});

// Format number to 2 decimal places
function formatNumber(num) {
    return Number(num).toFixed(2);
}

// Calculate from total price
function calculateFromTotal() {
    let totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;
    const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;

    // Set negative values to 0
    if (totalPrice < 0) {
        totalPrice = 0;
        document.getElementById('totalPrice').value = 0;
    }

    const vatAmount = totalPrice - (totalPrice / (1 + vatRate / 100));
    const priceWithoutVat = totalPrice - vatAmount;

    document.getElementById('vatAmount1').textContent = formatNumber(vatAmount);
    document.getElementById('priceWithoutVat1').textContent = formatNumber(priceWithoutVat);
}

// Calculate from price without VAT
function calculateFromNet() {
    let priceWithoutVat = parseFloat(document.getElementById('priceWithoutVat').value) || 0;
    const vatRate = parseFloat(document.getElementById('vatRate').value) || 0;

    // Set negative values to 0
    if (priceWithoutVat < 0) {
        priceWithoutVat = 0;
        document.getElementById('priceWithoutVat').value = 0;
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

// Initialize the page with Korean language
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('ko');
}); 