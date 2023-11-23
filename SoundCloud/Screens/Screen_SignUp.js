import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View, Image, ActivityIndicator } from "react-native";

export default function Screen_Login({ navigation }) {
  const eyeIcon = <Ionicons name="ios-eye" size={24} color="black" />;
  const eyeSlashIcon = <Ionicons name="ios-eye-off" size={24} color="black" />;

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/account/`)
      .then((response) => response.json())
      .then((dataResponse) => {
        setData(dataResponse);
        const ids = dataResponse.work.map((item) => parseInt(item.id));
        const maxId = Math.max(...ids);
        setidAcconut((maxId + 1).toString());
        console.log("new id", maxId + 1);
        console.log("dataResponse", dataResponse);
      });
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const registerAccount = () => {
    const isEmailUnique = !data.some((item) => item.username === username);

    if (isEmailUnique && password === password) {
      // Prepare the data to be sent in the request body
      const requestBody = {
        username: username,
        password: password,
      };

      // Make a POST request to the registration endpoint
      fetch("https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((responseData) => {
          // Handle the response from the server
          console.log("Registration successful:", responseData);

          // Navigate to the home screen after successful registration
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          // Handle error, show a message, etc.
        })
        .finally(() => {});
    } else {
      console.log("Registration failed. Please check your inputs.");
    }
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
        width: "100%",
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
          Sign up
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
        onPress={registerAccount}
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
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            marginLeft: 5,
            color: "#fff",
          }}
        >
          Sign up with Email
        </Text>
      </Pressable>
      <View>
        <Text style={{ fontSize: 11, padding: 20 }}>
          If you click “Continue with Google” and are not a SoundCloud user, you
          will be registered and you agree to SoundCloud’s Terms & Conditions
          and Privacy Policy.
        </Text>
        <Text
          style={{
            fontSize: 11,
            paddingLeft: 20,
            marginBottom: 20,
            paddingRight: 20,
          }}
        >
          We may use your email and devices for updates and tips on SoundCloud’s
          products and services, and for activities notifications. You can
          unsubscribe for free at any time in your notification settings.
        </Text>
        <Text style={{ fontSize: 11, paddingLeft: 20, paddingRight: 20 }}>
          We may use information you provide us in order to show you targeted
          ads as described in our Privacy Policy.
        </Text>
      </View>
    </View>
  );
}
