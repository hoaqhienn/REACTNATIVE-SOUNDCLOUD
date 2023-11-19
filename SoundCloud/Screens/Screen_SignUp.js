import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Screen_SignUp({ navigation }) {
  const icon1 = <Ionicons name="ios-eye" size={24} color="black" />
  const icon2 = <Ionicons name="ios-eye-off" size={24} color="black" />
  const [currentIcon, setCurrentIcon] = useState(icon1)
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 30,
        width: '100%',
        marginBottom: 20
      }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#F3F3F3',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            marginRight: 20
          }}>
          <AntDesign name="arrowleft" size={26} color="black" />
        </Pressable>
        <Text style={{
          fontSize: 20,
          fontWeight: '610'
        }}>Create account</Text>
      </View>
      <Pressable style={{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        marginBottom: 15
      }}>
        <Image source={require('../assets/google.png')} style={{ width: 25, height: 25 }} />
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 5
        }}>Continue width Google</Text>
      </Pressable>

      <Pressable style={{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1878F3',
        borderRadius: 5,
        marginBottom: 15
      }}>
        <FontAwesome5 name="facebook" size={24} color="white" />
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 5,
          color: '#fff'
        }}>Continue with Facebook</Text>
      </Pressable>
      <Pressable style={{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 5
      }}>
        <Ionicons name="ios-logo-apple" size={24} color="white" />
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 5,
          color: '#fff'
        }}>Continue with Apple</Text>
      </Pressable>


      <TextInput
        style={{
          backgroundColor: '#FFF',
          width: '90%',
          marginTop: 20,
          height: 50
        }}
        label="Email"
        underlineColor='#cfcfcf'
        labelColor='red'
      />
      <View style={{
        width: '90%', position: 'relative', flexDirection: 'row', alignItems: 'center', marginTop: 20, borderBottomWidth: 1,
        borderBottomColor: '#bbb'
      }}>

        <TextInput
          style={{
            backgroundColor: '#FFF',
            width: '100%',
            fontSize: 13,
            color: 'red',
            height: 50
          }}
          label="Password (min. 8 characters)"
          underlineColor='none'
        />
        <Pressable
          onPress={() => {
            if (currentIcon.props.name === "ios-eye") {
              console.log(icon1.props.name);
              setCurrentIcon(icon2)
            }
            else {
              setCurrentIcon(icon1)
            }
          }}
          style={{ position: 'absolute', right: 0 }}>
          {currentIcon}
        </Pressable>
      </View>
      <Pressable style={{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 5,
        marginTop: 40
      }}>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          marginLeft: 5,
          color: '#fff'
        }}>Sign up width email</Text>
      </Pressable>
      <Text style={{ fontSize: 10, padding: 20 }}>
        If you click “Continue with Google” and are not a SoundCloud user, you will be
        registered and you agree to SoundCloud’s Terms & Conditions and Privacy
        Policy.
      </Text>
      <Text style={{ fontSize: 10, paddingLeft: 20, marginBottom: 20, paddingRight: 20 }}>
        We may use your email and devices for updates and tips on SoundCloud’s
        products and services, and for activities notifications. You can unsubscribe for
        free at any time in your notification settings.
      </Text>
      <Text style={{ fontSize: 10, paddingLeft: 20, paddingRight:20 }}>
        We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
      </Text>

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
