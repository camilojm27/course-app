import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import {BigCourseCard, SmallCourseCard} from "./CourseCard";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <EvilIcons name="bell" size={24} color="black"/>
            <Text>Hi Jahin</Text>
            <Text>Ready to learn?</Text>
            <TextInput placeholder={'Search for courses'} style={styles.input}>
            </TextInput>
            <ScrollView styles={styles.scroll} horizontal>
                <BigCourseCard/>
                <BigCourseCard/>
                <BigCourseCard/>
                <BigCourseCard/>
                <BigCourseCard/>
            </ScrollView>
            <Text>Popular Courses</Text>
            <ScrollView>
                <SmallCourseCard/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 25,
    },
});
