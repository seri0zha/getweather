
const GetWeatherImageId = (id: number): string => {
  if (id >= 200 && id <300) {
    return '11';
  } else if (id >= 300 && id < 400) {
    return '09';
  } else if (id >= 500 && id < 600) {
    if (id === 511) return '13';
    else if (id === 520 || id === 521 || id === 522 || id === 531) return '09';
    else return '10';
  } else if (id >= 600 && id < 700) {
    return '13';
  } else if (id >= 700 && id < 800) {
    return '50';
  } else if (id >= 800) {
    if (id === 800) return '01';
    else if (id === 801) return '02';
    else if (id === 802) return '03';
    else if (id === 803 || id === 804) return '04';
  }
  return '02';
}

export default GetWeatherImageId;
