import React from "react";
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
  return (
    <Container>
      <Avatar urlImage="https://github.com/Rafael-Rufino.png" />
      <Content>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Rafael</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
}
