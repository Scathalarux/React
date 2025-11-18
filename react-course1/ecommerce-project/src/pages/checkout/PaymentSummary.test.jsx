import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaymentSummary } from "./PaymentSummary";
import { MemoryRouter, useLocation } from "react-router";
import axios from "axios";
import userEvent from "@testing-library/user-event";

vi.mock('axios');

describe("PaymentSummary component", () => {
  let loadCartProducts;
  let paymentSummary;
  let user;

  beforeEach(() => {
    loadCartProducts = vi.fn();

    paymentSummary = {
      totalItems: 3,
      productCostCents: 6285,
      shippingCostCents: 0,
      totalCostBeforeTaxCents: 6285,
      taxCents: 629,
      totalCostCents: 6914,
    };

    user = userEvent.setup();
  });

  it("displays the correct details", () => {
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCartProducts={loadCartProducts}
        />
      </MemoryRouter>
    );

    // Number of items
    expect(
      screen.getByText(`Items (${paymentSummary.totalItems}):`)
    ).toBeInTheDocument();

    //Items cost
    /*expect(
      within(screen.getByTestId("payment-summary-product-cost")).getByText(
        "$62.85"
      )
    ).toBeInTheDocument();*/
    expect(
      screen.getByTestId("payment-summary-product-cost")
    ).toHaveTextContent("$62.85");

    //Shipping and handling cost
    /*expect(
        within(screen.getByTestId("payment-summary-shipping-cost")).getByText(
            "$0.00"
        )
    ).toBeInTheDocument();*/
    expect(
      screen.getByTestId("payment-summary-shipping-cost")
    ).toHaveTextContent("$0.00");

    //total before tax
    /*expect(
        within(screen.getByTestId("payment-summary-total-before-tax")).getByText(
            "$62.85"
        )
    ).toBeInTheDocument();*/
    expect(
      screen.getByTestId("payment-summary-total-before-tax")
    ).toHaveTextContent("$62.85");

    //Tax cost
    /*expect(
        within(screen.getByTestId("payment-summary-tax-cost")).getByText(
            "$6.29"
        )
    ).toBeInTheDocument();*/
    expect(screen.getByTestId("payment-summary-tax-cost")).toHaveTextContent(
      "$6.29"
    );

    //total order cost
    /*expect(
        within(screen.getByTestId("payment-summary-total-cost")).getByText(
            "$69.14"
        )
    ).toBeInTheDocument();*/
    expect(screen.getByTestId("payment-summary-total-cost")).toHaveTextContent(
      "$69.14"
    );
  });

  it("creates a order correctly", async () => {

    function Location(){
        const location = useLocation();
        return <div data-testid='url-path'>{location.pathname}</div>
    }

    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCartProducts={loadCartProducts}
        />
        <Location />
      </MemoryRouter>
    );

    const createOrderButton = screen.getByTestId('create-order-button');

    await user.click(createOrderButton);

    expect(axios.post).toHaveBeenCalled('/api/orders');
    expect(loadCartProducts).toHaveBeenCalled();

    expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');

  });
});
