import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import { Ionicons, Foundation, FontAwesome5, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { ContextMusic } from '../Context/ContextMusic';


export default function Screen_Library({ navigation, route }) {
  const { data,loadMusic, sound, pauseTrack, playTrack, stopTrack, musicLoadPlay, dataPlay } = useContext(ContextMusic);
  return (
    <View style={styles.container}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '13%',
        paddingHorizontal: 20,
        paddingTop: 10
      }}  >
        <Text style={{
          fontSize: 20,
          fontWeight: '700',
        }} >Libary</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5 name="chromecast" size={23} color="#666666" />
          <Ionicons name="settings-outline" size={24} color="#666666" style={{ marginHorizontal: 20 }} />
          <Image
            style={{ width: 30, height: 30, borderRadius: 15, }}
            source={{ uri: 'https://wellavn.com//uploads/2022/08/31/images/gai-xinh-tren-ip.jpg' }}
          />
        </View>
      </View>
      <View
        style={{ width: '100%', height: '81%' }}
      >
        <ScrollView style={{}}>

          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
            <Text style={{ fontSize: 17, marginLeft: 20 }} >Liked tracks</Text>
            <AntDesign name="right" size={24} color="black" style={{ marginRight: 10 }} />
          </Pressable>

          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
            <Text style={{ fontSize: 17, marginLeft: 20 }} >Playlists</Text>
            <AntDesign name="right" size={24} color="black" style={{ marginRight: 10 }} />
          </Pressable>

          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
            <Text style={{ fontSize: 17, marginLeft: 20 }} >Albums</Text>
            <AntDesign name="right" size={24} color="black" style={{ marginRight: 10 }} />
          </Pressable>

          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
            <Text style={{ fontSize: 17, marginLeft: 20 }} >Following</Text>
            <AntDesign name="right" size={24} color="black" style={{ marginRight: 10 }} />
          </Pressable>

          <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, marginBottom: 10 }}>
            <Text style={{ fontSize: 17, marginLeft: 20 }} >Stations</Text>
            <AntDesign name="right" size={24} color="black" style={{ marginRight: 10, }} />
          </Pressable>


          <View style={{ width: '100%' }}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>Recently played</Text>
              <Text style={{fontWeight:'bold', color:'#656565', fontSize:16, marginRight:20}}>See All</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ width: '100%' }}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.navigate("Track", { item })}>
                    <View style={{
                      width: 100,
                      height: 100,
                      backgroundColor: '#3D4651',
                      position: 'absolute',
                      marginTop: 40,
                      marginLeft: 40,
                      borderRadius: 10,
                    }} ></View>
                    <View style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'black',
                      position: 'absolute',
                      marginTop: 30,
                      marginLeft: 30,
                      borderRadius: 10,
                    }} ></View>
                    <View style={{ margin: 20, boxShadow: '10px 10px ', borderRadius: 10, }}>
                      <Image style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 10 }}
                        source={
                          // require('./assets/icon.png')
                          { uri: item.img }
                        } />
                    </View>
                    <View style={{ width: 140 }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 15,
                          fontWeight: '600',
                          paddingLeft: 20,
                        }}>{item.musicname} - {item.singer}</Text>
                      <Text style={{
                        fontSize: 13,
                        fontWeight: '200',
                        paddingLeft: 20,
                      }}>Related tracks</Text>
                    </View>
                  </Pressable>
                </View>

              )}
              keyExtractor={item => item.id}
            />

          </View>

          <View style={{ width: '100%' , marginTop:30}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>Listening history</Text>
              <Text style={{fontWeight:'bold', color:'#656565', fontSize:16, marginRight:20}}>See All</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{ width: '100%' }}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Pressable
                    style={{ flexDirection: 'row', padding: 10, width: '100%', alignItems: 'center', paddingLeft:20 }}
                    onPress={() => navigation.navigate("PlayMusic", { item })}>
                    <View style={{}}>
                      <Image style={{ width: 70, height: 70, resizeMode: 'contain', borderRadius: 3 }}
                        source={
                          // require('./assets/icon.png')
                          { uri: item.img }
                        } />
                    </View>
                    <View style={{ width: 180, paddingLeft: 10 }}>
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
                      style={{ marginLeft:110, position: 'relative' }}>
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
