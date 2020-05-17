export function splitIntoPages<T>(array: T[], pageSize: number) {
  let pages: T[][] = [];
  for (let i = 0; i < array.length; i += pageSize) {
    pages.push(array.slice(i, i + pageSize));
  }
  return pages;
}
