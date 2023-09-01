import { FlatList, View } from "react-native";
import CardPessoas from "../cardPessoas";
import Pessoas from "../../data/pessoas";

export default function Lista() {
  return (
    <View style={{ width: "90%" }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={Pessoas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardPessoas nome={item.nome}></CardPessoas>}
      />
    </View>
  );
}
