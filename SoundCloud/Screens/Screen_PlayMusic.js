import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image, Button } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import { Feather, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { ContextMusic } from '../Context/ContextMusic';
const TRACK_URL = 'https://res.cloudinary.com/soundcloudreactnative/video/upload/v1699948060/music/simpgai808.mp3';
export default function Screen_PlayMusic({ navigation, route }) {
  const [data, setData] = useState([]);


  const { musicdata,loadMusic, sound,pauseTrack, playTrack, stopTrack } = useContext(ContextMusic);
  console.log(route.params.item.url);

  const [musicurl, setMusicurl] = useState('');
  useEffect(() => {
    stopTrack();
    setMusicurl(route.params.item);
    loadMusic(route.params.item.url);
    // playTrack();
  }, [route.params.item.url]);
console.log(sound);
useEffect(() => {
  playTrack();
}, []);
  // const pauseTrack = async () => {
  //   await sound.pauseAsync();
  // }
  // const [sound, setSound] = useState();

  // const loadTrack = async () => {
  //   const { sound } = await Audio.Sound.createAsync({
  //     uri: route.params.item.url
  //   });

  //   setSound(sound);
  // }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: route.params.item.img
        }}

      />
      <Pressable style={{marginTop:50}} onPress={() => navigation.goBack()}><Text>Go back</Text></Pressable>
      <View>
        <View>
          <Text numberOfLines={2} style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{route.params.item.musicname} - {route.params.item.singer}</Text>
          
        </View>
      </View>
      <View style={{ marginTop: 150 }}>
        <Button title="Play" onPress={playTrack} />
        <Button title="Pause" onPress={pauseTrack} />
      </View>

      <Image style={{ width: 200, height: 400, resizeMode: 'contain' }}
        source={
          { uri: musicurl.img }
        } />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="hearto" size={21} color="white" style={{ paddingRight: 10 }} />
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
            1,3K
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="comment-text-outline" size={24} color="white" />
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
            5
          </Text>
        </View>
        <Feather name="share-2" size={24} color="white" />
        <MaterialIcons name="playlist-play" size={35} color="white" />
        <Entypo name="dots-three-vertical" size={20} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252A2F',
    alignItems: 'center',

  },
  img: {
    ...StyleSheet.absoluteFillObject,
    width: 'null',
    height: 'null',
    resizeMode: 'stretch',
    borderRadius: 30,
  }
});
