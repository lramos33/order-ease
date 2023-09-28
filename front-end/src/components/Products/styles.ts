import styled from "styled-components";

import { theme } from "../../styles/theme";

interface IProductButtonProps {
  selected: boolean;
}

export const ProductGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
`;

export const ProductCard = styled.button<IProductButtonProps>`
  gap: 16px;
  display: flex;
  padding: 16px;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
  background-color: ${theme.neutral_100};
  border: ${(props) => (props.selected ? `${theme.red_200} solid 1px` : `${theme.neutral_150} solid 1px`)};
  box-shadow: ${(props) => (props.selected ? "2px 2px 6px rgba(215, 48, 53, 0.20)" : "2px 2px 6px rgba(0, 0, 0, 0.025)")};

  &:hover {
    opacity: 0.9;
  }

  .product-image {
    border-radius: 16px;
  }

  .product-name {
    font-size: 20px;
    font-weight: 500;
  }

  .product-price {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: ${theme.red_200};
  }

  .product-ingredients {
    font-size: 14px;
    color: ${theme.neutral_300};
  }

  .price-ingredient-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .image-name-container {
    gap: 8px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
`;
