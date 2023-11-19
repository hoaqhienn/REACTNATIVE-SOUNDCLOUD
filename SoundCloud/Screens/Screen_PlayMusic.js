import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image,Button } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
const TRACK_URL = 'https://res.cloudinary.com/soundcloudreactnative/video/upload/v1699948060/music/simpgai808.mp3';
export default function Screen_PlayMusic({ navigation, route }) {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music')
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);
  //       console.log(data);
  //     })
  // }, []);

  console.log(route.params.item);

  const [musicurl, setMusicurl] = useState('');
  useEffect(() => {
    setMusicurl(route.params.item);
      loadTrack();
  }, []);

  const playTrack = async () => {
    await sound.playAsync();
    const status = await sound.getStatusAsync();
    console.log(status.durationMillis);
  }

  const pauseTrack = async () => {
    await sound.pauseAsync();
  }
  const [sound, setSound] = useState();

  const loadTrack = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: route.params.item.url
    });

    setSound(sound);
    console.log(sound);
  }

  return (
    <View style={styles.container}>

      <Button title="Play" onPress={playTrack} />
      <Button title="Pause" onPress={pauseTrack} />

      <Image style={{width:200, height:400, resizeMode:'contain'}} 
      source={
        {uri:musicurl.img}
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:100
  },
});


// export default function App() {
// console.log();
//   const [sound, setSound] = useState();

//   const loadTrack = async () => {
//     const { sound } = await Audio.Sound.createAsync({
//       uri: TRACK_URL
//     });

//     setSound(sound);
//     console.log(sound);
//   }
//   useEffect(() => {
//       loadTrack();
//   }, []);
//   const playTrack = async () => {
//     await sound.playAsync();
//     const status = await sound.getStatusAsync();
//     console.log(status.durationMillis);
//   }

//   const pauseTrack = async () => {
//     await sound.pauseAsync();
//   }

//   // ...

//   return (
//     <View style={{marginTop:200}}>
//       {/* <Button title="Load" onPress={loadTrack} /> */}
//       <Button title="Play" onPress={playTrack} />
//       <Button title="Pause" onPress={pauseTrack} />

//       <Image style={{width:200, height:400, resizeMode:'contain'}} 
//       source={
//         // require('./assets/icon.png')
//         {uri:'https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg'}
//       } />
//     </View>
//   );

// }