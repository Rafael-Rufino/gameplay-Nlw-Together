import React from "react";
import { FlatList } from "react-native";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { GuildProps } from "../../components/Guild/interface";
import { Container, styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
  ];
  return (
    <Container>
      <FlatList
        data={guilds}
        KeyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guildList}
      />
    </Container>
  );
}
