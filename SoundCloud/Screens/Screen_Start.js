import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Screen_Start({ navigation }) {

  return (
    <View style={styles.container}>
      <FontAwesome name="soundcloud" size={100} style={{
        marginTop: 100
      }} color="white" />
      <Text style={{
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 300,
      }}>Find music you love.</Text>
        <Text style={{
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 40
      }}>Discover new artists.</Text>
      <Pressable
        onPress={() => (navigation.navigate(''))}
        style={{
          width: '90%',
          height: 55,
          backgroundColor: '#FF5500',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginBottom: 20
        }}>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold', color: '#fff',
        }}>Create an account</Text>
      </Pressable>
      <Pressable
        onPress={()=>navigation.navigate('Login')}
        style={{
          width: '90%',
          height: 55,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
        }}>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold'
        }}>I already have an account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
});
