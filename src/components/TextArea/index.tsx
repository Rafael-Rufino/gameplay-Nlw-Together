import React from "react";

import { TextInputProps } from "react-native";

import { TextInputContainer } from "./styles";

export function TextArea({ ...rest }: TextInputProps) {
  return <TextInputContainer {...rest} />;
}
