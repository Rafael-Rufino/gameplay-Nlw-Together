import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Text, ButtonContainer } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
}
