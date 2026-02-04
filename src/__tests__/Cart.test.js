import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import { act } from "react";
import Mock_Data from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(Mock_Data) }),
);

it("Should add item to the cart and update the header cart items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    );
  });

  expect(screen.getByText("Recommended (3)")).toBeInTheDocument();
  expect(screen.getAllByRole("button", { name: "Add" }).length).toBe(3);
  const addBtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("cartitem").length).toBe(2);
  const removeBtn = screen.getAllByRole("button", { name: "Remove" });
  fireEvent.click(removeBtn[0]);
  expect(screen.getAllByTestId("cartitem").length).toBe(1);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
});
