import React from "react";
import { View } from "react-native";

import { Image } from "./styles";
import DiscordSvg from "../../assets/discord.svg";

import { Container } from "./styles";

const { CDN_IMAGE } = process.env;
type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Container>
      {iconId ? (
        <Image source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </Container>
  );
}
