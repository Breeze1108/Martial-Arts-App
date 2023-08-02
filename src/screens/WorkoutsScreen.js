import { View, Image, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React, {useState, useEffect} from 'react';


export default function WorkoutsScreen ({ navigation }) {
    const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
            navigation.navigate("Punch");
          }}>
            <Text style={styles.boxingtext}>Boxing</Text>
            <Image source={require('../../assets/boxing.jpeg')}style={{width:350, height: 200, borderRadius: 30,}}></Image>
            </Pressable>
            <Pressable onPress={() => {
            navigation.navigate("Kick");
          }}>
            <Image source={require('../../assets/kicking.jpeg')}style={{width:350, height: 200, borderRadius: 30,}}></Image>
            </Pressable>
            <Pressable onPress={() => {
            navigation.navigate("Block");
          }}>
            <Image source={require('../../assets/blocking.jpeg')}style={{width:350, height: 200, borderRadius: 30,}}></Image>
            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 800,
        width: 350,
        alignSelf: "center",
        display: "flex",
        justifyContent:"space-evenly"


    },
    punch: {
        
    },
    kick: {
        fontSize: 50,
        display: "flex",
        width: 380,
        height: 180,
        paddingVertical: 13,
        paddingHorizontal: 12,
        justifyContent: "center",
        gap: 10,
        flexShrink: 0,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#AFB1B6",
        alignSelf: "center"
    }
});
