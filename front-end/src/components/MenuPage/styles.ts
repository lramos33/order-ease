import styled from "styled-components";

import { theme } from "../../styles/theme";

export const MenuPageContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
`;

export const ProductDetails = styled.div`
  gap: 16px;
  width: 35%;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  border-radius: 16px;
  height: fit-content;
  background-color: ${theme.neutral_100};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.025);

  .product-name {
    font-size: 20px;
    font-weight: 500;
  }

  .product-description {
    font-size: 14px;
    color: ${theme.neutral_300};
  }
`;

export const ProductsContainer = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  width: 65%;
`;
