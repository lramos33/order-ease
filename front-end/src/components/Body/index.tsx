import MenuPage from "../MenuPage";
import OrdersPage from "../OrdersPage";

import { BodyContainer, BodyContent } from "./styles";

import { ESidebarOptions } from "../../types";

interface IProps {
  selectedOption: string;
}

export default function Body({ selectedOption }: IProps) {
  return (
    <BodyContainer>
      <BodyContent>
        {selectedOption === ESidebarOptions.ORDERS && <OrdersPage />}
        {selectedOption === ESidebarOptions.MENU && <MenuPage />}
      </BodyContent>
    </BodyContainer>
  );
}
