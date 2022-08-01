import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const NameStatus = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.highlight};
  font-size: 14px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 4px;
`;
