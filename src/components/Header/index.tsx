import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import theme from "../../global/styles/theme";

import { Container, Title, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const navigation = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Title>{title}</Title>
      {action ? <Content>{action}</Content> : <View style={{ width: 24 }} />}
    </Container>
  );
}
