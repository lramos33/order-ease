import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer, CenteredContainer } from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import Button from "../components/Button";
import TableModal from "../components/TableModal";

import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { ICartItem, ICategory, IProduct } from "../types";
import { ActivityIndicator } from "react-native";
import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";
import { api } from "../utils/api";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    Promise.all([api.get("/categories"), api.get("/products")]).then(([categoriesResponse, productsResponse]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    const route = categoryId ? `/categories/${categoryId}/products` : "/products";

    setIsLoadingProducts(true);

    api.get(route).then(({ data }) => {
      setProducts(data);
      setIsLoadingProducts(false);
    });
  };

  const onSave = (table: string) => setSelectedTable(table);

  // TO DO: change to handleResetOrder
  const onCancelOrder = () => {
    setCartItems([]);
    setSelectedTable("");
  };

  const handleConfirmOrder = () => {
    setCartItems([]);
    setSelectedTable("");
  };

  const handleCartItemChanges = (product: IProduct, action: "add" | "decrease") => {
    if (!selectedTable) {
      setIsOpen(true);
    }

    setCartItems((prevState) => {
      const newCartItems = [...prevState];
      const currentItemIndex = prevState.findIndex((cartItem) => cartItem.product._id === product._id);
      const currentItem = newCartItems[currentItemIndex];

      if (action === "add") {
        if (currentItemIndex < 0) {
          return [...prevState, { product, quantity: 1 }];
        }

        newCartItems[currentItemIndex] = {
          ...currentItem,
          quantity: currentItem.quantity + 1,
        };
      }

      if (action === "decrease") {
        if (currentItem.quantity === 1) {
          newCartItems.splice(currentItemIndex, 1);
          return newCartItems;
        }

        newCartItems[currentItemIndex] = {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        };
      }

      return newCartItems;
    });
  };

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={onCancelOrder} />

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        ) : (
          <>
            <CategoriesContainer>
              <Categories categories={categories} onSelectCategory={handleSelectCategory} />
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#d73035" size="large" />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu cartItemChange={handleCartItemChanges} products={products} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color="#666666" style={{ marginTop: 24 }}>
                      No products found!
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {selectedTable ? (
            <Cart
              cartItems={cartItems}
              cartItemChange={handleCartItemChanges}
              onConfirmOrder={handleConfirmOrder}
              selectedTable={selectedTable}
            />
          ) : (
            <Button label="Create order" onPress={handleOpen} disabled={isLoading} />
          )}
        </FooterContainer>
      </Footer>

      <TableModal visible={isOpen} onClose={handleClose} onSave={onSave} />
    </>
  );
}
