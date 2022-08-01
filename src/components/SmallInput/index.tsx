import React from "react";

import { TextInputProps } from "react-native";

import { TextInputContainer } from "./styles";

export function SmallInput({ ...rest }: TextInputProps) {
  return <TextInputContainer keyboardType="numeric" {...rest} />;
}
