import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#ffffff', // White color for the title text
    marginBottom: 8,
    paddingBottom: 10,
    paddingTop: 20,
  },
  inputContainer: {
    minWidth: '80%',
    width: '80%',
    alignSelf: 'center',
    height: 45,
    backgroundColor: '#fff', 
    borderRadius: 10, 
    borderColor: 'orange',
    borderWidth: 3, 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    paddingLeft: 5,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff', // Ensure the text color is white
  },
});
