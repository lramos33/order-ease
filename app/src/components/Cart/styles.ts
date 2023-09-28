import styled from "styled-components/native";

export const Item = styled.View`
  padding: 8px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
`;

export const ProductDetails = styled.View``;

export const Summary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalContainer = styled.View`
  margin-right: 32px;
  flex: 1;
`;
