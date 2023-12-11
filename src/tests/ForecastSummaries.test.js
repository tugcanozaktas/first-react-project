import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1525046400000,
      description: "Stub description 1",
      icon: "800",
      temperature: {
        max: 22,
        min: 12,
      },
      onSelect: () => {},
    },
    {
      date: 1525132800000,
      description: "Stub description2",
      icon: "800",
      temperature: {
        max: 24,
        min: 13,
      },
      onSelect: () => {},
    },
  ];

  it("Renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders correct amount of forecastSummary", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />,
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
