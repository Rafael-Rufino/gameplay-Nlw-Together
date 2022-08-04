import styled from "styled-components/native";
import { TextInput } from "react-native";
import theme from "../../global/styles/theme";

export const TextInputContainer = styled(TextInput)`
  width: 100%;
  height: 95px;
  background-color: ${theme.colors.secondary40};
  color: ${theme.colors.heading};
  border-radius: 8px;
  font-family: ${theme.fonts.text400};
  font-size: 14px;
  margin-right: 4px;
  border-width: 1px;
  border-color: ${theme.colors.secondary50};
  padding-horizontal: 16px;
  padding-top: 16px;
  text-align-vertical: top;
`;
