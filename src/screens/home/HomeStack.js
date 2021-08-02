import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CourseScreen from "./CourseScreen";
import {EvilIcons} from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerRight: () => (
                    <EvilIcons name="bell" size={34} style={{ marginRight: 20 }} color="black"/>
                )
            }}/>
            <Stack.Screen name="CourseScreen" component={CourseScreen} options={{
                headerRight: () => (
                    <EvilIcons name="heart" size={34} style={{marginRight: 20}} color="red" />
                )
            }}/>
        </Stack.Navigator>
    )
}
