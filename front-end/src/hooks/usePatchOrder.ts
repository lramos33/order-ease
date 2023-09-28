import { useState } from "react";
import { toast } from "react-toastify";

import { api } from "../utils/api";

import { EOrderStatus, EPaymentMethod, IOrder } from "../types";

interface IBody {
  status: EOrderStatus;
  paymentMethod?: EPaymentMethod;
}

interface IArgs {
  orderId: IOrder["_id"];
}

export default function usePatchOrders({ orderId }: IArgs) {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (body: IBody) => {
    setIsLoading(true);
    await api
      .patch(`/orders/${orderId}`, body)
      .then(() => {
        toast.success("Order updated");
      })
      .catch(() => {
        toast.error("Could not edit the order");
      });
    setIsLoading(false);
  };

  return { mutate, isLoading };
}
