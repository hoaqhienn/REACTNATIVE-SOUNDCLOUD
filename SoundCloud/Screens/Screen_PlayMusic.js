import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image, Button } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import { Ionicons, Foundation, MaterialCommunityIcons, Feather, AntDesign, Entypo, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { ContextMusic } from '../Context/ContextMusic';
const TRACK_URL = 'https://res.cloudinary.com/soundcloudreactnative/video/upload/v1699948060/music/simpgai808.mp3';
export default function Screen_PlayMusic({ navigation, route }) {


  const { data,loadMusic, sound, pauseTrack, playTrack, stopTrack, musicLoadPlay, 
    dataPlay, SetIconLove,currentIconLove,SetIconAdd, currentIconAdd,  SetIcon,currentIcon,setStatusPlay,SetIconAdd1,currentIconAdd1 } = useContext(ContextMusic);
  // useEffect(() => {
  //   // setMusicurl(dataPlay);
  //   loadMusic(dataPlay.url);
  // }, [dataPlay.url]);
  // console.log(sound);
  // useEffect(() => {
  //   playTrack();
  // }, []);
  console.log(dataPlay.url);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: dataPlay.img
        }}

      />
      <Pressable style={{ marginTop: 50 }} onPress={() => navigation.goBack()}><Text>Go back</Text></Pressable>
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal:20}}>
        <View>
          <Text numberOfLines={2} style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',backgroundColor:'black'}}>{dataPlay.musicname}</Text> 
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', color:'gray', backgroundColor:'black'}} >{dataPlay.singer} </Text>
          <View style = {{flexDirection:'row', alignItems:'center', backgroundColor:'black'}}>
                <MaterialCommunityIcons name="playlist-music" size={24} color="gray" />
                <Text style={{color:'gray'}}>   Behind this track</Text>
          </View>
        </View>
        <View>
            <Pressable onPress={()=> navigation.goBack()}><AntDesign name="downcircle" size={40} color="white" /></Pressable>
            <Pressable
              style={{backgroundColor:'#fff',borderRadius:50, position:'relative'}}
              onPress={() => {
                SetIconAdd1();
              }}     
            >
              {currentIconAdd1}
            </Pressable>
        </View>
      </View>
      <View style={{ marginTop: 150 }}>
        <Button title="Play" onPress={playTrack} />
        <Button title="Pause" onPress={pauseTrack} />
      </View>
{/* 
      <Image style={{ width: 200, height: 400, resizeMode: 'contain' }}
        source={
          { uri: dataPlay.img }
        } /> */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '8%', bottom: 0,marginTop:20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable
              // style={{padding:5,backgroundColor:'#fff',borderRadius:50}}
              onPress={() => {
                SetIconLove();
              }}     
            >
              {currentIconLove}
            </Pressable>
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
    height: '100%',

  },
  img: {
    ...StyleSheet.absoluteFillObject,
    width: 'null',
    height: '92%',
    resizeMode: 'stretch',
    borderRadius: 30,
  }
});
