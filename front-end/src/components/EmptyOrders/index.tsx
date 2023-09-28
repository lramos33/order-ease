import { Container } from "./styles";

import emptyOrders from "../../assets/images/empty.svg";

export default function EmptyOrders() {
  return (
    <Container>
      <img width="360px" height="195px" src={emptyOrders} alt="Internal server error" />

      <p>No order found</p>
    </Container>
  );
}
