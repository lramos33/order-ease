import { useState } from "react";
import { FlatList } from "react-native";

import { IProduct } from "../../types";
import formatCurrency from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import ProductModal from "../ProductModal";
import { Text } from "../Text";

import { Product, ProductImage, ProductDetails, Divider, AddToCardButton } from "./styles";

interface IProps {
  cartItemChange: (value: IProduct, action: "add" | "decrease") => void;
  products: IProduct[];
}

export function Menu({ cartItemChange, products }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | IProduct>(null);

  const handleClose = () => setIsOpen(false);

  const handleOpen = (product: IProduct) => {
    setIsOpen(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        keyExtractor={(product) => product._id}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Divider}
        renderItem={({ item: product }) => (
          <Product onPress={() => handleOpen(product)}>
            <ProductImage source={{ uri: `http://192.168.15.42:3001/uploads/${product.imagePath}` }} />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>

              <Text color="#666666" size="14px" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>

              <Text size="14px" weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCardButton onPress={() => cartItemChange(product, "add")}>
              <PlusCircle />
            </AddToCardButton>
          </Product>
        )}
      />

      {isOpen && selectedProduct && (
        <ProductModal
          visible={isOpen}
          onClose={handleClose}
          product={selectedProduct}
          cartItemChange={cartItemChange}
        />
      )}
    </>
  );
}
