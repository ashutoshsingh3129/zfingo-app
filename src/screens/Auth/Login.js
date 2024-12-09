// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// import { useToast } from 'react-native-toast-notifications'

// const Login = () => {
//   const navigation = useNavigation()
//   const toast = useToast()
//   return (
//     <View style={styles.loginContainer}>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.push("DrawerNavigation")}>
//         <Text>Go to Main Screen</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => {
//          toast.show('calling', {
//           type: 'success',
//           placement: 'bottom',
//           offset: 300,
//         });
//       }}>
//         <Text>Show Toast</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Login

// const styles = StyleSheet.create({
//   loginContainer:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",
//   },
//   button:{
//     paddingHorizontal:40,
//     paddingVertical:20,
//     backgroundColor:"orange",
//     borderRadius:20
//   }
// })


import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { apiRequest } from '../../utils/api';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {

    const response = await apiRequest('/auth/login', { method: 'POST', data: { email, password } });
   //if (response.success) {
      Alert.alert('Success', response.message);
      navigation.navigate('Home')
      
    //}
  
    console.log('Login clicked:', {email, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Go to Home "
        onPress={() => navigation.navigate('Home')}
      />
      Home
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
