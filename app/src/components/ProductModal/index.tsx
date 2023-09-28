import { FlatList, Modal } from "react-native";
import { IProduct } from "../../types";
import formatCurrency from "../../utils/formatCurrency";
import Button from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
  Image,
  CloseButton,
  ModalBody,
  Header,
  IngredientsContainer,
  Ingredient,
  FooterContainer,
  Footer,
  PriceContainer,
} from "./styles";

interface IProps {
  visible: boolean;
  onClose: () => void;
  product: IProduct;
  cartItemChange: (value: IProduct, action: "add" | "decrease") => void;
}

export default function ProductModal({ visible, onClose, product, cartItemChange }: IProps) {
  const handleAddToCard = () => {
    cartItemChange(product, "add");
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <Image source={{ uri: `http://192.168.15.42:3001/uploads/${product.imagePath}` }}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size="24px" weight="600">
            {product.name}
          </Text>

          <Text color="#666666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666666">
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text style={{ marginRight: 20 }}>{ingredient.icon}</Text>

                  <Text size="14px" color="#666666">
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666666">Price</Text>

            <Text size="20px" weight="600">
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>

          <Button onPress={handleAddToCard} label="Add to cart" />
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
