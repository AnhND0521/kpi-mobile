const getWeekdayShort = (weekday) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayNames[weekday];
}

const addOneDayToDate = (date) => {
  date.setDate(date.getDate() + 1)
  return date
}

export {
  getWeekdayShort,
  addOneDayToDate
}