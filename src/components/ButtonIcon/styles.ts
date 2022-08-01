import { RectButton } from "react-native-gesture-handler";

import styled from "styled-components/native";

import theme from "../../global/styles/theme";

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
`;
export const Text = styled.Text`
  flex: 1;
  font-size: 18px;
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  text-align: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${theme.colors.line};
`;

export const ImageIcon = styled.Image`
  width: 24px;
  height: 18px;
`;
