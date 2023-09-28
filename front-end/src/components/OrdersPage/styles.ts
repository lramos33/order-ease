import styled from "styled-components";

import { theme } from "../../styles/theme";

interface IOrderButtonProps {
  selected: boolean;
}

interface IOrdersContainerProps {
  hasOrders: boolean;
}

export const OrdersPageContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
`;

export const OrdersContainer = styled.div<IOrdersContainerProps>`
  gap: 16px;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.hasOrders ? "65%" : "100%")};
`;

export const OrderContainer = styled.button<IOrderButtonProps>`
  /* width: 100%; */
  /* border: none; */
  display: flex;
  padding: 16px 24px;
  border-radius: 16px;
  align-items: stretch;
  justify-content: space-between;
  /* position: relative; */
  /* overflow: hidden; */
  background-color: ${theme.neutral_100};
  border: ${(props) => (props.selected ? `${theme.red_200} solid 1px` : `${theme.neutral_150} solid 1px`)};
  box-shadow: ${(props) => (props.selected ? "2px 2px 6px rgba(215, 48, 53, 0.20)" : "2px 2px 6px rgba(0, 0, 0, 0.025)")};

  &:hover {
    opacity: 0.8;
  }

  .first-info {
    gap: 4px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: flex-start;
  }

  .order-id {
    border: none;
    font-size: 24px;
    font-weight: 600;
    background-color: ${theme.neutral_100};
  }

  .order-table {
    font-size: 16px;
    font-weight: 500;
  }

  .order-itens {
    font-size: 14px;
    color: ${theme.neutral_300};
  }

  .second-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .order-time {
    font-size: 20px;
    align-self: flex-end;
    color: ${theme.neutral_400};
  }

  .order-price {
    font-size: 24px;
    font-weight: 600;
  }
`;
