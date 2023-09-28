import { Category, Icon } from "./styles";
import { Text } from "../Text";

import { FlatList } from "react-native";
import { useState } from "react";
import { ICategory } from "../../types";

interface IProps {
  categories: ICategory[];
  onSelectCategory: (value: string) => void;
}

export function Categories({ categories, onSelectCategory }: IProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleSelectCategory = (id: string) => {
    const category = selectedCategoryId === id ? "" : id;

    onSelectCategory(category);
    setSelectedCategoryId(category);
  };

  return (
    <>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={(category) => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategoryId === category._id;

          return (
            <Category onPress={() => handleSelectCategory(category._id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>

              <Text size="14px" weight="600" opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </>
  );
}
