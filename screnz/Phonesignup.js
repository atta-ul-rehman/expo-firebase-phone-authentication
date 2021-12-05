 import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function phonesignup(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setname] = useState('');
  const [eamil, setemail] = useState('');
  const [pass,setpass] = useState('');
  
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Enter Name</Text>
      <TextInput
        autoFocus
        style={styles.input}
        value={name}
        onChangeText={setname}
      />
      <Text style={styles.text}>Enter Email</Text>
      <TextInput
        autoFocus
        style={styles.input}
        value={eamil}
        onChangeText={setemail}
      />
      <Text style={styles.text}>Enter Phone Number</Text>
      <TextInput
        autoFocus
        style={styles.input}
        value={phoneNumber}
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={setPhoneNumber}
      />
      <Text style={styles.text}>Enter Pass</Text>
      <TextInput
        autoFocus
        style={styles.input}
        value={pass}
        onChangeText={setpass}
      />
      <Button title="Phone Number Sign up" onPress={() => props.onSubmit(phoneNumber)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});
