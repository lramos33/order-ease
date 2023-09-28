import { Modal, TouchableOpacity, Platform } from "react-native";

import Button from "../Button";
import { Text } from "../Text";
import { Close } from "../Icons/Close";
import { ModalBody, ModalForm, ModalHeader, ModalInput, Overlay } from "./styles";
import { useState } from "react";

interface IProps {
  visible: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
}

export default function TableModal({ visible, onClose, onSave }: IProps) {
  const [table, setTable] = useState("");

  const handleSave = () => {
    onSave(table);
    setTable("");
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Table number</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666666" />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <ModalInput
              placeholder="Number"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button label="Save" onPress={handleSave} disabled={table === ""} />
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
