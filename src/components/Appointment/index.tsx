import React from "react";

import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import {
  RectButtonContainer,
  Container,
  Content,
  Header,
  Title,
  Category,
  PlayerInfor,
  Players,
  Footer,
  DateInfo,
  Date,
  styles,
} from "./styles";

import theme from "../../global/styles/theme";

import { Props } from "./interface";
import { LinearGradient } from "expo-linear-gradient";

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButtonContainer {...rest}>
      <Container>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon />
        </LinearGradient>
        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />
              <Date>{data.date}</Date>
            </DateInfo>

            <PlayerInfor>
              <PlayerSvg fill={owner ? primary : on} />
              <Players style={{ color: owner ? primary : on }}>
                {owner ? "Anfitrião" : "Visitante"}
              </Players>
            </PlayerInfor>
          </Footer>
        </Content>
      </Container>
    </RectButtonContainer>
  );
}
