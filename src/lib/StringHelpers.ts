export function replaceAt(
  index: number,
  what: string,
  replacement: string,
): string {
  return (
    what.substring(0, index) +
    replacement +
    what.substring(index + replacement.length)
  );
}
