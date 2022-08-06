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

import uuid from "react-native-uuid";

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
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCloseModal() {
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ás ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />
          <Label style={{ marginLeft: 24, marginTop: 36, marginBottom: 18 }}>
            Categoria
          </Label>
          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />
          <Form>
            <RectButton onPress={handleOpenGuildsModal}>
              <Select>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <Image />
                )}

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
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Divider>/</Divider>
                  <SmallInput onChangeText={setMonth} />
                </Column>
              </LabelInput>
              <LabelInput>
                <Label>Hora e minuto</Label>
                <Column>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Divider>:</Divider>
                  <SmallInput onChangeText={setMinute} />
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
              onChangeText={setDescription}
            />
            <Footer>
              <Button title="Agendar" onPress={handleSave} />
            </Footer>
          </Form>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModa} closeModal={handleCloseModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
