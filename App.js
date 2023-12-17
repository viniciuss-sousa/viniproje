import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});

navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
  },
  error => console.log(error),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);

<MapView
  style={{ flex: 1 }}
  initialRegion={{
    latitude: initialLatitude,
    longitude: initialLongitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
 
</MapView>

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // Manipule os dados da resposta
  })
  .catch(error => {
    console.error('Erro na solicitação à API:', error);
  });
