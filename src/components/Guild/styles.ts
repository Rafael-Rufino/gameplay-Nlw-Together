import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const TouchableOpacityContainer = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
  margin-bottom: 11px;
`;

export const Type = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
  margin-bottom: 24px;
`;

export const Header = styled.View``;
