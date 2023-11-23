import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import { Ionicons, Foundation, Entypo, Feather, AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { ContextMusic } from '../Context/ContextMusic';


export default function Screen_Track({ navigation, route }) {
  // useEffect(() => {
  //   if (currentIcon.props.name === "pause") {
  //     stopTrack();
  //   }
  //   console.log(lastPosition);
  // }, []);


  // const [data, setData] = useState([]);
  const { data, loadMusic, sound, pauseTrack, playTrack, 
          stopTrack, musicLoadPlay, dataPlay, SetIconPlay ,
          SetIconLove, currentIconLove,SetIconAdd, currentIconAdd,
          SetIcon,currentIcon, playAndSeek,lastPosition,soundTest,
        SetIconAdd1,currentIconAdd1 } = useContext(ContextMusic);

  const filteredData = data.filter(item => item.singer.includes(route.params.item.singer))
  const [musicName, setMusicName] = useState([]);
  // useEffect(() => {
  //   stopTrack();
  //   setMusicName(dataPlay)
  // }, [dataPlay]);
// console.log(lastPosition);
  useEffect(() => {
       loadMusic(musicName.url, lastPosition)
       playTrack();
  }, [musicName]);

  const [data1, setData1] = useState([]);
  useEffect(() => {
    setData1(route.params.item);
  }, [route.params.item]);


  const musicLoadPlayTest = (id) => {
    fetch('https://655e2b5a9f1e1093c59aa3d1.mockapi.io/api/music/'+id)
        .then(response => response.json())
        .then(data => {
            setMusicName(data);
        })
}
  return (
    <View style={styles.container}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '13%',
        paddingHorizontal: 20,
        paddingTop: 35
      }}  >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#F3F3F3', height: 35, width: 35, borderRadius: 20, justifyContent: 'center', alignItems: 'center'
          }}>
          <AntDesign name="arrowleft" size={27} color="black" />
        </Pressable>
        <Pressable style={{
          backgroundColor: '#F3F3F3', height: 35, width: 35, borderRadius: 20, justifyContent: 'center', alignItems: 'center'
        }}>
          <FontAwesome5 name="chromecast" size={23} color="black" />
        </Pressable>
      </View>
      <View
        style={{ width: '100%', height: '81%' }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row' }}>
            <Pressable>
              <View style={{
                width: 90,
                height: 90,
                backgroundColor: '#3D4651',
                position: 'absolute',
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 3,
              }} ></View>
              <View style={{
                width: 90,
                height: 90,
                backgroundColor: 'black',
                position: 'absolute',
                marginTop: 15,
                marginLeft: 15,
                borderRadius: 3,
              }} ></View>
              <View style={{ margin: 10, borderRadius: 3, width: 100, height: 100 }}>
                <Image style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius: 3 }}
                  source={
                    { uri: route.params.item.img }
                  } />
              </View>
            </Pressable>
            <View style={{ paddingTop: 10, marginTop: 10 }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                }}>{route.params.item.musicname} - {route.params.item.singer}</Text>
              <Text style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#999999',
              }}>
                Playlist 18 Tracks
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Image
                  style={{ width: 28, height: 28, resizeMode: 'contain', borderRadius: 50, marginRight: 10 }}
                  source={
                    { uri: route.params.item.img }
                  }
                />
                <Text style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#999999',
                }}>Made for <Text style={{ fontWeight: 'bold', color: '#656565' }}>Trương Văn Tuấn</Text></Text>
              </View>
            </View>
          </View>

          <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <AntDesign name="hearto" size={21} color="gray" style={{ marginRight: 7 }} />
              <Text>0</Text>
              <Entypo style={{ paddingLeft: 20 }} name="dots-three-vertical" size={18} color="gray" />
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>

              <FontAwesome name="random" size={20} color="gray" />
              <Ionicons name="ios-play-circle" size={60} color="black" />
            </View>
          </View>

          <View style={{ width: '100%' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{ width: '100%' }}
              data={filteredData}
              renderItem={({ item }) => (
                <View>
                  <Pressable
                    style={{ flexDirection: 'row', padding: 10, width: '100%', alignItems: 'center', paddingLeft: 10 }}
                    onPress={() => { musicLoadPlay(item.id), SetIconPlay(), musicLoadPlayTest(item.id),stopTrack()}}>
                    <View style={{}}>
                      <Image style={{ width: 70, height: 70, resizeMode: 'contain', borderRadius: 3 }}
                        source={
                          { uri: item.img }
                        } />
                    </View>
                    <View style={{ width: 140, paddingLeft: 10 }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 15,
                          fontWeight: '600',
                        }}>{item.musicname} - {item.singer}</Text>
                      <Text style={{
                        fontSize: 13,
                        fontWeight: '400',
                        color: '#999999'
                      }}>{item.singer}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="ios-play-sharp" size={18} color="gray" />
                        <Text style={{
                          fontSize: 13,
                          fontWeight: '400',
                          color: '#999999'
                        }}>{item.view}</Text>
                      </View>
                    </View>
                    <Pressable
                      onPress={() => console.log("a")}
                      style={{ marginLeft: 160, position: 'relative' }}>
                      <Entypo name="dots-three-vertical" size={20} color="gray" />
                    </Pressable>
                  </Pressable>
                </View>

              )}
              keyExtractor={item => item.id}
            />

          </View>
        </ScrollView>

      </View>
      <Pressable
        onPress={() => navigation.navigate('PlayMusic')}
        style={{ backgroundColor: 'black', height: '6%', width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <Foundation name="play" size={26} color="white" style={{ paddingHorizontal: 20 }} /> */}
          <Pressable
            onPress={() => {
              SetIcon();
            }}
            style={{ position: 'relative' }}>
            {currentIcon}
          </Pressable>
          <View style={{ width: '70%' }}>
            <Text numberOfLines={1} style={{ color: 'white', fontSize: 13, fontWeight: '700' }}>{dataPlay.musicname} - {dataPlay.musicproducer}</Text>
            <Text style={{ color: 'white', fontSize: 13, }}> {dataPlay.singer}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          {/* <Feather name="user-plus" size={23} color="white" style={{ paddingRight: 20 }} /> */}

          <Pressable
            onPress={() => {
              SetIconAdd()
            }}
            style={{ position: 'relative' }}>
            {currentIconAdd}
          </Pressable>
          <Pressable
            onPress={() => {
              SetIconLove();  
            }}
            style={{ position: 'relative' }}>
            {currentIconLove}
          </Pressable>
        </View>
      </Pressable>
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
