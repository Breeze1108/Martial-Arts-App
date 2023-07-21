import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React, {useEffect, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ProfileScreen({ navigation }) {
  const [show, setShow] = useState(false);
  return (
      <View style={styles.container}>
        <View style={styles.editbar}>
            <Image onPress={() => {
            navigation.navigate("EditProfile");
          }}
            style={styles.edit}
            source={require('../../assets/edit-button.png')}/>
        </View>
        <Image
          style={styles.img}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          }}
        />
        <Text style={styles.name}>Name</Text>
        <View style={styles.info}>
          <Text style={styles.exp}>10 Years</Text>
          <Text style={styles.ma}>Taekwondo</Text>
        </View>
        <View style={styles.bio}>
          <Text style={styles.descr}>Bio </Text>
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
    borderColor: "gray",
  },
  editbar: {
    backgroundColor: "red",
    height: 50,
    width: 420,
    justifyContent: "flex-end"

  },
  edit: {
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 60,
    marginTop: 10,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 30,
    paddingTop: 200,
  },
  info: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
    width: 400,
  },
  exp: {
    fontSize: 40,
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  ma: {
    fontSize: 40,
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  bio: {
    width: 400,
    height: 375,
    borderWidth: 3,
    borderRadius: 5,
  },
  descr: {
    fontSize: 30,
  },
});
