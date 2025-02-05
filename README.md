# VAT Calculator Chrome Extension

A simple and efficient Chrome extension that helps you calculate VAT (Value Added Tax) amounts and prices in real-time. Perfect for quick tax calculations while browsing.

## Features

- Calculate VAT amount and price without VAT from a total price
- Calculate VAT amount and total price from a price without VAT
- Adjustable VAT rate (default 10%)
- Real-time calculations as you type
- Clean and user-friendly interface
- Supports decimal precision up to 2 places

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## How to Use

1. Click the VAT Calculator icon in your Chrome toolbar
2. Set your desired VAT rate (%) using the input field
3. Choose your calculation method:
   - Calculate from Total Price: Enter the total amount to see the VAT amount and price without VAT
   - Calculate from Price without VAT: Enter the net price to see the VAT amount and total price

## Technical Details

- Built with vanilla JavaScript
- Uses Chrome Extension Manifest V3
- Lightweight and performant
- No external dependencies

## File Structure 
```
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── popup.html
├── popup.js
├── styles.css
└── manifest.json
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.