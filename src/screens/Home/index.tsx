import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList } from "react-native";

import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { Container, Header, styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "20/06 ás 18:00",
      description:
        "È hoje que vamos chegar ao challenger sem perder uma partida da md10.",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "20/06 ás 18:00",
      description:
        "È hoje que vamos chegar ao challenger sem perder uma partida da md10.",
    },
  ];

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }
  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </Header>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <ListHeader title="Partidas agendadas" subTitle="Total 6" />

        <FlatList
          style={styles.matches}
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Background>
  );
}
