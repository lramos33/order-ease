import styled from "styled-components/native";

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin: 24px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 32px 24px 0px 24px;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Ingredient = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  border: rgba(204, 204, 204, 0.3) solid 1px;
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #ffffff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View``;
