import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { GuildProps } from "../../components/Guild/interface";
import { Container, styles } from "./styles";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);
  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");

    setGuilds(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <Container>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          KeyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
          style={styles.guildList}
        />
      )}
    </Container>
  );
}
