import React from "react";
import MapView, { Marker } from "react-native-maps";

import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <MapView showsPointsOfInterest="false" [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ] style={styles.map}   
      >
        <Marker
          coordinate={{
            latitude: 34.0215812,
            longitude: -118.2706439,
          }}
        >
          <View>
            <Text>City of Angels Boxing</Text>
            {/* <Image /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 34.056752,
            longitude: -118.282244,
          }}
        >
          <View>
            <Text>Won Brazilian Jiu Jitsu</Text>
            {/* <Image /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 33.9961146,
            longitude: -118.2740608,
          }}
        >
          <View>
            <Text>South L.A. Boxing Gym</Text>
            {/* <Image /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 34.04273,
            longitude: -118.25275,
          }}
        >
          <View>
            <Text>Gomez Jiu-Jitsu</Text>
            {/* <Image /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 33.90261,
            longitude: -118.3713,
          }}
        >
          <View>
            <Text>Rodrigo Freitas Brazilian Jiu-Jitsu</Text>
            {/* <Image /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 33.95457,
            longitude: -118.11229,
          }}
        >
          <View>
            <Text>Academy Jiu Jitsu and Kickboxing|Headquarters</Text>
            {/* <Image /> */}
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: 34.02275,
            longitude: -118.1694,
          }}
        >
          <View>
            <Text>Champions BJJ</Text>
            {/* <Image /> */}
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  default: [],
  hide: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
  ],
});
