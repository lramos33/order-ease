import styled from "styled-components/native";

export const Product = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background: rgba(204, 204, 204, 0.3);
`;

export const AddToCardButton = styled.TouchableOpacity`
  right: 0;
  bottom: 0;
  position: absolute;
`;
