import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Text, ButtonContainer, IconWrapper, ImageIcon } from "./styles";
import DiscordImg from "../../assets/discord.png";

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <IconWrapper>
        <ImageIcon source={DiscordImg} />
      </IconWrapper>
      <Text>{title}</Text>
    </ButtonContainer>
  );
}
