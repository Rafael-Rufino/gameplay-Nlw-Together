import React from "react";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { ScrollViewContainer } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
  return (
    <ScrollViewContainer
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollViewContainer>
  );
}
