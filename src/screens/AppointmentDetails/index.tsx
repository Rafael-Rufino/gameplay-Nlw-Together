import React, { useEffect, useState } from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { Alert, FlatList, Share, Platform } from "react-native";

import theme from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";

import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import * as Linking from "expo-linking";

import {
  Banner,
  Title,
  SubTitle,
  BannerContent,
  styles,
  Wrapper,
} from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment/interface";
import { api } from "../../services/api";
import { MemberProps } from "../../components/Member/interface";
import { Load } from "../../components/Load";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch {
      Alert.alert(
        "Verique as configurações do seu servidor. Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;
    Share.share({
      message,
      url: widget.instant_invite,
    });
  }
  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <Banner source={BannerImg}>
        <BannerContent>
          <Title>{guildSelected.guild.name}</Title>
          <SubTitle>{guildSelected.description}</SubTitle>
        </BannerContent>
      </Banner>
      {loading ? (
        <Load />
      ) : (
        <>
          {" "}
          <ListHeader
            title="Jogadores"
            subTitle={`Total ${widget.members.length} `}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.Members}
          />
        </>
      )}

      {guildSelected.guild.owner && (
        <Wrapper>
          <ButtonIcon title="Entrar na Partida" onPress={handleOpenGuild} />
        </Wrapper>
      )}
    </Background>
  );
}
