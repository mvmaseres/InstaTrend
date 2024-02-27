import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>InstaTrend</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12372A',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  appTitle: {
    color: '#FBFADA',
    fontFamily: 'Arial',
    fontWeight: '900',
    fontSize: 40,
},
});
