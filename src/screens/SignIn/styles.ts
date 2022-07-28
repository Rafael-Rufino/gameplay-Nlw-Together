import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0d133d;
`;

export const BackgroundImg = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  padding-horizontal: 50px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${theme.colors.heading};
  font-size: 40px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${theme.colors.heading};
  margin-bottom: 60px;
  font-size: 16px;
  line-height: 24px;
`;
