import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useState } from 'react';

const clientID = '8087f46feaec4e2abd020d1f3d2d4053';
const redirectURI = 'soundcloud://callback';
const scope = 'tuanaaa truongtuan2422@gmail.com';
export default function Screen_Feed({ navigation }) {
  
  
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
