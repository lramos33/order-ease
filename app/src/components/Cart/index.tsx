import { FlatList, TouchableOpacity } from "react-native";
import { ICartItem, IProduct } from "../../types";
import { Actions, Item, Product, Image, QuantityContainer, ProductDetails, Summary, TotalContainer } from "./styles";
import { Text } from "../Text";
import formatCurrency from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import Button from "../Button";
import OrderConfirmedModal from "../OrderConfirmedModal";
import { useState } from "react";
import { api } from "../../utils/api";

interface IProps {
  cartItems: ICartItem[];
  cartItemChange: (value: IProduct, action: "add" | "decrease") => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}

export default function Cart({ cartItems, cartItemChange, onConfirmOrder, selectedTable }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOk = () => {
    setIsOpen(false);
    onConfirmOrder();
  };

  const handleConfirmOrder = () => {
    const body = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
      })),
    };

    setIsLoading(true);
    api.post("/orders", body).then(() => setIsLoading(false));
    setIsOpen(true);
  };

  const total = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.product.price, 0);
  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 140 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <Product>
                <Image source={{ uri: `http://192.168.15.42:3001/uploads/${cartItem.product.imagePath}` }} />

                <QuantityContainer>
                  <Text size="14px" color="#666666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size="14px" weight="600">
                    {cartItem.product.name}
                  </Text>

                  <Text size="14px" color="#666666" style={{ marginTop: 4 }}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </Product>

              <Actions>
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => cartItemChange(cartItem.product, "add")}>
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cartItemChange(cartItem.product, "decrease")}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666666">Total</Text>

              <Text size="20px" weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#999999">Empty cart</Text>
          )}
        </TotalContainer>

        <Button
          onPress={handleConfirmOrder}
          label="Confirm order"
          disabled={cartItems.length === 0}
          isLoading={isLoading}
        />
      </Summary>

      {isOpen && <OrderConfirmedModal isOpen={isOpen} onOk={handleOk} />}
    </>
  );
}
