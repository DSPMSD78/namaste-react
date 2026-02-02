import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import MockData from "../mocks/resCardMockdata.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MockData} />);

  const name = screen.getByText("Pizza Paradise");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label", () => {
  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardWithPromotedLabel resData={MockData} />);

  const labelName = screen.getByText("Promoted");

  expect(labelName).toBeInTheDocument();
});
