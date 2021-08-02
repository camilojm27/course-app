import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../../assets/colors';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image style={styles.profileImage} source={require('../../../assets/img/profile.jpg')} />
        <Text style={styles.profileSectionName}>Camilo Mezú Mina</Text>
        <Text style={styles.profileSectionEmail}>camilo.mezu@correounivalle.edu.co</Text>
        <TouchableOpacity style={styles.profileSectionButton}>
          <Text style={styles.profileSectionButtonText}>Edit Profile </Text>
          <AntDesign name="caretright" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.settingTitle}>
        <Text style={styles.settingTitleText}>CONTENT</Text>
      </View>

      <TouchableOpacity style={styles.settingOptionButton}>
        <Text style={styles.settingOptionButtonText}><AntDesign name="hearto" size={24} color="black" /> Favorites </Text>
        <MaterialCommunityIcons name="greater-than" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOptionButton}>
        <Text style={styles.settingOptionButtonText}><MaterialCommunityIcons name="download-circle-outline" size={24} color="black" /> Favorites </Text>
        <MaterialCommunityIcons name="greater-than" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.settingTitle}>
        <Text style={styles.settingTitleText}>PREFERENCES</Text>
      </View>


      <TouchableOpacity style={styles.settingOptionButton}>
        <Text style={styles.settingOptionButtonText}><SimpleLineIcons name="globe" size={24} color="black" /> Lenguage </Text>
        <MaterialCommunityIcons name="greater-than" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOptionButton}>
        <Text style={styles.settingOptionButtonText}><Ionicons name="md-moon-outline" size={24} color="black" /> Dark Mode </Text>
        <MaterialCommunityIcons name="greater-than" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOptionButton}>
        <Text style={styles.settingOptionButtonText}><AntDesign name="wifi" size={24} color="black" /> Only Download with WI-FI </Text>
        <MaterialCommunityIcons name="greater-than" size={30} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingOptionButton}>
        <Text style={styles.settingOptionButtonText}><MaterialCommunityIcons name="flip-to-back" size={24} color="black" /> Play in background </Text>
        <MaterialCommunityIcons name="greater-than" size={30} color="black" />
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    margin: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  
  profileSectionName: {
    fontSize: 20,
  },
  profileSectionEmail: {
    fontSize: 14,
  },
  profileSectionButton: {
    width: 150,
    height: 40,
    backgroundColor: colors.blue,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSectionButtonText: {
    color: colors.white,
  },
  settingTitle: {
    height: 30,
    padding: 5,
    width: '100%',
    backgroundColor: colors.gray,
    justifyContent: 'flex-end',
  },
  settingTitleText: {
    color: colors.grayLight,
  },
  settingOptionButton: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 10,
  },
  settingOptionButtonText: {
  },
});
