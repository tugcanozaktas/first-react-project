import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Dummy desc",
    icon: 800,
    temperature: {
      min: 12,
      max: 22,
    },
    onSelect: () => {},
  };
  it("renders the correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />,
    );
    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-summary__date");
    expect(getByText("Dummy desc")).toHaveClass(
      "forecast-summary__description",
    );
    expect(getByTestId("forecast-icon")).toHaveClass("wi wi-day-sunny");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
