import styled, { keyframes } from "styled-components";

import { theme } from "../../styles/theme";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const SpinnerElement = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${theme.neutral_250};
  border-top-color: ${theme.neutral_100};
  animation: ${spin} 0.8s ease-in-out infinite;
`;
