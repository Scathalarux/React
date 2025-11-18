import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Product } from "./Product";

vi.mock("axios");

describe("Product", () => {
  let product;
  let loadCartProducts;

  beforeEach(() => {
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };
    loadCartProducts = vi.fn();
  });

  it("displays the product details correctly", () => {
    render(<Product product={product} loadCartProducts={loadCartProducts} />);

    //Name
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();
    //Price
    expect(screen.getByText("$10.90")).toBeInTheDocument();
    //Product image
    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );
    //Rating stars image
    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      `/images/ratings/rating-${product.rating.stars * 10}.png`
    );
    //Rating count
    expect(screen.getByText(product.rating.count)).toBeInTheDocument();
  });

  //User interactions
  it("adds a product to the cart", async () => {
    render(<Product product={product} loadCartProducts={loadCartProducts} />);

    //Simulate the user
    const user = userEvent.setup();

    //Choose the element to interact with
    const addToCartButton = screen.getByTestId("add-to-cart-button");

    //Execute the user action
    await user.click(addToCartButton);

    // Addp product
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });

    //Reload data
    expect(loadCartProducts).toHaveBeenCalled();
  });
});
