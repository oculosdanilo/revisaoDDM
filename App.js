import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableHighlight } from "react-native";
import { useState } from "react";
import Lista from "./src/components/lista";

export default function App() {
  const [visivel, setVisivel] = useState(false);
  const toggleSwitch = () => setVisivel((previousState) => !previousState);

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
      <TouchableHighlight style={styles.btn}>
        <Text>Enviar</Text>
      </TouchableHighlight>

      {visivel ? <Lista /> : <View style={{ height: 98 }}></View>}

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>Mostrar lista{"   "}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#ffa29c" }}
          thumbColor={visivel ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={visivel}
        />
      </View>

      <TouchableWithoutFeedback>
        <View style={styles.button2}>
          <Text>Denunciar</Text>
        </View>
      </TouchableWithoutFeedback>

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
    marginTop: 20,
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

  btn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#ffa29c",
  },

  button2: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
});
