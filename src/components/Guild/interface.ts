import { TouchableOpacityProps } from "react-native";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type IGuildProps = TouchableOpacityProps & {
  data: GuildProps;
};
