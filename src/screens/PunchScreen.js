import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Camera } from 'expo-camera';
import {Video} from 'expo-av';

export default function PunchScreen() {
  
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type,setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect (() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
    })();
  },  []);
  if (hasCameraPermission === null || hasAudioPermission === null){
    return <View />;
  }

  if (hasCameraPermission === false || hasAudioPermission === false){
    return <Text>No access to camera</Text>
  }

  return (
    <View style = {{flex:1}}>
      <View style={styles.cameraContainer}>
        <Camera
        ref ={ref =>setCamera(ref)}
        style = {styles.fixedRatio}
        type = {type}
        ratio = {'4:3'} />
        </View>
        
         <Video
      ref ={video}
      style={styles.video}
      source ={{uri: record,}}
      useNativeControls
      resizeMode='contain'
      isLooping
      onPlaybackStatusUpdate={status => setStatus(()=>status)}/>
      </View>
  )
  }
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "top",
        borderWidth: 0,
        borderColor: "gray",
      },
      fixedRatio: {
        flex:1,
        aspectRatio:1
      },
      video:{
        alignSelf: 'center',
        width:350,
        height: 220,
      },
    });