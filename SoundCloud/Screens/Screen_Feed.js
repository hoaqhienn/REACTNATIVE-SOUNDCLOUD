import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Pressable,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";

export default function Screen_Home() {
  const [data, setData] = useState([]);
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [isLiked, setLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const togglePlayback = async (item) => {
    if (currentItem && currentItem.id === item.id) {
      if (isPlaying) {
        await pauseTrack();
        setIsPlaying(false);
      } else {
        await playTrack(item.url, position);
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        await pauseTrack();
      }
      await playTrack(item.url);
      setIsPlaying(true);
    }

    setCurrentItem(item);
  };

  const playTrack = async (url, position = 0) => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true, positionMillis: position },
      onPlaybackStatusUpdate
    );

    setSound(newSound);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) {
      if (status.error) {
        console.error(`Error: ${status.error}`);
      }
    } else {
      setPosition(status.positionMillis);
    }
  };

  const pauseTrack = async () => {
    if (sound) {
      const status = await sound.pauseAsync();
      onPlaybackStatusUpdate(status);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://655e2b5a9f1e1093c59aa3d1.mockapi.io/api/music"
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const renderItem = ({ item }) => (
    <View
      style={{
        width: "100%",
        height: 650,
        borderRadius: 30,
        overflow: "hidden",
        marginBottom: 10,
      }}
    >
      <ImageBackground
        source={{ uri: item.img }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 30,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            margin: 10,
            borderRadius: 20,
            width: "95%",
            height: 80,
            backgroundColor: "darkgray",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              {`${
                (item.musicname + " - " + item.singer).length > 30
                  ? `${(item.musicname + " - " + item.singer).substring(
                      0,
                      27
                    )}...`
                  : `${item.musicname} - ${item.singer}`
              }`}
            </Text>

            <Pressable
              style={{
                backgroundColor: "lightgray",
                width: 80,
                height: 30,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
              onPress={() => {
                setIsFollowing((prev) => !prev);
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: 500, color: "white" }}>
                {isFollowing ? "Following" : "Follow"}
              </Text>
            </Pressable>
          </View>

          <View style={{ height: "100%" }}>
            <Pressable
              style={{
                height: "100%",
                justifyContent: "center",
                marginRight: 10,
              }}
              onPress={() => togglePlayback(item)}
            >
              <AntDesign
                name={
                  isPlaying && currentItem && currentItem.id === item.id
                    ? "pausecircleo"
                    : "playcircleo"
                }
                size={40}
                color="black"
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            right: 10,
            top: "55%",
            width: 50,
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => setLiked(!isLiked)}>
            {isLiked ? (
              <AntDesign name="heart" size={32} color="red" />
            ) : (
              <AntDesign name="hearto" size={32} color="white" />
            )}
          </Pressable>

          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            10K
          </Text>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={32}
            color="white"
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            1.0K
          </Text>
          <MaterialCommunityIcons
            name="playlist-plus"
            size={32}
            color="white"
          />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            Add
          </Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
          <FlatList
            style={{ width: "100%", padding: 10 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
