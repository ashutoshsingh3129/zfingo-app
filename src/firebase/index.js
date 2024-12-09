import { initializeApp } from '@react-native-firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBt_WaTqWCV0v8W33NW80Ik78n1HKqOQn4',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'zfingo-1d15f',
  storageBucket: 'zfingo-1d15f.firebasestorage.app',
  messagingSenderId: '',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
