import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image, TextInput } from 'react-native';

// import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Ionicons, Foundation, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
// import { TextInput } from 'react-native-paper';


export default function Screen_Search({ navigation, route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
  }, []);
  return (
    <View style={styles.container}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '13%',
        paddingHorizontal: 20,
        paddingTop: 35
      }} >
        <View style={{ width: '85%', height:35,backgroundColor: '#F3F3F3', flexDirection:'row', alignItems:'center' }}>
          <Feather name="search" size={24} color="black" style={{paddingHorizontal:10}} />
          <TextInput style={{ width: '85%', height: 35, backgroundColor: '#F3F3F3' }} />
        </View>
        <FontAwesome5 name="chromecast" size={23} color="black" />
      </View>
      <View
        style={{ width: '100%', height: '81%' }}
      >



      </View>
      <View style={{ backgroundColor: 'black', height: '6%', width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
        <Foundation name="play" size={26} color="white" style={{ paddingLeft: 20 }} />
        <View style={{ flexDirection: 'row' }}>
          <Feather name="user-plus" size={23} color="white" style={{ paddingRight: 20 }} />
          <AntDesign name="hearto" size={21} color="white" style={{ paddingRight: 20 }} />
        </View>
      </View>
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
