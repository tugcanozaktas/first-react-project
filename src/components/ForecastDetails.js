/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div>{moment(date).format("ddd Do MMM")}</div>
      <div>Max Temperature: {temperature.max}&deg;C</div>
      <div>Max Temperature: {temperature.min}&deg;C</div>
      <div>Humidity: {humidity}%</div>
      <div>
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
