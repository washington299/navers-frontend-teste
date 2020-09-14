export function calculate_age(date: string) {
  const born_year = new Date(date).getUTCFullYear();
  const current_year = new Date(Date.now()).getUTCFullYear();
  const result = current_year - born_year;

  return result;
}

export function convert_date_to_brazilian_format(date: string) {
  const year = new Date(date).getUTCFullYear();
  const month = new Date(date).getUTCMonth();
  const day = new Date(date).getUTCDate();

  const result = new Date(year, month, day).toLocaleDateString('pt-BR');
  return result;
}

export function convert_date_format(date: string) {
  const year = new Date(date).getUTCFullYear().toString();
  const month = new Date(date).getUTCMonth() + 1;
  const day = new Date(date).getUTCDate();

  const monthStr = month.toString();
  const dayStr = day.toString();

  const result = `${year}-${monthStr.length < 2 ? `0${monthStr}` : `${monthStr}`}-${dayStr.length < 2 ? `0${dayStr}` : `${dayStr}`}`;
  return result;
}
