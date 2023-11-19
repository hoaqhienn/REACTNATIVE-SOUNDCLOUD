import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function Screen_Login({ navigation }) {
  const icon1 = <Ionicons name="ios-eye" size={24} color="black" />
  const icon2 = <Ionicons name="ios-eye-off" size={24} color="black" />
  const [currentIcon, setCurrentIcon] = useState(icon1)


  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/account')
      .then(response => response.json())
      .then(data => {
        setdata(data);
      })
  }, []);

  console.log(data);

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const checkAccount = () => {
    data.map(item => {
      if (item.username === username && item.password === password) {
        // return console.log('ok');
        return navigation.navigate('Home')
        
      }
      else {
        return console.log('no');
      }
    })
  }


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
        }}>Sign in</Text>
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
        {/* <AntDesign name="google" size={24} color="black" /> */}
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
        value={username}
        onChangeText={username => setUsername(username)}

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
        value={password}
        onChangeText={password => setPassword(password)}
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
          {/* <Ionicons name="ios-eye-off" size={24} color="black" /> */}
        </Pressable>

      </View>
      <Pressable
        onPress={() => checkAccount()}
        style={{
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
        }}>Continue</Text>
      </Pressable>
      <Pressable style={{ width: '90%' }}><Text style={{ fontSize: 10, paddingTop: 20, color: '#01389D' }}>Forgot your pasword?</Text></Pressable>
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
