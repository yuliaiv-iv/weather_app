const key = process.env.REACT_APP_WEATHER_ACCESS_KEY;

export const url = (lat, lng) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&lang=ru&appid=${key}`
}

export const upperLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

export const convertDate = (date) => {
  const milliseconds = date * 1000;
  const dateObject = new Date(milliseconds);
  return upperLetter(dateObject.toLocaleString("ru", { weekday: "long" }))
}

export const setNumber = (num) => {
  return num.toFixed();
}

export const imageUrl = (image) => {
  return `http://openweathermap.org/img/wn/${image}.png`
}