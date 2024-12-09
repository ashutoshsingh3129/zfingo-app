import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { useTheme } from '../../hooks';
const CustomToast = ({ toast, type }) => {
  const {

    Images,
    darkMode: isDark,
    DefaultVariables,
  } = useTheme();
  let bgColor;
  let toastIcon;
  switch (type) {
    case 'Success':
      bgColor = "green";
      toastIcon = Images.icon.tickCircle;
      break;
    case 'Warning':
      bgColor = "orange";
      toastIcon = Images.icon.infoCircle;
      break;

    case 'Error':
      bgColor ="red";
      toastIcon = Images.icon.crossCircle;
      break;
    default:
      bgColor = 'black';
      break;
  }
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: bgColor,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        borderRadius: 11,
        marginVertical: 5,
        width: 300,
      }}
    >
      <Image source={toastIcon} style={{ width: 25, height: 25 }} />
      <View style={{ maxWidth: '90%' }}>
        <Text>{toast.message}</Text>
      </View>
    </View>
  );
};


export default React.memo(CustomToast);
