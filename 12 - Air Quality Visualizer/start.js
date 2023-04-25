(() => {
  // เริ่มเขียนโค้ด
  const KEY = "787dabe5-fd89-4928-ae95-7f569803e541";

  async function getAirQuality({ city, state, country }) {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}
      &state=${state}&country=${country}&key=${KEY}`
    );

    const {
      data: { current },
    } = await response.json();
    const { pollution, weather } = current;

    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidty: weather.hu,
      wind: weather.ws,
    };
  }

  function displayAirQuality({
    city,
    state,
    country,
    aqi,
    temperature,
    humidty,
    wind,
  }) {
    const cityElem = document.querySelector(".city");
    const stateCountryElem = document.querySelector(".state-country");
    const aqiElem = document.querySelector(".aqi > h1");
    const temperatureElem = document.querySelector(".temperature");
    const humidityElem = document.querySelector(".humidity");
    const windElem = document.querySelector(".wind");

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temp: ${temperature}`;
    humidityElem.innerText = `Humidity: ${humidty}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
  }

  function setAirQualityColor(aqi) {
    if (aqi <= 50) {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        "var(--good-aqi-color)"
      );
    } else if (aqi <= 100) {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        "var(--medium-aqi-color)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--current-aqi-color",
        "var(--bad-aqi-color)"
      );
    }
  }

  async function run() {
    const city = "Khon Kaen";
    const state = "Khon Kaen";
    const country = "Thailand";

    const { aqi, temperature, humidty, wind } = await getAirQuality({
      city,
      state,
      country,
    });

    displayAirQuality({
      city,
      state,
      country,
      aqi,
      temperature,
      humidty,
      wind,
    });

    setAirQualityColor(aqi);
  }

  run();
})();
