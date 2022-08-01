import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";

import theme from "../../global/styles/theme";
import { SmallInput } from "../../components/SmallInput";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import {
  Label,
  Form,
  Select,
  Image,
  SelectBody,
  Field,
  LabelInput,
  Column,
  Divider,
  CaracteresLimit,
  styles,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild/interface";

export function AppointmentCreate() {
  const [category, setCategory] = useState();
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida" />
          <Label style={{ marginLeft: 24, marginTop: 36, marginBottom: 18 }}>
            Categoria
          </Label>
          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />
          <Form>
            <RectButton onPress={handleOpenGuildsModal}>
              <Select>
                {guild.icon ? <GuildIcon /> : <Image />}

                <SelectBody>
                  <Label>
                    {guild.name ? guild.name : `Selecione um servidor`}
                  </Label>
                </SelectBody>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </Select>
            </RectButton>
            <Field>
              <LabelInput>
                <Label>Dia e mês</Label>
                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput />
                </Column>
              </LabelInput>
              <LabelInput>
                <Label>Hora e minuto</Label>
                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>:</Divider>
                  <SmallInput />
                </Column>
              </LabelInput>
            </Field>
            <Field style={{ marginBottom: 12 }}>
              <Label>Descrição</Label>
              <CaracteresLimit>Max 100 caracteres</CaracteresLimit>
            </Field>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <Footer>
              <Button title="Agendar" />
            </Footer>
          </Form>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildsModa}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
