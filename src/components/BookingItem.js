import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingItem = ({ booking }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.label}>Shop:</Text> {booking.shopId}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Name:</Text> {booking.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Date:</Text> {booking.date}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Time:</Text> {booking.time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default BookingItem;
