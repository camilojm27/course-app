import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
const colorDetails = 'darkslategrey';

export default function () {
    return (
        <View style={styles.horizontal}>
            <View style={styles.horizontal}>
                <AntDesign name="clockcircleo" size={20} color={colorDetails}/>
                <Text style={styles.textDetails}>1hr 45 min</Text>
            </View>
            <View style={styles.horizontal}>
                <AntDesign name="staro" size={20} color={colorDetails}/>
                <Text style={styles.textDetails}>4.5</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textDetails: {
        color: colorDetails,
        fontFamily: 'RobotoCondensed_400Regular',
    }
});
