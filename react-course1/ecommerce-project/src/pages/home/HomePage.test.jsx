import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router";
import { HomePage } from "./HomePage";
import userEvent from "@testing-library/user-event";

vi.mock("axios");

describe("HomePage component", () => {
  let loadCartProducts;
  let user;

  beforeEach(() => {
    loadCartProducts = vi.fn();

    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === "/api/products") {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87,
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"],
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127,
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"],
            },
          ],
        };
      }
    });

    user = userEvent.setup();
  });

  it("displays the products correctly", async () => {
    render(
      <MemoryRouter>
        <HomePage cartProducts={[]} loadCartProducts={loadCartProducts} />
      </MemoryRouter>
    );

    //in these case we use 'find' because we have to wait for 'loadCartProducts'
    const productContainers = await screen.findAllByTestId("product-container");

    //correct number of items
    expect(productContainers.length).toBe(2);

    //check if it's correct the first product's name
    expect(
      within(productContainers[0]).getByText(
        "Black and Gray Athletic Cotton Socks - 6 Pairs"
      )
    ).toBeInTheDocument();

    //check if it's correct the second product's name
    expect(
      within(productContainers[1]).getByText("Intermediate Size Basketball")
    ).toBeInTheDocument();
  });

  it("adds a product to the cart", async () => {
    render(
      <MemoryRouter>
        <HomePage cartProducts={[]} loadCartProducts={loadCartProducts} />
      </MemoryRouter>
    );

    const productContainers = await screen.findAllByTestId("product-container");

    const addCartButton1 = within(productContainers[0]).getByTestId(
      "add-to-cart-button"
    );
    const quantityProductSelector1 = within(productContainers[0]).getByTestId(
      "product-quantity-selector"
    );
    await user.selectOptions(quantityProductSelector1, "2");
    await user.click(addCartButton1);

    const addCartButton2 = within(productContainers[1]).getByTestId(
      "add-to-cart-button"
    );
    const quantityProductSelector2 = within(productContainers[1]).getByTestId(
      "product-quantity-selector"
    );
    await user.selectOptions(quantityProductSelector2, "3");
    await user.click(addCartButton2);

    expect(axios.post).toHaveBeenNthCalledWith(1, "/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    });

    expect(axios.post).toHaveBeenNthCalledWith(2, "/api/cart-items", {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 3,
    });

    expect(loadCartProducts).toHaveBeenCalledTimes(2);
  });
});
