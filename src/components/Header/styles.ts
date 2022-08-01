import { LinearGradient } from "expo-linear-gradient";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-horizontal: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${theme.fonts.title700};
  font-size: 20px;
  color: ${theme.colors.heading};
`;

export const Content = styled.View``;
