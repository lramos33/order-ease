import { Container } from "./styles";

import serverError from "../../assets/images/server-error.svg";

export default function ServerError() {
  return (
    <Container>
      <img width="900px" height="600px" src={serverError} alt="Internal server error" />
    </Container>
  );
}
