import React from "react";

import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";

import {
  TouchableOpacityContainer,
  Content,
  Header,
  Title,
  Type,
} from "./styles";

import { IGuildProps } from "./interface";
import theme from "../../global/styles/theme";

export function Guild({ data, ...rest }: IGuildProps) {
  return (
    <TouchableOpacityContainer {...rest} activeOpacity={0.7}>
      <GuildIcon />
      <Content>
        <Header>
          <Title>{data.name}</Title>
          <Type>{data.owner ? "Administrador" : "Convidado"}</Type>
        </Header>
      </Content>

      <Feather name="chevron-right" size={24} color={theme.colors.heading} />
    </TouchableOpacityContainer>
  );
}
