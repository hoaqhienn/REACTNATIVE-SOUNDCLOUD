import { ImageBackground, Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Screen_Start({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/coverbg.jpg")}
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ position: "relative" }}>
          <FontAwesome
            name="soundcloud"
            size={100}
            style={{
              marginTop: 3,
              position: "absolute",
              color: "black",
              opacity: 0.3,
              left: -63,
            }}
          />
          <FontAwesome
            name="soundcloud"
            size={100}
            style={{
              position: "absolute",
              color: "white",
              right: -63,
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "600",
              marginTop: 400,
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 5,
              textAlign: "center",
            }}
          >
            Find music you love.
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "600",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 5,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Discover new artists.
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={{
            width: "90%",
            height: 55,
            backgroundColor: "#FF5500",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Create an account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{
            width: "90%",
            height: 55,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            I already have an account
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
