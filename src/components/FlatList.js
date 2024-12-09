import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH / 3; // Adjust for the number of cards visible on the screen

const DATA = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
  { id: '4', title: 'Card 4' },
  { id: '5', title: 'Card 5' },
];

const HorizontalCardSlider = ({data}) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={[styles.card, { width: CARD_WIDTH }]}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150, // Adjust the height as needed
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HorizontalCardSlider;
