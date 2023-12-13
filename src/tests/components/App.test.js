import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("App", () => {
  const onSelect = () => {};
  const validProps = [
    {
      date: 1702490400000,
      temperature: { max: 5, min: 4 },
      wind: { speed: 3, direction: "n" },
      humidity: 77,
      description: "Clouds",
      icon: 803,
    },
    {
      date: 1702512000000,
      temperature: { max: 4, min: 3 },
      wind: { speed: 2, direction: "sse" },
      humidity: 81,
      description: "Clouds",
      icon: 803,
    },
    {
      date: 1702598400000,
      temperature: { max: 7, min: 6 },
      wind: { speed: 3, direction: "w" },
      humidity: 82,
      description: "Clouds",
      icon: 804,
    },
    {
      date: 1702684800000,
      temperature: { max: 8, min: 7 },
      wind: { speed: 3, direction: "ssw" },
      humidity: 97,
      description: "Clouds",
      icon: 804,
    },
    {
      date: 1702771200000,
      temperature: { max: 11, min: 10 },
      wind: { speed: 6, direction: "sw" },
      humidity: 85,
      description: "Clouds",
      icon: 804,
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries forecasts={validProps} onForecastSelect={onSelect} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
