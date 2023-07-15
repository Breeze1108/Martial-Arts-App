import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation/rootnavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
