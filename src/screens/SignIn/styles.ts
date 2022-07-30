import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImg = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding-horizontal: 50px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
  margin-bottom: 60px;
  font-size: 16px;
  line-height: 24px;
`;
