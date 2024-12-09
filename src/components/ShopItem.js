import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';




const ShopItem= ({ shop, onFollow, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{shop.name}</Text>
      <TouchableOpacity onPress={onFollow} style={[styles.button, shop.followed && styles.followed]}>
        <Text style={styles.buttonText}>{shop.followed ? 'Following' : 'Follow'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  followed: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default ShopItem;
