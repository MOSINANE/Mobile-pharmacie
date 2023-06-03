import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import PharmacieList from './PharmacieList';
// import Map from './maps.js';

export default function App() {
  const handleGoToMap = () => {
    // Navigation logic to go to the Map screen
    // You can replace the `navigate` method with the appropriate navigation logic from your navigation library
    navigation.navigate(Map);
  };

  return (
      <ImageBackground
          source={{
            uri:
                'https://w0.peakpx.com/wallpaper/158/292/HD-wallpaper-pharmacy-png-stickers-background-cute-pharmacy-thumbnail.jpg',
          }}
          style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PharmacieList />
          <Button title="Go to Map" onPress={handleGoToMap} />
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
