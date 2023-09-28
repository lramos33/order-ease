import { Container } from "./styles";
import { Text } from "../Text";
import { ActivityIndicator } from "react-native";

interface IProps {
  label: string;
  disabled?: boolean;
  textColor?: string;
  onPress: () => void;
  isLoading?: boolean;
  backgroundColor?: string;
}

export default function Button({
  label,
  onPress,
  disabled,
  isLoading,
  textColor = "#fff",
  backgroundColor = "#d73035",
}: IProps) {
  return (
    <Container onPress={onPress} disabled={disabled || isLoading} backgroundColor={backgroundColor}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text weight="600" color={textColor}>
          {label}
        </Text>
      )}
    </Container>
  );
}
