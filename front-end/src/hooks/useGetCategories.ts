import { useEffect, useState } from "react";

import { api } from "../utils/api";

import { ICategory } from "../types";

export default function useGetCategories() {
  const [data, setData] = useState<ICategory[]>([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/categories")
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, isError, data };
}
