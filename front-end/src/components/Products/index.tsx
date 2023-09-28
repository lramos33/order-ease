import { useEffect } from "react";

import useGetProductsByCategory from "../../hooks/useGetProductsByCategory";

import ServerError from "../ServerError";

import { ProductCard, ProductGrid } from "./styles";

import { formatCurrency } from "../../utils/formatCurrency";

import { IProduct } from "../../types";

interface IProps {
  categoryId: string;
  selectedProduct: IProduct | undefined;
  setSelectedProduct: (value: IProduct) => void;
}

export default function Products({ categoryId, selectedProduct, setSelectedProduct }: IProps) {
  const { data, isLoading, isError } = useGetProductsByCategory(categoryId);

  useEffect(() => {
    if (data) {
      setSelectedProduct(data[0]);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <ServerError />;

  return (
    <ProductGrid>
      {data.map((product) => (
        <ProductCard
          key={product._id}
          onClick={() => setSelectedProduct(product)}
          selected={selectedProduct ? selectedProduct._id === product._id : false}
        >
          <div className="image-name-container">
            <img width="100%" alt={product.name} className="product-image" src={`http://localhost:3001/uploads/${product.imagePath}`} />
            <p className="product-name">{product.name}</p>
          </div>

          <div className="price-ingredient-container">
            <p className="product-price">{formatCurrency(product.price)}</p>
            <p className="product-ingredients">{product.ingredients.length} ingredients</p>
          </div>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
