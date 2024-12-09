import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { apiRequest } from '../utils/api';

// Request notification permissions
export const requestNotificationPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const isEnabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (isEnabled) {
    console.log('Notification permissions granted.');
  } else {
    console.log('Notification permissions denied.');
  }
};

// Get FCM Token
export const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error fetching FCM token:', error);
    return null;
  }
};

// Handle Foreground Notifications
export const onMessageListener = () => {
  messaging().onMessage(async (remoteMessage) => {
    console.log('Foreground notification:', remoteMessage);
   // Alert.alert('New Notification', JSON.stringify(remoteMessage.notification));
  });
};

// Handle Background Notifications
export const setBackgroundMessageHandler = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Background notification:', remoteMessage);
  });
};
