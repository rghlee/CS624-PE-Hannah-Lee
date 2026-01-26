import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function HelloWorldScreen() {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>Hannah Lee</Text>
      <Text style={styles.text}>MSCY</Text>
      <Text style= {styles.text}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 30,
    margin: 0,
  },
});