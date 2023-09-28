import styled, { keyframes } from "styled-components";

import { theme } from "../../styles/theme";

const SkeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: ${theme.neutral_200};
  animation: ${SkeletonAnimation} 1s ease-in-out infinite;
`;
