export function getFormattedDate(date) {
  return `${date.getMonth() + 1}-${date.getUTCDate()}-${date.getFullYear()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
