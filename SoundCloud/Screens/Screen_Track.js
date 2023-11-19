import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Ionicons, Foundation, Entypo, Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';


export default function Screen_Track({ navigation, route }) {
  const [data, setData] = useState([]);
  const [singer, setSinger] = useState('');
  useEffect(() => {
    setSinger(route.params.item.singer);
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music/' + route.params.item.id)
      .then(response => response.json())
      .then(data => {
        setSinger(data.singer);
      })
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music/')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
  }, []);
  console.log(singer);
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
        <ScrollView>
          <View style={{flexDirection:'row'}}>
            <Pressable onPress={() => navigation.navigate("Track")}>
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
              <View style={{ margin: 10,borderRadius: 3, width: 100, height: 100}}>
                <Image style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius: 3 }}
                  source={
                    { uri: route.params.item.img }
                  } />
              </View>
            </Pressable>
            <View style={{  paddingTop:10, marginTop:10 }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                  }}>{route.params.item.musicname} - {route.params.item.singer }</Text>
                <Text style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#999999',
                }}>
                  Playlist 18 Tracks  
                </Text>

                  <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                      <Image 
                          style={{ width: 28, height: 28, resizeMode: 'contain', borderRadius: 50, marginRight:10 }}
                          source={
                            { uri: route.params.item.img }
                          }
                          />
                      <Text style={{ 
                        fontSize: 13,
                        fontWeight: '400',
                        color: '#999999',}}>Made for <Text style={{fontWeight:'bold',color:'#656565'}}>Trương Văn Tuấn</Text></Text>
                  </View>
              </View>
          </View>


          <View style={{ width: '100%' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{ width: '100%' }}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Pressable
                    style={{ flexDirection: 'row', padding: 10, width: '100%', alignItems: 'center' }}
                    onPress={() => navigation.navigate("PlayMusic", { item })}>
                    <View style={{}}>
                      <Image style={{ width: 70, height: 70, resizeMode: 'contain', borderRadius: 3 }}
                        source={
                          // require('./assets/icon.png')
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
                      style={{ marginLeft: 140, position: 'relative' }}>
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
