import { Container, Content, OrderHeader, Table } from "./styles";
import { Text } from "../Text";
import { TouchableOpacity } from "react-native";

interface IProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: IProps) {
  return (
    <Container>
      {selectedTable ? (
        <Content>
          <OrderHeader>
            <Text size="24px" weight="600">
              Order
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size="14px" color="#d73035" weight="600">
                Cancel order
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#666666">Table {selectedTable}</Text>
          </Table>
        </Content>
      ) : (
        <>
          <Text size="16px" opacity={0.9}>
            Welcome to
          </Text>

          <Text size="24px" weight="700">
            ORDER<Text size="18px">EASE</Text>
          </Text>
        </>
      )}
    </Container>
  );
}
