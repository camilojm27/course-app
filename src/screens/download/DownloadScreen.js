import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DownloadScreen() {
  return (
    <View style={styles.container}>
      <Text>Download Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
