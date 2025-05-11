const Weather = () => {
  const tem = 26;
  if (tem < 15) {
    return <p>it's cold outside</p>;
  } else if (tem >= 15 && tem <= 25) {
    return <p>it's nice outside</p>;
  } else {
    return <p> it's hot outside</p>;
  }
};

export default Weather;
