import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.editbar}>
        <Pressable
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Ionicons name="pencil" size={50} color='black' style={styles.edit}/>
        </Pressable>
      </View>
      <Ionicons name="person" size={140} color='#BE3232' />
      {/* <Image style={styles.img} source={{uri:"https://globalnews.ca/wp-content/uploads/2017/05/oldestmanthumb.jpg?quality=85&strip=all"}} /> */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Fabrizio Bernal</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>17 Years Old</Text>
        </View>
        <View style={styles.maContainer}>
          <Text style={styles.ma}>Boxing</Text>
        </View>
      </View>

      <View style={styles.expContainer}>
        <Text style={styles.exp}>7 Years of experience</Text>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bio}>Bio </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "top",
    borderWidth: 0,
  },
  editbar: {
    backgroundColor: "white",
    height: 50,
    width: 420,
  },
  edit: {
    height: 50,
    width: 50,
    alignSelf: "flex-end",
  },
  img: {
    width: 100,
    height: 100,
    height: "auto",
    marginTop: 30,
    paddingTop: 200,
    borderRadius:50,
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
    borderColor: "black",
  },
  name: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
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
    borderColor: "black",
  },
  age: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
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
    borderColor: "black",
  },
  ma: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
  expContainer: {
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
    borderColor: "black",
    marginTop: 20,
    marginBottom: 20,
  },
  exp: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
  },
  bioContainer: {
    display: "flex",
    width: 340,
    height: 200,
    paddingVertical: 13,
    paddingHorizontal: 12,
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    flexDirection: "row",
  },
  bio: {
    fontFamily: "workSans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: "#AFB1B6",
    alignSelf: "flex-start",
  },
});
