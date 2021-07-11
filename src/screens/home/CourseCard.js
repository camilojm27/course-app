import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import TimeStart from "../../components/TimeStart";
const colorDetails = 'darkslategrey';

export function BigCourseCard({onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={big.container}
            activeOpacity={0.7}
        >
            <View>
                <Image style={big.image} source={require('../../../assets/img/card-template.png')}/>
                <TimeStart/>
            </View>
            <Text style={big.title}>Advance Mathematics</Text>
        </TouchableOpacity>)
}

export function SmallCourseCard({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={small.container} activeOpacity={0.7}>
            <Image style={small.image} source={require('../../../assets/img/card-template.png')}/>
            <View>
                <TimeStart/>
                <Text style={small.title}>Advance Mathematics</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    textDetails: {
        color: colorDetails,
        fontFamily: 'RobotoCondensed_400Regular',

    }
})

const big = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 200,
        height: 250,
        backgroundColor: 'rgba(54,170,137,0.75)',
        borderRadius: 25,
        margin: 10,
        ...styles.shadow
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#2A3534',
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 15
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
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        ...styles.shadow
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

