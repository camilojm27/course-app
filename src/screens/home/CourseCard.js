import React from 'react'
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export function BigCourseCard() {
    return (
        <Pressable style={big.container}>
            <Image style={big.image} source={require('../../../assets/img/card-template.png')}/>
            <View style={big.horizontal}>
                <View style={big.horizontal}>
                    <AntDesign name="clockcircleo" size={20} color="black" />
                    <Text>1hr 45 min</Text>
                </View>
                <View style={big.horizontal}>
                    <AntDesign name="staro" size={20} color="black" />
                    <Text>4.5</Text>
                </View>
            </View>
            <Text styles={big.title}>Advance Mathematics</Text>
        </Pressable>)
}

export function SmallCourseCard() {
    return (
        <Pressable style={small.container}>
            <Image style={small.image} source={require('../../../assets/img/card-template.png')}/>

            <View >
                <View style={small.horizontal}>
                    <View style={[small.horizontal, big.mr6]}>
                        <AntDesign style={big.mr6}  name="clockcircleo" size={20} color="black" />
                        <Text>1hr 45 min</Text>
                    </View>
                    <View style={small.horizontal}>
                        <AntDesign style={big.mr6} name="staro" size={20} color="black" />
                        <Text>4.5</Text>
                    </View>
                </View>

                <Text styles={small.title}>Advance Mathematics</Text>

            </View>
        </Pressable>
    )
}

const big = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 250,
        backgroundColor: '#36AA89',
        borderRadius: 25,
        margin: 10
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
      fontWeight: '600',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'center'
    },
    mr6: {
        marginRight: 6,
    }
});

const small = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 100,
        width: 340,
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: 25
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
      fontWeight: '600',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover'
    },
});

