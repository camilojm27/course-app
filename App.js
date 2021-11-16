import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from "./src/screens/home/HomeStack";
import DownloadScreen from "./src/screens/download/DownloadScreen";
import FavoriteScreen from "./src/screens/favorite/FavoriteScreen";
import ProfileStack from './src/screens/profile/ProfileStack';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
      screenOptions={{
          showLabel: false,
          style: {
            border: 'none'
          },
          headerShown: false
      }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
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
          component={ProfileStack}
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
