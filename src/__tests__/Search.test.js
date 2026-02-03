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

it("Should render the Body component with search", async () => {
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
