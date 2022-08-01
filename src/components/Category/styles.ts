import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const LinearGradientContainer = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;
export const Content = styled(LinearGradient)`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 16px;
  margin-top: 16px;
`;
export const styles = StyleSheet.create({
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 2,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
});
