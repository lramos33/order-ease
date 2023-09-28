import styled from "styled-components";

import { theme } from "../../styles/theme";

interface OptionContainerProps {
  selected: boolean;
}

export const SidebarContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  min-height: 100vh;
  z-index: 2;
  gap: 32px;
  background: ${theme.neutral_100};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.025);
`;

export const OptionContainer = styled.button<OptionContainerProps>`
  gap: 8px;
  width: 72px;
  height: 72px;
  border: none;
  display: flex;
  border-radius: 16px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ selected }) => (selected ? theme.red_200 : theme.neutral_300)};
  background-color: ${({ selected }) => (selected ? theme.red_100 : theme.neutral_100)};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ selected }) => (selected ? theme.red_100 : theme.neutral_150)};
  }

  p {
    font-size: 14px;
  }
`;

export const LogoContainer = styled.div`
  width: 72px;
  height: 72px;
  padding: 8px;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;

  .icon {
    padding-bottom: 4px;
    border-bottom: ${theme.red_200} solid 2px;
  }
`;
