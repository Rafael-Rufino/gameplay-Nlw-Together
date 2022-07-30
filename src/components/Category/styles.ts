import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const ButtonCategory = styled(RectButton)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;
export const Content = styled.View`
  width: 100;
  height: 116;
  backgroundcolor: ${theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 7px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  font-size: 16px;
`;
export const styles = StyleSheet.create({
  check: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
    marginRight: 7,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 2,
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-end",
    marginRight: 7,
    borderRadius: 2,
  },
});
