const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

export function formatCurrency(amount: number): string {
    return CURRENCY_FORMATTER.format(amount);
}