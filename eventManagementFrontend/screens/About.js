import React from 'react'
import { View, Text, ScrollView, StyleSheet,Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';


const About = () => {
    
     
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton  onPress={() => navigation.goBack()} />
      ),
    });
  })
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
            <Text style={styles.appTitle}>PLANIT: Event Management System</Text>
            <Text style={styles.title}>About This App</Text>
            <Text style={styles.text}>
                Welcome to our Event Management System! This is my first React Native project built with React Native and Django.
            </Text>
            <Text style={styles.sectionTitle}>Features:</Text>
            <Text style={styles.feature}>• Scroll and View events</Text>
            <Text style={styles.feature}>• Scroll and View user profiles</Text>
            <Text style={styles.feature}>• Navigate between screens in multiple ways</Text>
            <Text style={styles.feature}>• Scan QR codes for event details</Text>
            <Text style={styles.feature}>• Built with Expo and DRF </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffe6b868',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
        lineHeight: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    feature: {
        fontSize: 14,
        marginBottom: 8,
    },
    image: {
        width: 150,
        height: 150,
        AlignSelf: 'center',
        marginBottom: 20,
        alignSelf: 'center',
    },
    appTitle: {
        alignSelf:'center', 
        fontFamily: 'Nunito',
        fontSize:32, 
        marginBottom:30, 
        fontWeight:'bold'}
});

export default About;