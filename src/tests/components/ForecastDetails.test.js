import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    humidity: 25,
    wind: {
      speed: 25,
      direction: "ne",
    },
    temperature: {
      max: 22,
      min: 12,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment).toMatchSnapshot();
  });
});
