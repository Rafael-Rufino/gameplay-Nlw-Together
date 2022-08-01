import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Banner = styled(ImageBackground)`
  width: 100%;
  height: 234px;
  margin-bottom: 30px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 24px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
`;

export const Wrapper = styled.View`
  padding-horizontal: 24px;
  padding-vertical: 20px;
  margin-bottom: ${getBottomSpace()};
`;

export const styles = StyleSheet.create({
  Members: {
    marginLeft: 24,
    marginTop: 28,
  },
});
