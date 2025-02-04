# Restaurant Billing System

## Overview
The **Restaurant Billing System** is a simple web-based application that helps users calculate their total bill, including tips and tax, and determines the amount each person needs to pay.

## Features
- **Total Bill Calculation**: Users enter the total bill amount.
- **Automatic Tip Calculation**: The tip percentage is auto-calculated based on the bill amount.
- **Tax Calculation**: A fixed tax rate (5%) is applied.
- **People Sharing the Bill**: Users can adjust the number of people sharing the bill.
- **Validation**: The total bill must be between $1000 and $5000. If invalid, an error message is displayed.
- **Real-time Updates**:
  - If the bill is **$1000**, the tip is automatically set to **1%**.
  - If the bill is **$1500**, the tip is set to **1.5%**, and so on.
  - The number of people is auto-rounded for bill amounts above $1000.

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling and layout.
- **JavaScript**: Core functionality, validation, and calculations.

## How to Use
1. **Enter the total bill amount** (must be between $1000 and $5000).
2. **The tip and number of people auto-adjust** based on the bill.
3. **Manually adjust** the number of people if needed.
4. Click the **"Calculate"** button to see the breakdown:
   - Total Bill
   - Tip Amount
   - Tax (5%)
   - Total Per Person

## Example Calculation
If a user enters:
- **Total Bill**: $2000  
- **Tip**: 2% ($40)  
- **Tax**: 5% ($100)  
- **People**: 2 (Auto-adjusted)  
- **Total Per Person**: **$1070.00**

## Future Enhancements
- Add a **currency selector** (USD, EUR, etc.).
- Implement **discount codes** for special offers.
- Improve **UI/UX** for better user experience.

## Screenshot
![Restaurant Billing System](screenshot.png)

## Author
Developed by **[Your Name]** 🚀
