export default function range(start, end) {
  const itemsAmount = Math.abs(start - end);
  const range = [...Array(itemsAmount).keys()];

  if (start < end) {
    return range.map(item => item + start);
  }

  return range.map((_, index) => start - index);
}
