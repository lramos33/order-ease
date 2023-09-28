import { ChangeEvent, useEffect, useState } from "react";
import { BsCash, BsCreditCard2Back, BsQrCodeScan } from "react-icons/bs";

import usePatchOrder from "../../hooks/usePatchOrder";

import Spinner from "../Spinner";
import {
  BasicDetailsContainer,
  OrderDetailsContainer,
  PriceDetailsContainer,
  ProductContainer,
  ProductsContainer,
  ProductsDetailsContainer,
} from "./style";

import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/formatCurrency";
import { EENPaymentMethod, EOrderStatus, EPaymentMethod, IOrder } from "../../types";
import { RadioButton, RadioGroup } from "../CustomRadio/styles";

interface IProps {
  selectedOrder: IOrder;
}

export default function OrderDetails({ selectedOrder }: IProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<EPaymentMethod | undefined>();

  const { mutate: patchOrder, isLoading: isLoadingPatch } = usePatchOrder({ orderId: selectedOrder._id });

  useEffect(() => {
    if (selectedPaymentMethod) {
      setSelectedPaymentMethod(undefined);
    }
  }, [selectedOrder]);

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(e.target.value as EPaymentMethod);
  };

  const handleChangeOrder = (status: EOrderStatus, paymentMethod?: EPaymentMethod) => {
    if (paymentMethod) {
      patchOrder({ status, paymentMethod });
    } else {
      patchOrder({ status });
    }
  };

  const totalAmount = selectedOrder ? selectedOrder.products.reduce((total, item) => total + item.product.price * item.quantity, 0) : 0;

  return (
    <OrderDetailsContainer>
      <ProductsDetailsContainer>
        <BasicDetailsContainer>
          <div>
            <p className="title">Order ID</p>
            <p className="subtitle">#{selectedOrder._id}</p>
          </div>

          <div>
            <p className="title">Table</p>
            <p className="subtitle">{selectedOrder.table}</p>
          </div>
        </BasicDetailsContainer>

        <ProductsContainer>
          {selectedOrder.products.map((item, index) => (
            <ProductContainer key={item._id} lastIndex={selectedOrder.products.length === index + 1}>
              <img
                width="72px"
                height="72px"
                alt={item.product.name}
                className="product-image"
                src={`http://localhost:3001/uploads/${item.product.imagePath}`}
              />

              <div className="product-description">
                <p className="product-name">{item.product.name}</p>

                {item.note && <p className="product-note">{item.note}</p>}

                <div className="price-details">
                  <div className="price-quantity">
                    <p className="product-quantity">{item.quantity}x</p>
                    <p className="product-price">{formatCurrency(item.product.price)}</p>
                  </div>

                  <p className="total-price">{formatCurrency(item.quantity * item.product.price)}</p>
                </div>
              </div>
            </ProductContainer>
          ))}
        </ProductsContainer>
      </ProductsDetailsContainer>

      <PriceDetailsContainer>
        <div className="price-details">
          <p className="price-label">Items ({selectedOrder.products.reduce((total, product) => total + product.quantity, 0)})</p>
          <p className="price-value">{formatCurrency(totalAmount)}</p>
        </div>

        <div className="tax-details">
          <p className="tax-label">Tax (12%)</p>
          <p className="tax-value">{formatCurrency(totalAmount * 0.12)}</p>
        </div>

        <div className="total-details">
          <p className="total-label">Total</p>
          <p className="total-value">{formatCurrency(totalAmount * 1.12)}</p>
        </div>

        {selectedOrder.paymentMethod && (
          <div className="payment-details">
            <p className="payment-label">Payment Method</p>
            <div className="payment-content">
              {selectedOrder.paymentMethod === EPaymentMethod.CASH && <BsCash color={theme.red_200} />}
              {selectedOrder.paymentMethod === EPaymentMethod.CARD && <BsCreditCard2Back color={theme.red_200} />}
              {selectedOrder.paymentMethod === EPaymentMethod.QR_CODE && <BsQrCodeScan color={theme.red_200} />}

              <p className="payment-method">{EENPaymentMethod[selectedOrder.paymentMethod]}</p>
            </div>
          </div>
        )}

        {selectedOrder.status === EOrderStatus.DONE && (
          <RadioGroup>
            <RadioButton checked={selectedPaymentMethod === EPaymentMethod.CASH} fullWidth>
              <BsCash />
              Cash
              <input
                type="radio"
                value={EPaymentMethod.CASH}
                onChange={handlePaymentMethodChange}
                checked={selectedPaymentMethod === EPaymentMethod.CASH}
              />
            </RadioButton>

            <RadioButton checked={selectedPaymentMethod === EPaymentMethod.CARD} fullWidth>
              <BsCreditCard2Back />
              Card
              <input
                type="radio"
                value={EPaymentMethod.CARD}
                onChange={handlePaymentMethodChange}
                checked={selectedPaymentMethod === EPaymentMethod.CARD}
              />
            </RadioButton>

            <RadioButton checked={selectedPaymentMethod === EPaymentMethod.QR_CODE} fullWidth>
              <BsQrCodeScan />
              QR code
              <input
                type="radio"
                value={EPaymentMethod.QR_CODE}
                onChange={handlePaymentMethodChange}
                checked={selectedPaymentMethod === EPaymentMethod.QR_CODE}
              />
            </RadioButton>
          </RadioGroup>
        )}

        {selectedOrder.status === EOrderStatus.WAITING && (
          <button disabled={isLoadingPatch} onClick={() => handleChangeOrder(EOrderStatus.IN_PRODUCTION)}>
            {isLoadingPatch ? <Spinner /> : "Move to production"}
          </button>
        )}

        {selectedOrder.status === EOrderStatus.IN_PRODUCTION && (
          <button disabled={isLoadingPatch} onClick={() => handleChangeOrder(EOrderStatus.DONE)}>
            {isLoadingPatch ? <Spinner /> : "Mark as done"}
          </button>
        )}

        {selectedOrder.status === EOrderStatus.DONE && (
          <button
            disabled={!selectedPaymentMethod || isLoadingPatch}
            onClick={() => handleChangeOrder(EOrderStatus.PAID, selectedPaymentMethod)}
          >
            {isLoadingPatch ? <Spinner /> : "Print bills"}
          </button>
        )}
      </PriceDetailsContainer>
    </OrderDetailsContainer>
  );
}
