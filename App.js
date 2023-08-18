import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button,  } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      
      
        <Text>Bungou Stray Dogs</Text>
        
        <Image
          source={{
            uri: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/CBR-Featured-Image-Chuuya-Nakahara.jpg',
          }} style={styles.img}
        />

    <Text>Digite o nome desse personagem:</Text>
    <TextInput style={styles.input} placeholder="..."></TextInput>
    <Button
        title="Enviar"
        color="#5c0802"
      />

   
  

      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height:35,
        width:'80%',
        marginLeft:5,
        borderColor: 'gray',
          borderWidth: 1,
  },

  scrollView: {
    backgroundColor: 'gray',
    marginHorizontal: 20,
  },

  img: {
    width: 200,
    height: 200,
    margin: 20
  },
});
