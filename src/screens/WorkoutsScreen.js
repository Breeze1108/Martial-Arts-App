import { View, Text, Pressable, StyleSheet } from "react-native";
import React, {useState, useEffect} from 'react';

export default function WorkoutsScreen ({ navigation }) {
    const [show, setShow] = useState(false);
    return (
        <View>
            <Text>Workout Screen</Text>
            <Pressable onPress={() => {
            navigation.navigate("Punch");
          }}>
            <Text style={styles.punch}>Boxing Workout</Text>
            </Pressable>
            <Text style={styles.kick}>Kick Workout</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    punch: {
        fontSize:50,
    },
    kick: {
        fontSize: 50
    }
});
