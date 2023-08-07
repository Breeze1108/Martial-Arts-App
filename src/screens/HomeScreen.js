import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, ScrollView, Image } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useFonts } from "expo-font";
import { FontAwesome5 } from '@expo/vector-icons'; 



export default function Home({ navigation }) {
  let [userPost, setUserPost] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        await axios
          .get(`http://localhost:3002/get-all-posts`)
          .then((res) => setUserPost(res.data.profile));
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView style={styles.container}>
        <Image
          source={require("../../assets/logo.jpg")}
          style={{ alignSelf: "center", }}
        />
        <View style={styles.view}>
          {userPost?.map((post) => (
            <Card style={styles.card}>
              <Text style={styles.user}>{post.username}</Text>
              <Text style={styles.caption}>{post.caption}</Text>
              <Image
                style={styles.cardimg}
                source={{
                  uri: post.image,
                }}
              />
              <View style={styles.UserFBcon}>
              <Text style={styles.comment}>Comment</Text>
              <FontAwesome5 name="fist-raised" style={styles.icon}size={24}/>
                <Text style={styles.likes}>{post.likes}</Text>
            </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "white",
  },
  view: {
    justifyContent: "space-around",
  },
  card: {
    width: 320,
    height: 420,
    alignSelf: "center",
    marginTop: 20,
  },
  user: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  caption: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 15,
  },
  cardimg: {
    marginTop: 5,
    alignSelf: "center",
    width: 280,
    height: 280,
  },
  UserFBcon: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon:{
    color: "black",
    marginLeft: 150
  },
  likes: {
    fontSize: 20,
  },
  comment: {
    marginTop: 5,
    fontSize: 15,
  },
});
