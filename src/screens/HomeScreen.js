import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, ScrollView, Image } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

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
    <ScrollView style={styles.container}>
      <View style={styles.view}>
      {userPost?.map((post) => (
        <Card style={styles.card}>
          <Text>{post.username}</Text>
          <Text>{post.caption}</Text>
          <Image
        style={styles.cardimg}
        source={{
          uri: post.image,
        }}
      />
      <Text>{post.likes}</Text>
      <Text>Comment</Text>
        </Card>
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
  },
  view:{
    justifyContent: "space-around"
  },
  card: {
    width: 320,
    height: 420,
    alignSelf: "center",
    marginTop:20,
  },
  cardimg: {
    alignSelf: "center",
    width: 280,
    height: 280,

  },
});
