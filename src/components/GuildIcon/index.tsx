import React from "react";

import { Image } from "./styles";

export function GuildIcon() {
  const uri =
    "https://img.ibxk.com.br/2020/10/30/30110741964176.jpg?w=352&h=208&mode=crop&scale=both";
  return <Image source={{ uri }} resizeMode="cover" />;
}
