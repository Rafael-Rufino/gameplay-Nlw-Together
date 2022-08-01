import React from "react";
import theme from "../../global/styles/theme";
import { Avatar } from "../Avatar";

import {
  Container,
  Content,
  Title,
  Status,
  NameStatus,
  BulletStatus,
} from "./styles";

import { Props } from "./interface";

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === "online";
  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />
      <Content>
        <Title>{data.username}</Title>
        <Status>
          <BulletStatus
            style={[
              {
                backgroundColor: isOnline ? primary : on,
              },
            ]}
          />
          <NameStatus>{isOnline ? "Disponível" : "Ocupado"}</NameStatus>
        </Status>
      </Content>
    </Container>
  );
}
