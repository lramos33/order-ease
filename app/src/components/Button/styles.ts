import styled from "styled-components/native";

interface IProps {
  backgroundColor: string;
}

export const Container = styled.TouchableOpacity<IProps>`
  background-color: ${({ disabled, backgroundColor }) => (disabled ? "#999999" : backgroundColor)};
  border-radius: 48px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
`;
