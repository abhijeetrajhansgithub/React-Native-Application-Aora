import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton"

const submit = () => {

}

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [submitting, setSubmitting] = useState(false)

  return (
    <>
        <SafeAreaView style={styles.SafeAreaView}>
            <ScrollView>
                <View style={styles.view}>
                    <Image style={styles.image} source={images.logo}
                        resizeMode='contain'/>
                    
                    <Text style={styles.text}>Log into Aora</Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({...form, email: e})}
                        style={styles.FormField}
                        keyboardType='email-address'
                        />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({...form, password: e})}
                        style={styles.FormField}
                        />

                    <CustomButton
                        title="Sign In"
                        style={styles.button}
                        handlePress={submit}
                        isLoading={submitting}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: 'black',
    color: 'white',
    height: '100%'
  },
  text: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginTop: 10, 
    color: 'white'
  },
  view: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 4,
    minHeight: '85vh'
  },
  image: {
    width: '100%',
    height: 35,
    marginTop: 30

  },
  FormField: {
    marginTop: 7
  },
})
