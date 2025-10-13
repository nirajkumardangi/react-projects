export function currencyFormatter(currencyType, amount, quantity = 1) {
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyType,
    maximumFractionDigits: 0,
  }).format(amount * quantity);

  return formatted;
}
