import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  Pressable,
  ScrollView,
  Image
} from "react-native";
// import { Feather } from "@expo/vector-icons";
import {
  Ionicons,
  Foundation,
  FontAwesome5,
  Feather,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import debounce from "lodash/debounce";
import _ from "lodash";
import { ContextMusic } from "../Context/ContextMusic";

const ListItem = ({ musicname, singer, onPress }) => (
  <Pressable onPress={onPress} style={{ paddingHorizontal: 10 }}>
    <Text>
      {musicname} - {singer}
    </Text>
  </Pressable>
);

export default function ScreenSearch({ navigation, route }) {
  const {
    data,
    loadMusic,
    sound,
    pauseTrack,
    playTrack,
    stopTrack,
    musicLoadPlay,
    dataPlay,
    SetIconLove,
    currentIconLove,
    SetIconAdd,
    currentIconAdd,
    SetIcon,
    currentIcon,
    setStatusPlay,
    SetIconAdd1,
    currentIconAdd1,
  } = useContext(ContextMusic);


  const [musicName, setMusicName] = useState([]);
  useEffect(() => {
    // stopTrack();
    setMusicName(dataPlay);
  }, [dataPlay]);
  const [data1, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://655e2b5a9f1e1093c59aa3d1.mockapi.io/api/music"
      );
      const result = await response.json();

      const filteredData = result.filter(
        (item) =>
          item.musicname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.singer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const delayedFetchData = debounce(fetchData, 300);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      delayedFetchData();
    } else {
      setData([]);
    }
    return delayedFetchData.cancel;
  }, [searchQuery]);

  const handleSearch = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
          underlineColorAndroid="transparent"
        />
      </View>
      <ScrollView style={{height:'90%', width:'100%'}}>
        {loading && <Text>Loading...</Text>}
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      {data1.length > 0 && (
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data1}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      padding: 10,
                      width: "100%",
                      alignItems: "center",
                      paddingLeft: 20,
                    }}
                    onPress={() => navigation.navigate("Track", { item })}
                  >
                    <View style={{}}>
                      <Image
                        style={{
                          width: 70,
                          height: 70,
                          resizeMode: "contain",
                          borderRadius: 3,
                        }}
                        source={
                          // require('./assets/icon.png')
                          { uri: item.img }
                        }
                      />
                    </View>
                    <View style={{ width: 180, paddingLeft: 10 }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 15,
                          fontWeight: "600",
                        }}
                      >
                        {item.musicname} - {item.singer}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "400",
                          color: "#999999",
                        }}
                      >
                        {item.singer}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Ionicons
                          name="ios-play-sharp"
                          size={18}
                          color="gray"
                        />
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: "400",
                            color: "#999999",
                          }}
                        >
                          {item.view}
                        </Text>
                      </View>
                    </View>
                    <Pressable
                      onPress={() => console.log("a")}
                      style={{ marginLeft: 110, position: "relative" }}
                    >
                      <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="gray"
                      />
                    </Pressable>
                  </Pressable>
                </View>
            )}
          />
        </View>
      )}
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate("PlayMusic")}
        style={{
          backgroundColor: "black",
          height: "6%",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <Foundation name="play" size={26} color="white" style={{ paddingHorizontal: 20 }} /> */}
          <Pressable
            onPress={() => {
              SetIcon();
            }}
            style={{ position: "relative" }}
          >
            {currentIcon}
          </Pressable>
          <View style={{ width: "70%" }}>
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 13, fontWeight: "700" }}
            >
              {musicName.musicname} - {musicName.musicproducer}
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>
              {" "}
              {musicName.singer}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* <Feather name="user-plus" size={23} color="white" style={{ paddingRight: 20 }} /> */}

          <Pressable
            onPress={() => {
              SetIconAdd();
            }}
            style={{ position: "relative" }}
          >
            {currentIconAdd}
          </Pressable>
          <Pressable
            onPress={() => {
              SetIconLove();
            }}
            style={{ position: "relative" }}
          >
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
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 35,
    marginTop: 35,
    marginBottom: 10,
    backgroundColor: "#F3F3F3",
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  input: {
    width: "85%",
    height: 35,
    backgroundColor: "#F3F3F3",
  },
  listContainer: {
    width: "100%",
    height: "95%",
  },
});
