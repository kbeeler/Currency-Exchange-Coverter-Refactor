export function generateOptions(options) {
    return Object.entries(options).map(([currenyCode, currencyName]) => 
      `<option value="${currenyCode}"> ${currenyCode} - ${currencyName} </options>`
    ).join('');
  }

  export function formatCurreny(amount, currency) {
    return Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: currency
    }).format(amount);
  }