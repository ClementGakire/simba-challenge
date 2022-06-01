export const currencies = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "USD" },

  { _id: "5b21ca3eeb7f6fbccd471814", name: "EUR" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "NGN" },
];

export function getCurrencies() {
  return currencies.filter((g) => g);
}
