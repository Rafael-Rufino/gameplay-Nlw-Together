import React, { ReactNode } from "react";

import theme from "../../global/styles/theme";

import { Container } from "./styles";

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return (
    <Container colors={[theme.colors.secondary80, theme.colors.secondary100]}>
      {children}
    </Container>
  );
}
