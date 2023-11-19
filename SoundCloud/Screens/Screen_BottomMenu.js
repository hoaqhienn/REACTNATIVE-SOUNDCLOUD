import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RiSoundcloudFill } from 'react-icons/ri';

import loginData from '../Data/login.json';

export default function Screen_BottomMenu({ navigation }) {
  console.log(loginData);
  const addNewUser = () => {
    // Tạo đối tượng người dùng mới
    const newUser = {
      id: 4,
      username: "user4",
      password: "password4",
    };

    // Tải dữ liệu hiện tại từ tệp login.js
    fetch('../Data/login.json')
      .then((response) => response.json())
      .then((data) => {
        // Thêm đối tượng người dùng mới vào mảng users
        data.users.push(newUser);

        // Ghi lại dữ liệu đã chỉnh sửa vào tệp login.js
        fetch('../Data/login.json', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      })
      .catch((error) => {
        console.error('Lỗi: ', error);
      });
  };
  return (
    // console.log(LoginScreen);
    <View style={styles.container}>

      <RiSoundcloudFill style={{
        marginTop: 100
      }} color='#fff' size={100} />
      <Text style={{
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 300,
        marginBottom: 40
      }}>Find music you love.<br />
        Discover new artists.</Text>
      <Pressable
        onPress={() => (navigation.navigate('SignUp'))}
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
      {/* {loginData && (
        <View style={{ marginTop: 20 }}>
        {loginData.users.map((user) => (
          <View key={user.id}>
            <Text>ID: {user.id}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Password: {user.password}</Text>
          </View>
        ))}
      </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
