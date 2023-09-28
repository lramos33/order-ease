import styled from "styled-components/native";

interface TextProps {
  size?: string;
  color?: string;
  opacity?: number;
  weight?: "400" | "600" | "700";
}

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color || "#333"};
  opacity: ${({ opacity }) => opacity || 1};
  font-size: ${({ size }) => (size ? size : "16px")};
  font-family: ${({ weight }) =>
    weight ? `GeneralSans-${weight}` : "GeneralSans-400"};
`;
