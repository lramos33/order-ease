import { useEffect, useState } from "react";

import useGetCategories from "../../hooks/useGetCategories";

import Products from "../Products";
import ServerError from "../ServerError";
import CustomRadio, { IRadioOption } from "../CustomRadio";

import { MenuPageContainer, ProductDetails, ProductsContainer } from "./styles";

import { IProduct } from "../../types";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [options, setOptions] = useState<IRadioOption[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategories();

  useEffect(() => {
    if (categories.length > 1) {
      setOptions(
        categories.map((category) => ({
          value: category._id,
          label: `${category.icon} ${category.name}`,
        }))
      );

      setSelectedCategory(categories[0]._id);
    }
  }, [categories]);

  if (isLoadingCategories || !selectedCategory) return <p>Loading...</p>;

  if (isErrorCategories) return <ServerError />;

  return (
    <MenuPageContainer>
      <ProductsContainer>
        <CustomRadio options={options} selectedOption={selectedCategory} setSelectedOption={setSelectedCategory} />

        <Products categoryId={selectedCategory} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
      </ProductsContainer>

      <ProductDetails>
        <p className="product-name">{selectedProduct?.name}</p>
        <p className="product-description">{selectedProduct?.description}</p>

        {selectedProduct?.ingredients.map((ingredient) => (
          <p className="product-ingredient">
            {ingredient.icon} {ingredient.name}
          </p>
        ))}
      </ProductDetails>
    </MenuPageContainer>
  );
}
