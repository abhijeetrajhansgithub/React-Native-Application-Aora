import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 24, // Increased font size for a more modern look
    fontWeight: 'normal',
    marginBottom: 20,
  },
});
