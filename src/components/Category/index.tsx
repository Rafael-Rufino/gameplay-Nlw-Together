import React from "react";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import theme from "../../global/styles/theme";
import { View } from "react-native";
type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

import { LinearGradientContainer, Content, Title, styles } from "./styles";

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
  return (
    <RectButton {...rest}>
      <LinearGradientContainer colors={[secondary50, secondary70]}>
        <Content
          style={{ opacity: checked ? 1 : 0.5 }}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={40} height={48} />
          <Title>{title}</Title>
        </Content>
      </LinearGradientContainer>
    </RectButton>
  );
}
