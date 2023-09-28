import { ChangeEvent, useState } from "react";

import { RadioButton, RadioGroup } from "./styles";

export interface IRadioOption {
  label: string;
  value: string;
}

interface IProps {
  options: IRadioOption[];
  selectedOption: string | undefined;
  setSelectedOption: (value: string) => void;
}

export default function CustomRadio({ options, selectedOption, setSelectedOption }: IProps) {
  const handleOrderStatusChange = (e: ChangeEvent<HTMLInputElement>) => setSelectedOption(e.target.value);

  return (
    <RadioGroup>
      {options.map((option) => (
        <RadioButton checked={selectedOption === option.value} key={option.value}>
          {option.label}
          <input type="radio" value={option.value} onChange={handleOrderStatusChange} checked={selectedOption === option.value} />
        </RadioButton>
      ))}
    </RadioGroup>
  );
}
