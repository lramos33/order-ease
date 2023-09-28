import Skeleton from "../Skeleton";

import { RadioGroup } from "../CustomRadio/styles";
import { OrderDetailsContainer } from "../OrderDetails/style";

import { OrdersContainer, OrdersPageContainer } from "../OrdersPage/styles";

export default function OrdersPageSkeleton() {
  return (
    <OrdersPageContainer>
      <OrdersContainer hasOrders>
        <RadioGroup>
          <Skeleton width="90px" height="40px" />
          <Skeleton width="90px" height="40px" />
          <Skeleton width="90px" height="40px" />
          <Skeleton width="90px" height="40px" />
        </RadioGroup>

        <Skeleton height="112px" />
        <Skeleton height="112px" />
      </OrdersContainer>

      <OrderDetailsContainer>
        <Skeleton height="220px" />
        <Skeleton height="220px" />
      </OrderDetailsContainer>
    </OrdersPageContainer>
  );
}
