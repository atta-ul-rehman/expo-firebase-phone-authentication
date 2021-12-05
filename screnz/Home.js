import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getAuth, signOut } from "@firebase/auth";
//import auth from '@react-native-firebase/auth';
const auth =getAuth();
export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>You're Logged in</Text>
      {/* <Text style={styles.phoneNumber}>{auth.currentUser.phoneNumber}</Text> */}
      <View style={{ marginTop: 30 }}>
        <Button title="Signout" onPress={() => signOut(auth)} />
      </View>
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
  phoneNumber: {
    fontSize: 21,
    marginTop: 20,
  },
});
