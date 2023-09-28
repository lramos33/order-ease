import { ChangeEvent, useEffect, useState } from "react";

import useGetOrders from "../../hooks/useGetOrders";

import ServerError from "../ServerError";
import EmptyOrders from "../EmptyOrders";
import CustomRadio from "../CustomRadio";
import OrderDetails from "../OrderDetails";
import OrdersPageSkeleton from "../OrdersPageSkeleton";

import { OrderContainer, OrdersContainer, OrdersPageContainer } from "./styles";

import { formatHour } from "../../utils/formatHour";
import { formatCurrency } from "../../utils/formatCurrency";

import { EOrderStatus, IOrder } from "../../types";

export default function OrdersPage() {
  const { data, isLoading, isError } = useGetOrders();

  const [selectedOrder, setSelectedOrder] = useState<IOrder>();
  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>([]);
  const [selectedOption, setSelectedOption] = useState(EOrderStatus.WAITING as string);

  const options = [
    {
      label: `Waiting (${data.filter((order) => order.status === EOrderStatus.WAITING).length})`,
      value: EOrderStatus.WAITING,
    },
    {
      label: `In production (${data.filter((order) => order.status === EOrderStatus.IN_PRODUCTION).length})`,
      value: EOrderStatus.IN_PRODUCTION,
    },
    {
      label: `Done (${data.filter((order) => order.status === EOrderStatus.DONE).length})`,
      value: EOrderStatus.DONE,
    },
    {
      label: `Paid (${data.filter((order) => order.status === EOrderStatus.PAID).length})`,
      value: EOrderStatus.PAID,
    },
  ];

  useEffect(() => {
    setFilteredOrders(
      data.filter((order) => {
        switch (selectedOption) {
          case EOrderStatus.WAITING:
            return order.status === EOrderStatus.WAITING;
          case EOrderStatus.IN_PRODUCTION:
            return order.status === EOrderStatus.IN_PRODUCTION;
          case EOrderStatus.DONE:
            return order.status === EOrderStatus.DONE;
          case EOrderStatus.PAID:
            return order.status === EOrderStatus.PAID;
          default:
            return true;
        }
      })
    );
  }, [selectedOption, data]);

  useEffect(() => {
    setSelectedOrder(filteredOrders[0]);
  }, [filteredOrders]);

  if (isLoading) return <OrdersPageSkeleton />;

  if (isError) return <ServerError />;

  return (
    <OrdersPageContainer>
      <OrdersContainer hasOrders={filteredOrders.length > 0}>
        <CustomRadio options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

        {filteredOrders.length > 0 ? (
          filteredOrders
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((order) => {
              const itemsAmount = order.products.reduce((total, item) => total + item.product.price * item.quantity, 0);

              return (
                <OrderContainer
                  key={order._id}
                  onClick={() => setSelectedOrder(order)}
                  selected={selectedOrder ? selectedOrder._id === order._id : false}
                >
                  <div className="first-info">
                    <p className="order-id">Order #{order._id}</p>
                    <p className="order-table">Table: {order.table}</p>
                    <p className="order-itens">Itens: {order.products.length}</p>
                  </div>

                  <div className="second-info">
                    <p className="order-time">{formatHour(order.createdAt)}</p>
                    <p className="order-price">{formatCurrency(itemsAmount)}</p>
                  </div>
                </OrderContainer>
              );
            })
        ) : (
          <EmptyOrders />
        )}
      </OrdersContainer>

      {selectedOrder && <OrderDetails selectedOrder={selectedOrder} />}
    </OrdersPageContainer>
  );
}
