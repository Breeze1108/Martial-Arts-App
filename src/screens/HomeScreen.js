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
      {userPost?.map((post) => (
        <Card style={styles.card}>
          <Text>{post.username}</Text>
          <Text>{post.caption}</Text>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: post.image,
        }}
      />
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
  },
  card: {
    width: 320,
    alignSelf: "center",
  },
  cardimg: {
    alignSelf: "center",
    width: 280,
  },
});
