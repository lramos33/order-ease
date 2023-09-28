import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.View`
  width: 100%;
  padding: 24px;
  margin: 0 24px;
  border-radius: 8px;
  background-color: #fafafa;
`;

export const ModalHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalForm = styled.View`
  margin-top: 32px;
`;

export const ModalInput = styled.TextInput`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  background-color: #ffffff;
  border: 1px solid rgba(204, 204, 204, 0.5);
`;
