export const isLastPage = (
  offset: number,
  count: number,
  total: number,
): boolean => {
  return offset + count >= total;
};
