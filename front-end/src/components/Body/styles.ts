import styled from "styled-components";

import { theme } from "../../styles/theme";

export const BodyContainer = styled.main`
  width: 100%;
  padding: 32px;
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: ${theme.neutral_150};
`;

export const BodyContent = styled.div`
  width: 100%;
  max-width: 1440px;
`;
