export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
