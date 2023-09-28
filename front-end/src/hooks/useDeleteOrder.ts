import { useState } from "react";
import { toast } from "react-toastify";

import { api } from "../utils/api";

import { IOrder } from "../types";

interface IArgs {
  onSuccess: () => void;
  orderId: IOrder["_id"];
}

export default function useDeleteOrder({ orderId, onSuccess }: IArgs) {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async () => {
    setIsLoading(true);
    await api
      .delete(`/orders/${orderId}`)
      .then(() => {
        toast.success("Pedido cancelado");
        onSuccess();
      })
      .catch(() => {
        toast.error("Não foi possível cancelar o pedido");
      });
    setIsLoading(false);
  };

  return { mutate, isLoading };
}
