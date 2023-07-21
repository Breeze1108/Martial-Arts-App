import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Home({ navigation }) {
  const [show, setShow] = useState(false);
  const customMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        showsPointsOfInterest="false"
        provider={PROVIDER_GOOGLE}
        customMapStyle={customMapStyle}
        style={styles.map}
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
            <Text>Won Brazilian Jiu-Jitsu</Text>
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
          onPress={() => {
            navigation.navigate("Gym");
          }}
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
      {/* {show?<View><Pressable onPress={() => {
        navigation.navigate('Gym')
      }}><Text>GymData</Text></Pressable></View>:<View></View>} */}
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
  data: {
    backgroundColor: "red",
    padding: "20",
    zIndex: 10,
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
