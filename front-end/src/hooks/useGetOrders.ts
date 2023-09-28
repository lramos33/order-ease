import socketIo from "socket.io-client";
import { useEffect, useState } from "react";

import { api } from "../utils/api";

import { IOrder } from "../types";

export default function useGetOrders() {
  const [data, setData] = useState<IOrder[]>([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/orders")
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

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order) => {
      setData((prevState) => {
        return prevState.concat(order);
      });
    });

    socket.on("orders@delete", (id) => {
      setData((prevState) => prevState.filter((order) => order._id !== Number(id)));
    });

    socket.on("orders@edit", (id, status, paymentMethod) => {
      setData((prevState) =>
        prevState.map((order) => {
          if (order._id === Number(id)) return { ...order, status, paymentMethod };
          else return order;
        })
      );
    });
  }, []);

  return { isLoading, isError, data };
}
