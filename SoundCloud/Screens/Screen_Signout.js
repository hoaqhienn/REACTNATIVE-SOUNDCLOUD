import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Screen_Start({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, marginTop: 20}}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "#F3F3F3",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          marginRight: 20,
        }}
      >
        <AntDesign name="arrowleft" size={26} color="black" />
      </Pressable>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Settings</Text>
      </View>
      <View style={{width: '90%', marginVertical: 10}}>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Account</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Upload</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Basic settings</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Interface style</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Notification</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Privacy</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Support</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style= {{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontSize: 16}}>Account</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={{
          width: "90%",
          height: 35,
          backgroundColor: "#ececec",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Sign out
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10
  },
});
