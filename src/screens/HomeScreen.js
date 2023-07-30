import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";

const baseUrl = "http://localhost:8080"

useEffect (()=> {
  async function getData() {
    try {
      await axios
      .get (`${baseUrl}/events/browse`)
      .then ((response) => {
        setData (response.data);
      })
    } catch (err) {
      console.log(err)
    }
  }

  getData();
},[]);
    

export default function Home({ navigation }) {
  <ScrollView>
    <View>
      <Text> Home Screen </Text>
    </View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
