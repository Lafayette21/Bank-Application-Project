export function generateAccountNumber(upperLimit: number): number {
  return Math.floor(Math.random() * upperLimit);
}
