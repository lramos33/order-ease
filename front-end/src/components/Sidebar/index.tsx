import { IoMdSettings } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiHome, HiClock } from "react-icons/hi";
import { IoFastFood, IoCart, IoRestaurantSharp } from "react-icons/io5";

import { OptionContainer, SidebarContainer, LogoContainer } from "./styles";

import { ESidebarOptions } from "../../types";

interface IProps {
  selectedOption: ESidebarOptions;
  handleSelectOption: (value: ESidebarOptions) => void;
}

export default function Sidebar({ selectedOption, handleSelectOption }: IProps) {
  return (
    <SidebarContainer>
      <LogoContainer>
        <IoRestaurantSharp className="icon" size="32px" />
      </LogoContainer>

      <OptionContainer selected={selectedOption === "home"} onClick={() => handleSelectOption(ESidebarOptions.HOME)} disabled>
        <HiHome size="24px" />
        <p>Home</p>
      </OptionContainer>

      <OptionContainer selected={selectedOption === "orders"} onClick={() => handleSelectOption(ESidebarOptions.ORDERS)}>
        <IoCart size="24px" />
        <p>Orders</p>
      </OptionContainer>

      <OptionContainer selected={selectedOption === "menu"} onClick={() => handleSelectOption(ESidebarOptions.MENU)}>
        <IoFastFood size="24px" />
        <p>Menu</p>
      </OptionContainer>

      <OptionContainer selected={selectedOption === "tables"} onClick={() => handleSelectOption(ESidebarOptions.TABLES)} disabled>
        <HiSquares2X2 size="24px" />
        <p>Tables</p>
      </OptionContainer>

      <OptionContainer selected={selectedOption === "history"} onClick={() => handleSelectOption(ESidebarOptions.HISTORY)} disabled>
        <HiClock size="24px" />
        <p>History</p>
      </OptionContainer>

      <OptionContainer selected={selectedOption === "settings"} onClick={() => handleSelectOption(ESidebarOptions.SETTINGS)} disabled>
        <IoMdSettings size="24px" />
        <p>Settings</p>
      </OptionContainer>
    </SidebarContainer>
  );
}
