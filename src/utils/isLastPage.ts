export const isLastPage = (
  offset: number,
  count: number,
  total: number,
  limit: number = 6,
): boolean => {
  if (count < limit) {
    return true;
  }

  return offset + count >= total;
};
