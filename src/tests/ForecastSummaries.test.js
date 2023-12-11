import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const onSelect = () => {};
  const validProps = [
    {
      date: 1525046400000,
      description: "Stub description 1",
      icon: "800",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 1525132800000,
      description: "Stub description2",
      icon: "800",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it("Renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries forecasts={validProps} onForecastSelect={onSelect} />,
    );
    expect(asFragment).toMatchSnapshot();
  });
  it("renders correct amount of forecastSummary", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} onForecastSelect={onSelect} />,
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
