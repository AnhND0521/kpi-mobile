const getWeekdayShort = (weekday) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayNames[weekday];
}

const addOneDayToDate = (date) => {
  date.setDate(date.getDate() + 1)
  return date
}

const parseDate = (date) => {
  const dmy = date.split('/');
  return Date.parse(`${dmy[1]}/${dmy[0]}/${dmy[2]}`);
}

const getMonthName = (month) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "December", "October", "November", "December"];
  return months[month];
}

export {
  getWeekdayShort,
  addOneDayToDate,
  getMonthName,
  parseDate,
}