import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View,Alert } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { initializeApp } from 'firebase/app';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import styles from './styles';
const FIREBASE_CONFIG= {
  apiKey: "AIzaSyD4OfJ9qXJgfxRPRXXSoJfOebLnIB6an5g",
  authDomain: "login-94b23.firebaseapp.com",
  databaseURL: "https://login-94b23-default-rtdb.firebaseio.com",
  projectId: "login-94b23",
  storageBucket: "login-94b23.appspot.com",
  messagingSenderId: "306053555421",
  appId: "1:306053555421:web:0dd3dbd61be7d5315ee734"
};

try {
  if (FIREBASE_CONFIG.apiKey) {
    initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

// Firebase references
const auth = getAuth();

export default App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

function sendVerification(){
    const phoneProvider = new PhoneAuthProvider(auth);
      Id=phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
      setVerificationId(Id);
  }

async function confirmCode (){
    const credential = PhoneAuthProvider.credential(
      verificationId,
      code
    );
    try{
      setCode(code);
      const re=await signInWithCredential(auth,credential)
     // Alert.alert('Phone authentication successful!');
    }
    catch(er)
    {
      
    }
    }
      

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={FIREBASE_CONFIG}
        />
        <TextInput
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.textInput}
        />
        <TouchableOpacity
          disabled={!phoneNumber}
          style={styles.sendVerification}
          onPress={sendVerification}
        >
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
