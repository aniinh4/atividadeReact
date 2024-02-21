import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={[styles.computador, {color:'blue'}]}>02</Text>

      <Text style={[styles.sala, {backgroundColor:'pink'}]}>7</Text>

      <Text style={[styles.nome, {color:'blue'}]}>Ana Clara Fernandes de Oliveira</Text>

      <Text style={[styles.computador, {backgroundColor:'pink', color:'blue'}]}>Senai 2024</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nome: {
   fontSize: 30, 
   fontWeight: 'bold',
   alignItems: 'center',
   justifyContent: 'center',
   left: '30%',
  },

  computador: {
    fontSize: 25, 
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
    right: '30%',
    top: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
   },
   sala:{
   fontSize: 20,
   }
});
