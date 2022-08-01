import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`;

export const Form = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

export const Select = styled.View`
  width: 100%;
  flex-direction: row;
  height: 68px;
  border-color: ${theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`;
export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Image = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${theme.colors.secondary50};
  border-radius: 8px;
  border-width: 1px;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const LabelInput = styled.View``;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`;

export const CaracteresLimit = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  color: ${theme.colors.highlight};
`;

export const Footer = styled.View`
  margin-vertical: 20px;
  margin-bottom: 56px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
