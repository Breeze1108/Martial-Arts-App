import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React, {useEffect, useState} from "react";

export default function ProfileScreen({ navigation }) {
  const [show, setShow] = useState(false);
  return (
      <View style={styles.container}>
        <View style={styles.editbar}>
          <Pressable onPress={() => {
            navigation.navigate("EditProfile");
          }}>
            <Image
            style={styles.edit}
            source={require('../../assets/edit-button.png')}/>
          </Pressable>
        </View>
        <Image
          style={styles.img}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
          }}
        />
        <Text style={styles.name}>Name</Text>
        <View style={styles.info}>
          <Text style={styles.age}>17 Years Old</Text>
          <Text style={styles.ma}>Boxing</Text>
        </View>
        <View>
          <Text style={styles.exp}>7 Years of experience</Text>
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
    backgroundColor: "white",
    height: 50,
    width: 420,
  },
  edit: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end'
  },
  name: {
    display: 'flex',
    width: 340,
    height: 64,
    padding: 13,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1, 
    borderStyle:'solid',
    borderColor: '#AFB1B6'
  },
  exp: {
    display: 'flex',
    width: 340,
    height: 64,
    padding: 13,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1, 
    borderStyle:'solid',
    borderColor: '#AFB1B6'
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 30,
    paddingTop: 200,
  },
  info: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 340,
    alignContent: 'center',
    justifyContent: "space-between"
  },
  age: {
    display: 'flex',
    width: 150,
    height: 64,
    padding: 13,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1, 
    borderStyle:'solid',
    borderColor: '#AFB1B6',
    fontSize: 16,
  },
  ma: {
    display: 'flex',
    width: 150,
    height: 64,
    padding: 13,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1, 
    borderStyle:'solid',
    borderColor: '#AFB1B6'
  },
  bio: {
   
  },
  descr: {
    display: 'flex',
    width: 340,
    height: 165,
    paddingVertical: 13,
    paddingHorizontal: 12,
    alignItems: 'flexStart',
    gap: 10,
    flexShrink: 0,
    borderRadius: 10,
    borderWidth: 1, 
    borderStyle:'solid',
    borderColor: '#AFB1B6'

  },
});
