import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding-horizontal: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 24}px;
  margin-bottom: 42px;
`;

export const CardList = styled.View`
  margin-horizontal: 24px;
  margin-top: 24px;
`;

export const styles = StyleSheet.create({
  matches: {
    marginHorizontal: 24,
  },
});
