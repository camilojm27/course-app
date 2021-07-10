import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/home/HomeScreen';
import DownloadScreen from "./src/screens/download/DownloadScreen";
import FavoriteScreen from "./src/screens/favorite/FavoriteScreen";
import ProfileScreen from "./src/screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
      tabBarOptions={{
          showLabel: false,
          style: {
            border: 'none'
          }
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
                    <Ionicons name="md-home-outline" size={24} color={color} />

            ),
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={DownloadScreen}
          options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="md-download-outline" size={24} color={color}/>
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="heart-outline" size={24} color={color}/>
            ),
          }}
        /><Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="person-outline" size={24} color={color}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
