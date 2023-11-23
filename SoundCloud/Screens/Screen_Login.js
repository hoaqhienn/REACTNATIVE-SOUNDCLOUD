import { Pressable, Text, View, Image, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Screen_Login({ navigation }) {
  const eyeIcon = <Ionicons name="ios-eye" size={24} color="black" />;
  const eyeSlashIcon = <Ionicons name="ios-eye-off" size={24} color="black" />;

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/account")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  }, []);

  console.log(data);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const [emailLoading, setEmailLoading] = useState(false);
  const checkAccount = () => {
    data.map((item) => {
      if (item.username === username && item.password === password) {
        setEmailLoading(true);
        setTimeout(() => {
          navigation.navigate("Home");
          setEmailLoading(false);
        }, 300);
      } else {
        return console.log("no");
      }
    });
  };

  const [googleLoading, setGoogleLoading] = useState(false);
  const [faceookLoading, setFacebookLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);

  const handleGooglePress = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      navigation.navigate("Home");
      setGoogleLoading(false);
    }, 300);
  };

  const handleFacebookPress = () => {
    setFacebookLoading(true);
    setTimeout(() => {
      navigation.navigate("Home");
      setFacebookLoading(false);
    }, 300);
  };

  const handleApplePress = () => {
    setAppleLoading(true);
    setTimeout(() => {
      navigation.navigate("Home");
      setAppleLoading(false);
    }, 300);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          marginTop: 30,
          width: "100%",
          marginBottom: 20,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Start")}
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "610",
          }}
        >
          Sign in
        </Text>
      </View>
      <Pressable
        onPress={handleGooglePress}
        style={{
          width: "90%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F3F3F3",
          borderRadius: 5,
          marginBottom: 15,
        }}
      >
        {googleLoading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <>
            <Image
              source={require("../assets/google.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Continue with Google
            </Text>
          </>
        )}
      </Pressable>

      <Pressable
        onPress={handleFacebookPress}
        style={{
          width: "90%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1878F3",
          borderRadius: 5,
          marginBottom: 15,
        }}
      >
        {faceookLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <FontAwesome5 name="facebook" size={24} color="white" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 5,
                color: "#fff",
              }}
            >
              Continue with Facebook
            </Text>
          </>
        )}
      </Pressable>
      <Pressable
        onPress={handleApplePress}
        style={{
          width: "90%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          borderRadius: 5,
        }}
      >
        {appleLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <Ionicons name="ios-logo-apple" size={24} color="white" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 5,
                color: "#fff",
              }}
            >
              Continue with Apple
            </Text>
          </>
        )}
      </Pressable>

      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        style={{
          backgroundColor: "#FFF",
          width: "90%",
          marginTop: 20,
          height: 50,
        }}
        label="Email *"
        underlineColor="#cfcfcf"
        labelColor="red"
      />
      <View
        style={{
          width: "90%",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{
            backgroundColor: "#FFF",
            width: "100%",
            color: "red",
            height: 50,
          }}
          label="Password *"
          secureTextEntry={!isPasswordVisible}
          underlineColorAndroid="transparent"
        />

        <Pressable
          onPress={togglePasswordVisibility}
          style={{ position: "absolute", right: 0 }}
        >
          {isPasswordVisible ? eyeSlashIcon : eyeIcon}
        </Pressable>
      </View>
      <Pressable
        onPress={() => checkAccount()}
        style={{
          width: "90%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          borderRadius: 5,
          marginTop: 40,
        }}
      >
        {emailLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 5,
                color: "#fff",
              }}
            >
              Continue
            </Text>
          </>
        )}
      </Pressable>
      <Pressable style={{ width: "90%" }}>
        <Text style={{ fontSize: 12, paddingTop: 20, color: "#01389D" }}>
          Forgot your pasword?
        </Text>
      </Pressable>
    </View>
  );
}
