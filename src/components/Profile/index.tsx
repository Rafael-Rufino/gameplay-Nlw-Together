import React from "react";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import {
  Container,
  User,
  Content,
  Greeting,
  Username,
  Message,
} from "./styles";

export function Profile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <Container>
      <Avatar urlImage={user.avatar} />
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
