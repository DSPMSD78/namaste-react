import { fireEvent, render, screen } from "@testing-library/react";
import MOCKDATA from "../mocks/mockResList.json";
import { act } from "react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKDATA);
    },
  });
});

it("Should search Res list for burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
  const input = screen.getByTestId("search-input");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cardsAfter = screen.getAllByTestId("resCard");
  expect(cardsAfter.length).toBe(1);
});

it("Should display only toprated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  const cardsBef = screen.getAllByTestId("resCard");
  expect(cardsBef.length).toBe(9);
  const topratedBtn = screen.getByRole("button", {
    name: "Top listed Restaurants",
  });
  fireEvent.click(topratedBtn);
  const cardsAf = screen.getAllByTestId("resCard");
  expect(cardsAf.length).toBe(3);
});
