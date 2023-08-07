import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function WorkoutsScreen({ navigation }) {
  const [show, setShow] = useState(false);
  return (
    // <View style={{ backgroundColor: "white" }}>
    //   <View style={styles.container}>
    //     <Image
    //       source={require("../../assets/logo.jpg")}
    //       style={{ alignSelf: "center", }}
    //     />
    //     <Text style={styles.Pick}>Choose AI Assisted Training Session</Text>
    //     <Pressable
    //       onPress={() => {
    //         navigation.navigate("Punch");
    //       }}
    //     >
    //       <ImageBackground
    //         source={require("../../assets/boxing.jpeg")}
    //         style={{
    //           width: 350,
    //           height: 180,
    //           borderRadius: 30,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text style={styles.text}>Boxing</Text>
    //       </ImageBackground>
    //     </Pressable>
    //     <Pressable
    //       onPress={() => {
    //         navigation.navigate("Kick");
    //       }}
    //     >
    //       <ImageBackground
    //         source={require("../../assets/kicking.jpeg")}
    //         style={{
    //           width: 350,
    //           height: 180,
    //           borderRadius: 30,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text style={styles.text}>Kicking</Text>
    //       </ImageBackground>
    //     </Pressable>
    //     <Pressable
    //       onPress={() => {
    //         navigation.navigate("Block");
    //       }}
    //     >
    //       <ImageBackground
    //         source={require("../../assets/blocking.jpeg")}
    //         style={{
    //           width: 350,
    //           height: 180,
    //           borderRadius: 30,
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text style={styles.text}>Blocking</Text>
    //       </ImageBackground>
    //     </Pressable>
    //   </View>
    // </View>

    //  Page Container
    <View style={styles.container}>
      {/* Page Content Container */}
      <View Style={styles.workoutContent}>
        {/* Logo Container */}
        <View style={styles.logo}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={{ alignSelf: "center" }}
          />
        </View>
        {/* Workout Feed Container */}
        <View style={styles.workoutFeed}>
          {/* boxing Menu Container */}
          <View style={styles.boxingMenu}>
            <Text style={styles.Pick}>Choose AI Assisted Training Session</Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Punch");
              }}
            >
              <View style={styles.menuImages}>
                <ImageBackground
                  source={require("../../assets/boxing.jpeg")}
                  style={{
                    width: 350,
                    height: 180,
                    borderRadius: 30,
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.text}>Boxing</Text>
                </ImageBackground>
              </View>
            </Pressable>
          </View>

          {/* Kicking Menu Container */}

          <Pressable
            onPress={() => {
              navigation.navigate("Kick");
            }}
          >
            <ImageBackground
              source={require("../../assets/kicking.jpeg")}
              style={styles.menuImages}
            >
              <Text style={styles.text}>Kicking</Text>
            </ImageBackground>
          </Pressable>

          {/* Blocking Menu Container */}
          <Pressable
            onPress={() => {
              navigation.navigate("Block");
            }}
          >
            <ImageBackground
              source={require("../../assets/blocking.jpeg")}
              style={styles.menuImages}
            >
              <Text style={styles.text}>Blocking</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  workoutContent: {
    marginTop: 80,
  },

  logo: {
    alignSelf: "center",
  },

  Pick: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 20,
  },
  text: {
    borderRadius: 30,
    marginLeft: 130,
    color: "white",
    fontSize: 30,
  },
  workoutFeed: {
    alignItems: "center",
  },
  menuImages: {
    width: 350,
    height: 180,
    borderRadius: "30%",
    justifyContent: "center",
    overflow:"hidden",
    marginTop: 40,
  },
});
