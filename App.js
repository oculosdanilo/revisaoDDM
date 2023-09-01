import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import CardPessoas from "./src/components/cardPessoas/index";
import Pessoas from "./src/data/pessoas";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bungo Stray Dogs</Text>
      <Image
        source={{
          uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/CBR-Featured-Image-Chuuya-Nakahara.jpg",
        }}
        style={styles.img}
      />
      <Text>Digite o nome desse personagem:</Text>
      <TextInput style={styles.input} placeholder="..."></TextInput>
      <Button style={styles.btn} title="Enviar" color="#5c0802" />

      <View style={{ width: "90%" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Pessoas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardPessoas nome={item.nome}></CardPessoas>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 35,
    width: "80%",
    marginLeft: 5,
    borderColor: "gray",
    borderWidth: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  scrollView: {
    backgroundColor: "gray",
    marginHorizontal: 20,
  },

  img: {
    width: 200,
    height: 200,
    margin: 20,
  },

  header: {
    fontSize: 22,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 15,
  },

  titulo: {
    fontSize: 35,
  },
});
