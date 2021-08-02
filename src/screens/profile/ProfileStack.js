import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from './ProfileScreen';
import SettingScreen from '../settings/SettingScreen';
import { SimpleLineIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();


export default function ProfileStack({ navigation}) {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ProfileScreen} options={{
                headerRight: () => (
                    <SimpleLineIcons name="settings" size={24} style={{marginRight: 20}} onPress={() => {
                        navigation.navigate('SettingScreen');
                    }} color="black" />
                )
            }} />
            <Stack.Screen name="SettingScreen" component={SettingScreen}  />
        </Stack.Navigator>
    )
}
