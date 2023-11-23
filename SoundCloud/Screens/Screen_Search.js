import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import debounce from "lodash/debounce";
import _ from "lodash";

const ListItem = ({ musicname, singer, onPress }) => (
  <Pressable onPress={onPress} style={{ paddingHorizontal: 10 }}>
    <Text>
      {musicname} - {singer}
    </Text>
  </Pressable>
);

export default function ScreenSearch({ navigation, route }) {
  const [data, setData] = useState([]);
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
    delayedFetchData();
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
      {loading && <Text>Loading...</Text>}
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      {data.length > 0 && (
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                {...item}
                onPress={() => {
                  console.log(
                    `Pressed item: ${item.musicname} - ${item.singer}`
                  );
                }}
              />
            )}
          />
        </View>
      )}
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
