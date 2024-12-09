import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { apiRequest } from '../utils/api';
import styles from '../styles/SignUp';
import { getFCMToken } from '../firebase/messaging';

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    role: '',
    name: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = async () => {
    const { email, password, confirmPassword, mobile, role, name } = formData;

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    await getFCMToken()
    const res = await apiRequest('/user/create', {
      method: 'POST',
      data: { email, password, mobile, role, name },
    });

    console.log('SignUp clicked:', formData);
    return res;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        keyboardType="phone-pad"
        value={formData.mobile}
        onChangeText={(value) => handleInputChange('mobile', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={formData.role}
        onChangeText={(value) => handleInputChange('role', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(value) => handleInputChange('confirmPassword', value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Button

        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUpScreen;
