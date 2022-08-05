import IllustrationImg from "../../assets/illustration.png";
import { ActivityIndicator, Alert } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { Container, Content, Title, SubTitle, BackgroundImg } from "./styles";

import { useAuth } from "../../hooks/auth";
import theme from "../../global/styles/theme";

export function SignIn() {
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert("Erro", "Erro ao realizar o login", error);
    }
  }
  return (
    <Background>
      <Container>
        <BackgroundImg source={IllustrationImg} resizeMode="stretch" />
        <Content>
          <Title>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Title>
          <SubTitle>
            Crie grupos para jogar seus games{"\n"}
            favoritos com seus amigos
          </SubTitle>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com discord" onPress={handleSignIn} />
          )}
        </Content>
      </Container>
    </Background>
  );
}
