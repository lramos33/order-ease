import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  background-color: #ffffff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  elevation: 2;
`;
