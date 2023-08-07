import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const LoadAndRunModel = () => {
  const cameraRef = useRef(null);
  const [model, setModel] = useState(null);
  const [pose, setPose] = useState('not_pose1'); // Initialize state to 'not_pose1'
 const [debugString, setDebugString] = useState('')
  const loadModel = async () => {
    const model = await tf.loadLayersModel('http://127.0.0.1:8080/model.json');
    setModel(model);
    setDebugString('Model loaded successfully');
  }

  const predict = async () => {
    if (model !== null && cameraRef.current) {
      // Capture the image
      const img = await cameraRef.current.takePictureAsync();

      // Make Detections
      const imageTensor = img.dataSync();
      const reshapedTensor = imageTensor.reshape([-1, 150, 150, 3]);
      const prediction = await model.predict(reshapedTensor).data();  // Get prediction
 
      const probability = prediction[0]; // Get the probability of the pose
 
      // If the probability is above the threshold, update the state to 'pose1'
      if (probability > 0.5) {
       setDebugString(`Model's best guess is pose1 with a probability of ${probability}`);
        setPose('pose1');
      } else {
        // If the model's confidence is below the threshold, leave the state as 'not_pose1'
        setDebugString(`Model's confidence in pose1 is ${probability}, which is below the threshold`);
        setPose('not_pose1');
      }
    }
  }

  // load the model when the component mounts
  useEffect(() => {
    loadModel();
  }, []);

  // continuously make predictions
  useEffect(() => {
    const interval = setInterval(() => {
      predict();
    }, 1000);
    return () => clearInterval(interval);
  }, [model]);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} />
      <Text style={styles.text}>{pose}</Text>
      <Text style={styles.newText}>{debugString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  text: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  newText: { // Define a new style for the new text box
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});

export default LoadAndRunModel;