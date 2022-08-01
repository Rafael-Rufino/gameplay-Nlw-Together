import React, { ReactNode } from "react";
import { Modal, ModalProps } from "react-native";
import { Background } from "../Background";

import { Overlay, Container, Bar } from "./styles";

type IModalProps = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: IModalProps) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <Bar />
            {children}
          </Background>
        </Container>
      </Overlay>
    </Modal>
  );
}
