/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  setErrorMessage,
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage("");
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city in UK, try again.");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("There might be a server error, try again later...");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
