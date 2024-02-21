import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={[styles.numero, {color:'blue'}]}>02</Text>
      <Text style={[styles.sala, {backgroundColor:'pink'}]}>7</Text>
      <Text style={[styles.texto, {color:'blue'}]}>Ana Clara Fernandes de Oliveira</Text>
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
  texto: {
   fontSize: 30, 
   fontWeight: 'bold',
   alignItems: 'center',
   justifyContent: 'center',
   left: '30%',
  },
  numero: {
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
