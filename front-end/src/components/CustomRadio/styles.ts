import styled from "styled-components";

import { theme } from "../../styles/theme";

interface IRadioButtonProps {
  checked: boolean;
  fullWidth?: boolean;
}

export const RadioGroup = styled.div`
  gap: 8px;
  display: flex;
`;

export const RadioButton = styled.label<IRadioButtonProps>`
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: ${theme.neutral_300};
  font-weight: ${(props) => (props.checked ? 500 : 400)};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  color: ${(props) => (props.checked ? theme.red_200 : theme.neutral_300)};
  background-color: ${(props) => (props.checked ? theme.red_100 : theme.neutral_175)};

  input {
    display: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;
