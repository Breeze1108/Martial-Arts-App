import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  const [show, setShow] = useState(false);
  return (
   <ScrollView>
    <View style={styles.container}>
      <Ionicons name="person" size={140} color='lightgrey' style={styles.pfp} />
      <View style={styles.nameContainer}>
        <TextInput style={styles.name}>Fabrizio Bernal</TextInput>
      </View>
      <View style={styles.info}>
        <View style={styles.ageContainer}>
          <TextInput style={styles.age}>17 Years Old</TextInput>
        </View>
        <View style={styles.maContainer}>
          <TextInput style={styles.ma}>Boxing</TextInput>
        </View>
      </View>

      <View style={styles.expContainer}>
        <TextInput style={styles.exp}>7 Years of experience</TextInput>
      </View>

      <View style={styles.bioContainer}>
        <TextInput style={styles.bio}>Bio </TextInput>
      </View>
    </View>
    </ScrollView>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "top",
    borderWidth: 0,
    borderColor: "gray",
    height: 1000,
  },
  pfp: {
    paddingTop: 50,
  },

  nameContainer: {
    display: "flex",
    width: 340,
    height: 64,
    paddingVertical: 13,
    paddingHorizontal: 12,
    justifyContent: "center",
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFB1B6",
  },
  name: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
  info: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 340,
    alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: 13,
  },
  ageContainer: {
    display: "flex",
    width: 150,
    height: 64,
    paddingVertical: 13,
    paddingHorizontal: 12,
    justifyContent: "center",
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFB1B6",
  },
  age: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
  maContainer: {
    display: "flex",
    width: 150,
    height: 64,
    paddingVertical: 13,
    paddingHorizontal: 12,
    justifyContent: "center",
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFB1B6",
  },
  ma: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
  expContainer: {
    display: "flex",
    width: 340,
    height: 64,
    paddingHorizontal: 12,
    justifyContent: "center",
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFB1B6",
    marginTop: 20,
    marginBottom: 20,
  },
  exp: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
  bioContainer: {
    width: 340,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#AFB1B6",
    paddingHorizontal: 12
  },
  bio: {
    width: 340,
    height: 200,
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
});
