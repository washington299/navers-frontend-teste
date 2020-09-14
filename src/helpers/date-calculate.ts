export function calculate_age(date: string) {
  const born_year = new Date(date).getUTCFullYear();
  const current_year = new Date(Date.now()).getUTCFullYear();
  const result = current_year - born_year;

  return result;
}

export function calculate_admission_date(date: string) {
  const joined_year = new Date(date).getUTCFullYear();
  const joined_month = new Date(date).getMonth();
  const joined_day = new Date(date).getDate();
  const result = `${joined_day + 1}/${joined_month + 1}/${joined_year}`;

  return result;
}

export function convert_date_to_brazilian_format(date: string) {
  const year = new Date(date).getUTCFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const result = `${day + 1}/${month + 1}/${year}`;

  return result;
}

export function convert_date_format(date: string) {
  const year = new Date(date).getUTCFullYear().toString();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate() + 1;

  const monthStr = month.toString();
  const dayStr = day.toString();

  const result = `${year}-${monthStr.length < 2 ? `0${monthStr}` : `${monthStr}`}-${dayStr.length < 2 ? `0${dayStr}` : `${dayStr}`}`;
  return result;
}
