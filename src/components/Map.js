import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import { Image } from 'react-native-elements';
const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
    >
      <Marker
        description="Benzin:13.81 ~ Otogaz:9.37"
        coordinate={{
          latitude: 37.77574617432441,
          longitude: 30.548726927445045,
        }}
      >
        <Image
          style={styles.marker}
          source={require('../../assets/shell-icon.png')}
        />
      </Marker>
      <Marker
        description="Shell davraz-isparta"
        coordinate={{
          latitude: 37.77642277562303,
          longitude: 30.56999603244306,
        }}
      >
        <Image
          style={styles.marker}
          source={require('../../assets/shell-icon.png')}
        />
      </Marker>
      <Marker
        description="Shell  cunur-isparta"
        coordinate={{
          latitude: 37.815048981140436,
          longitude: 30.533535599380237,
        }}
      >
        <Image
          style={styles.marker}
          source={require('../../assets/shell-icon.png')}
        />
      </Marker>
      <Marker
        description="Opet bahcelievler-isparta"
        coordinate={{
          latitude: 37.774313898329346,
          longitude: 30.549887146831917,
        }}
      >
        <Image
          style={styles.marker}
          source={require('../../assets/opet-logo2.png')}
        />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
    flex: 1,
  },
  marker: {
    height: 15,
    width: 15,
  },
});

export default Map;
