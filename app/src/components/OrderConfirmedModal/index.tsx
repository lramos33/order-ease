import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Container } from "./styles";
import { Text } from "../Text";
import Button from "../Button";
import { StatusBar } from "expo-status-bar";

interface IProps {
  isOpen: boolean;
  onOk: () => void;
}

export default function OrderConfirmedModal({ isOpen, onOk }: IProps) {
  return (
    <Modal visible={isOpen} animationType="fade">
      <StatusBar style="light" />

      <Container>
        <CheckCircle />

        <Text size="20px" weight="600" color="#ffffff" style={{ marginTop: 12 }}>
          Order confirmed
        </Text>

        <Text color="#ffffff" opacity={0.9} style={{ marginTop: 4, marginBottom: 24 }}>
          The order has entered the production queue!
        </Text>

        <Button label="Ok" onPress={onOk} textColor="#d73035" backgroundColor="#ffffff" />
      </Container>
    </Modal>
  );
}
