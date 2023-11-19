import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen_Start from './Screens/Screen_Start';
import Screen_Login from './Screens/Screen_Login';
import Screen_SignUp from './Screens/Screen_SignUp';
import Screen_Home from './Screens/Screen_Home';
import Screen_Search from './Screens/Screen_Search';
import Screen_Library from './Screens/Screen_LIbrary';
import Screen_Feed from './Screens/Screen_Feed';
import Screen_PlayMusic from './Screens/Screen_PlayMusic';
import Screen_Track from './Screens/Screen_Track';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabStack = createStackNavigator();

function TabScreens1() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Screen1" component={Screen_Home} options={{ headerShown: false
     
    }} />
      <TabStack.Screen name="Track" component={Screen_Track} options={{ headerShown: false
     
    }} /> 
    </TabStack.Navigator>
  )
}


const TabScreens = () => (
  <Tab.Navigator 
  tabBarOptions={{
    activeTintColor: 'black', // Màu chữ khi được chọn
  }}
    initialRouteName={Screen_SignUp}
    screenOptions={({route})=>({
      tabBarIcon: ({focused, color, size})=>{
        
        let iconName;
        let rn = route.name;
        if(rn === 'Home'){
          iconName = focused ? <Image style={{width:25, height:25}} source={require('./assets/home_focus.png')} /> : <Image style={{width:25, height:25}} source={require('./assets/home.png')} />;
        } else if(rn === 'Feed'){
          iconName = focused ? <Image style={{width:23, height:23}} source={require('./assets/feed_focus.png')} /> : <Image style={{width:23, height:23}} source={require('./assets/feed.png')} />;
        } else if(rn === 'Search'){
          iconName = focused ? <Image style={{width:25, height:25}} source={require('./assets/search_focus.png')} /> : <Image style={{width:25, height:25}} source={require('./assets/search.png')} />;
        } else if(rn === 'Libarary'){
          iconName = focused ? <Image style={{width:25, height:25}} source={require('./assets/library_focus.png')} /> : <Image style={{width:25, height:25}} source={require('./assets/library.png')} />;
        }
        return iconName;
      }
    })}
  >
    <Tab.Screen name="Home" options={{ headerShown: false
     
    }} component={TabScreens1} />
    <Tab.Screen name="Feed" options={{ headerShown: false
     
    }} component={Screen_Search} />
    <Tab.Screen name="Search" options={{ headerShown: false
      
    }} component={Screen_Feed} />
    <Tab.Screen name="Libarary" options={{ headerShown: false
    
    }}  component={Screen_Library} />
  
  </Tab.Navigator>
);


function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Start" component={Screen_Start} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="Login" component={Screen_Login} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="SignUp" component={Screen_SignUp} options={{headerShown:false}} /> */}
      <Stack.Screen name="Home" component={TabScreens} options={{headerShown:false}} />
      <Stack.Screen name="PlayMusic" component={Screen_PlayMusic} options={{headerShown:false}} />
      <Stack.Screen name="Track" component={Screen_Track} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
