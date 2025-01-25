import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopArea from "../components/TopArea";

jest.mock("recharts", () => ({
  ...jest.requireActual("recharts"),
  PieChart: () => <svg data-testid="pie-chart" /> 
}));

describe("TopArea Component", () => {
  it("renders without crashing", () => {
    render(<TopArea />);
  });

  it("renders correct number of cards", () => {
    render(<TopArea />);
    const cards = screen.getAllByText(/Total Movies|Total Cast Members|Total Countries/i);
    expect(cards.length).toBe(3);
  });

  it("renders a pie chart for each card", () => {
    render(<TopArea />);
    const pieCharts = screen.getAllByTestId("pie-chart"); 
    expect(pieCharts.length).toBe(3); 
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<TopArea />);
    expect(asFragment()).toMatchSnapshot();
  });
});
