import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import theme from "../../global/styles/theme";
import { View } from "react-native";
type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

import { ButtonCategory, Content, Title, styles } from "./styles";

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <ButtonCategory {...rest}>
      <LinearGradient colors={[secondary50, secondary70]}>
        <Content style={{ opacity: checked ? 1 : 0.4 }}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={40} height={48} />
          <Title>{title}</Title>
        </Content>
      </LinearGradient>
    </ButtonCategory>
  );
}
