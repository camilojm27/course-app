import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {BigCourseCard, SmallCourseCard} from "./CourseCard";
import {EvilIcons} from "@expo/vector-icons";
import {RobotoCondensed_400Regular, RobotoCondensed_700Bold, useFonts,} from '@expo-google-fonts/dev';
import AppLoading from "expo-app-loading";


export default function HomeScreen({navigation: {navigate}}) {

    let [fontsLoaded] = useFonts({
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else
        return (
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.textWelcome}>Hi Jahin,</Text>
                <Text style={styles.title}>Ready to learn?</Text>
                <Pressable style={styles.search}>
                    <EvilIcons style={styles.searchIcon} name="search" size={24} color="grey"/>
                    <TextInput style={styles.searchInput} placeholder={'Search for courses'}/>
                </Pressable>

                <ScrollView showsHorizontalScrollIndicator={false} styles={styles.scroll} horizontal>
                    <BigCourseCard onPress={() =>
                        navigate('CourseScreen')}/>
                    <BigCourseCard onPress={() =>
                        navigate('CourseScreen')}/>
                    <BigCourseCard onPress={() =>
                    navigate('CourseScreen')}/>
                    <BigCourseCard onPress={() =>
                    navigate('CourseScreen')}/>
                </ScrollView>
                <Text style={styles.subtitle}>Popular Courses</Text>
                <View>
                    <SmallCourseCard onPress={() =>
                        navigate('CourseScreen')}/>
                    <SmallCourseCard onPress={() =>
                        navigate('CourseScreen')}/>
                    <SmallCourseCard onPress={() =>
                        navigate('CourseScreen')}/>
                </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    scroll: {},
    search: {
        position: 'relative',
        height: 50,
        width: '90%',
        margin: 12,
        padding: 10,
        borderRadius: 9,
        backgroundColor: 'white'
    },
    searchIcon: {
        position: 'absolute',
        top: '50%',
        left: 5
    },
    searchInput: {
        marginLeft: 20
    },
    textWelcome: {
        alignSelf: 'flex-start',
        margin: 5,
        fontFamily: 'RobotoCondensed_400Regular',

    },
    title: {
        fontSize: 34,
        alignSelf: 'flex-start',
        margin: 10,
        fontFamily: 'RobotoCondensed_700Bold',
        letterSpacing: 0.3,

    },
    subtitle: {
        fontSize: 24,
        alignSelf: 'flex-start',
        margin: 10,
        fontFamily: 'RobotoCondensed_700Bold',
        letterSpacing: 0.3,

    },

});
