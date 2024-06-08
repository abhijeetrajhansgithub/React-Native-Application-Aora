import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.button}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    minWidth: "80%"
  }
})