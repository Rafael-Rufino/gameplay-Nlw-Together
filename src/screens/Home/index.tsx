import React, { useState, useCallback } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Appointment } from "../../components/Appointment";
import { AppointmentProps } from "../../components/Appointment/interface";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";

import { Container, Header, styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate(`AppointmentDetails, ${guildSelected}` as any);
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

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
        {loading ? (
          <Load />
        ) : (
          <>
            <ListHeader
              title="Partidas agendadas"
              subTitle={`Total ${appointments.length}`}
            />

            <FlatList
              style={styles.matches}
              data={appointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </Container>
    </Background>
  );
}
