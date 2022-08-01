import { useNavigation } from "@react-navigation/native";

import { Container, Content, Title, SubTitle, BackgroundImg } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
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
          <ButtonIcon title="Entrar com discord" onPress={handleSignIn} />
        </Content>
      </Container>
    </Background>
  );
}
