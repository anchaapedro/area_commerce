export const currencyFormat = (currency, countryCode = "pt-MZ") =>
  new Intl.NumberFormat(countryCode, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(currency);

export const formatString = (string, length = 30) => {
  return string.length > 30
    ? string.substring(0, length).concat("...")
    : string;
};
