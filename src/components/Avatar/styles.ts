import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

export const AvatarImg = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 8px;
`;
