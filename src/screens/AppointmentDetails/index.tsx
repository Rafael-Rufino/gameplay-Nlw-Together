import React from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { FlatList } from "react-native";

import theme from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";

import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import {
  Banner,
  Title,
  SubTitle,
  BannerContent,
  styles,
  Wrapper,
} from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rafael",
      avatar_url: "https://github.com/Rafael-Rufino.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rafael",
      avatar_url: "https://github.com/Rafael-Rufino.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <Banner source={BannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <SubTitle>
            È hoje que vamos chegar ao challenger sem perder uma partida da md1
          </SubTitle>
        </BannerContent>
      </Banner>
      <ListHeader title="Jogadores" subTitle="Total" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.Members}
      />

      <Wrapper>
        <ButtonIcon title="Entrar na Partida" />
      </Wrapper>
    </Background>
  );
}
