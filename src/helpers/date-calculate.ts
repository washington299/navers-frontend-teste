export function calculate_age(date: string) {
  const born_year = new Date(date).getUTCFullYear();
  const current_year = new Date(Date.now()).getUTCFullYear();
  const result = current_year - born_year;

  return result;
}

export function calculate_admission_date(date: string) {
  const joined_year = new Date(date).getUTCFullYear();
  const joined_month = new Date(date).getMonth();
  const joined_day = new Date(date).getDay();
  const result = `${joined_day}/${joined_month}/${joined_year}`;

  return result;
}

export function convert_date_to_brazilian_format(date: string) {
  const born_year = new Date(date).getUTCFullYear();
  const born_month = new Date(date).getMonth();
  const born_day = new Date(date).getDate();
  const result = `${born_day + 1}/${born_month + 1}/${born_year}`;

  return result;
}
