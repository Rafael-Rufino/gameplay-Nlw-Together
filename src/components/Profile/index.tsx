import React from "react";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { RectButton } from "react-native-gesture-handler";

import {
  Container,
  User,
  Content,
  Greeting,
  Username,
  Message,
} from "./styles";
import { Alert } from "react-native";

export function Profile() {
  const { user, signOut } = useAuth();

  function handleLogout() {
    Alert.alert("Logouf", "Você deseja sair do GamePlay?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => signOut(),
      },
    ]);
  }

  return (
    <Container>
      <RectButton onPress={handleLogout}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <Content>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>{user.firstName}</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
}
