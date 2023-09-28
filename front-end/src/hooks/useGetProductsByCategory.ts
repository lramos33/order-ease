import { useEffect, useState } from "react";

import { api } from "../utils/api";

import { IProduct } from "../types";

export default function useGetProductsByCategory(categoryId: string) {
  const [data, setData] = useState<IProduct[]>([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`categories/${categoryId}/products`)
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  return { isLoading, isError, data };
}
