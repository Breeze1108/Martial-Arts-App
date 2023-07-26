import { View, Text, Pressable, StyleSheet } from "react-native";
import React, {useState, useEffect} from 'react';

export default function WorkoutsScreen ({ navigation }) {
    const [show, setShow] = useState(false);
    return (
        <View>
            <Pressable onPress={() => {
            navigation.navigate("Punch");
          }}>
            <Text style={styles.punch}>Box Workout</Text>
            </Pressable>
            <Pressable onPress={() => {
            navigation.navigate("Kick");
          }}>
            <Text style={styles.kick}>Kick Workout</Text>
            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    punch: {
        fontSize:50,
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
        alignSelf: "center",
        marginVertical: 150,
        textAlignVertical: "center"
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
