import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import theme from "../../global/styles/theme";

export const RectButtonContainer = styled(RectButton)``;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;
export const Category = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 14px;
`;
export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayerInfor = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
  font-size: 14px;
  margin-left: 8px;
`;

export const Players = styled.Text`
  font-family: ${theme.fonts.text500};
  font-size: 14px;
  margin-left: 8px;
`;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
