import { Container, Content, Title, SubTitle, BackgroundImg } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <BackgroundImg source={IllustrationImg} resizeMode="stretch" />
      <Content>
        <Title>
          Organize{"\n"}
          suas jogatinas{"\n"}
          facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </SubTitle>
        <Button title="Entrar com discord" />
      </Content>
    </Container>
  );
}
