import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px 0;
  background-color: ${theme.neutral_100};
  border-radius: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.025);

  p {
    border: none;
    font-size: 20px;
    color: ${theme.neutral_300};
  }
`;
