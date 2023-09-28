import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ProductsContainerProps {
  lastIndex: boolean;
}

export const OrderDetailsContainer = styled.div`
  gap: 16px;
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const ProductsDetailsContainer = styled.div`
  padding: 16px 24px;
  border-radius: 16px;
  background-color: ${theme.neutral_100};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.025);
`;

export const BasicDetailsContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;

  .title {
    font-size: 18px;
    text-align: end;
    font-weight: 500;
    text-align: start;
    color: ${theme.neutral_300};
  }

  .subtitle {
    text-align: end;
    margin-top: 4px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductContainer = styled.div<ProductsContainerProps>`
  gap: 16px;
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: ${(props) => (props.lastIndex ? "none" : `${theme.neutral_175} solid 1px`)};

  .product-image {
    border-radius: 16px;
  }

  .product-name {
    font-size: 18px;
    font-weight: 600;
  }

  .product-description {
    gap: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .product-note {
      font-size: 14px;
      color: ${theme.neutral_300};
    }

    .price-quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .price-details {
      display: flex;
      justify-content: space-between;
    }

    .product-quantity {
      color: ${theme.neutral_300};
    }

    .total-price {
      font-weight: 600;
    }
  }
`;

export const PriceDetailsContainer = styled.div`
  gap: 16px;
  display: flex;
  padding: 16px 24px;
  border-radius: 16px;
  flex-direction: column;
  background-color: ${theme.neutral_100};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.025);

  .price-details,
  .tax-details,
  .total-details,
  .payment-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tax-details {
    padding-bottom: 16px;
    border-bottom: ${theme.neutral_300} dashed 1px;
  }

  .tax-label,
  .price-label {
    color: ${theme.neutral_300};
  }

  .tax-value,
  .total-label,
  .price-value,
  .total-value,
  .payment-label,
  .payment-method {
    font-weight: 600;
    font-size: 18px;
  }

  .total-value {
    font-size: 22px;
  }

  .payment-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  button {
    border: none;
    padding: 12px;
    font-size: 18px;
    border-radius: 16px;
    color: ${theme.neutral_100};
    background-color: ${theme.red_200};

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      /* background-color: ${theme.red_100}; */
    }
  }
`;
