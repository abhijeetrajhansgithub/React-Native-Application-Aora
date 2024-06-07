import { ScrollView, StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.innerContainer}>
            <Image source={images.logo} resizeMode='contain' style={styles.logo} />
            <Image source={images.cards} resizeMode='contain' style={styles.cards} />

            <View style={styles.innerView}>
              <Text style={styles.innerText}>Discover Endless Possibilities with <Text style={styles.special}>Aora</Text></Text>
              <Image source={images.path} style={styles.path} resizeMode='contain'/>
              <Text style={styles.tagline}>Where creativity meets innovation</Text>

              <CustomButton title="Continue with email"
              handlePress={() => router.push('/sign-in')}/>
            </View>
          </View>
        </ScrollView>

        <StatusBar backgroundColor='#000000' style='light'/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollViewContent: {
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 4,
  },
  logo: {
    width: 200,
    height: 100,
  },
  cards: {
    maxWidth: 380,
    height: 300,
    width: '100%',
  },
  innerView: {
    position: 'relative',
    marginTop: 5,
  },
  innerText: {
    fontSize: 18, // Instead of 'xx-large'
    color: 'white',
    textAlign: 'center', // Corrected text alignment
  },
  special: {
    fontSize: 18, // Instead of 'xx-large'
    color: 'orange',
    textAlign: 'center', // Corrected text alignment
  },
  path: {
    position: 'absolute',
    width: 136,
    height: 15,
    marginTop:25,
    marginLeft: 250
  },
  tagline: {
    fontSize: 14, // Instead of 'xx-large'
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  }
});
