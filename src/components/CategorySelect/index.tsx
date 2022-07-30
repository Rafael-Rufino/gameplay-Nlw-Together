import React from "react";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { ScrollViewContainer } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({ categorySelected, setCategory }: Props) {
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
        />
      ))}
    </ScrollViewContainer>
  );
}
