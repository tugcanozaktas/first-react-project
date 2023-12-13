/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import WeatherIcon from "react-icons-weather";
import moment from "moment";

function ForecastSummary(props) {
  const { date, temperature, description, onSelect } = props;
  // eslint-disable-next-line react/destructuring-assignment
  const icon = String(props.icon);
  return (
    <div className="forecast-sumamry" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon">
        <WeatherIcon data-testid="forecast-icon" name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  icon: PropTypes.number.isRequired,
};
