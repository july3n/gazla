import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';

const MapScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Map />
      {err ? (
        <Text style={styles.error}>Please enable location services</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default MapScreen;
