/* eslint-disable react/prop-types */
import React from "react";
import ForecastSummary from "./ForecastSummary";

// eslint-disable-next-line react/prop-types
function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
