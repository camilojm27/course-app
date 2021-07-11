import React from 'react'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TimeStart from '../../components/TimeStart'
import {Feather} from '@expo/vector-icons';

const colorDetails = 'darkslategrey';

export default function CourseScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{width: '100%'}}>
                <Image style={styles.image} source={require('../../../assets/img/card-template.png')}/>
                <Feather style={styles.imagePlay} name="play" size={30} color="black"/>
            </View>
            <View style={styles.titleAndTime}>
                <Text style={styles.title}>Advance Mathematics</Text>
                <TimeStart/>
            </View>

            <View style={styles.row}>
                <View style={styles.assistantsView}>
                    <Image style={styles.assistantsImage} source={require('../../../assets/img/profile.jpg')}/>
                    <Image style={styles.assistantsImage} source={require('../../../assets/img/profile.jpg')}/>
                    <Image style={styles.assistantsImage} source={require('../../../assets/img/profile.jpg')}/>
                    <Text style={[styles.assistantsImage, styles.assistantsPlus]}>+46</Text>
                </View>
                <Text>50 Enrolled</Text>
            </View>

            <Text style={styles.subtitle}>Description</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque facere laboriosam nisi omnis sunt?
                Aspernatur consequatur et explicabo facilis minus.</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Buy Course For $40</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        padding: 20
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 9,
    },
    imagePlay: {
        position: 'absolute',
        bottom: -20,
        right: 30,
        backgroundColor: 'papayawhip',
        borderRadius: 50,
        padding: 5,
        elevation: 5
    },
    titleAndTime: {
        alignSelf: 'flex-start',
        marginBottom: 10

    },
    title: {
        fontSize: 24,
        marginTop: 15,
        marginBottom: 10,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10,
        alignSelf: 'flex-start',
        fontWeight: '700'

    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    assistantsView: {
        flexDirection: 'row',
    },
    assistantsImage: {
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    assistantsPlus: {
        backgroundColor: 'black',
        color: 'white',
    },
    btn: {
        backgroundColor: 'black',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 20,

    },
    btnText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700'
    }
})
