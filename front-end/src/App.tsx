import { useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

import { AppContainer } from "./styles";

import { ESidebarOptions } from "./types";

export default function App() {
  const [selectedOption, setSelectedOption] = useState<ESidebarOptions>(ESidebarOptions.ORDERS);

  const handleSelectOption = (option: ESidebarOptions) => {
    setSelectedOption(option);
  };

  return (
    <AppContainer>
      <ToastContainer position="bottom-center" />
      <Sidebar selectedOption={selectedOption} handleSelectOption={handleSelectOption} />
      <Body selectedOption={selectedOption} />
    </AppContainer>
  );
}
