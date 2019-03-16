export function isReversed(str: String): boolean {
  const c = (str + "").charCodeAt(0);
  return c === 0x24 || c === 0x5f;
}

console.log(isReversed('$why'))