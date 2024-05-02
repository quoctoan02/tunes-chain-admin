export function toFixedNumber(numb: number, digits?: number) {
  if (digits === undefined) {
    digits = 0;
  }
  const multiplicator = Math.pow(10, digits);

  numb = parseFloat((numb * multiplicator).toFixed(11));
  return Math.round(numb) / multiplicator;
}

export function truncateAddress(address: string, numberic = 4) {
  return (
    address?.toLowerCase()?.slice(0, numberic > 2 ? numberic : 2) +
    "..." +
    address?.toLowerCase()?.slice(-numberic)
  );
}
