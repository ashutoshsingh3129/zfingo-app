// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// import { useToast } from 'react-native-toast-notifications'

// const Home = () => {
//   const navigation = useNavigation()

//   return (
//     <View style={styles.loginContainer}>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
//         <Text>Open Drawer</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Home

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

import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ShopItem from '../../components/ShopItem';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { apiRequest } from '../../utils/api';
import HorizontalSlider from '../../components/FlatList';




const HomeScreen = () => {
  const navigation = useNavigation()
  const [shops, setShops] = useState([
    { id: '1', name: 'jsdc', followed: false },
    { id: '2', name: ' cdkc', followed: false },
    { id: '3', name: 'cdjc cdjcd ', followed: false },
  ]);
  const [products, setProduct] = useState([
    { id: '1', name: 'nililk', followed: false },
    { id: '2', name: ' powerr', followed: false },
    { id: '3', name: 'mandnen ', followed: false },
  ]);

  const toggleFollow = (id) => {
    navigation.replace('DrawerNavigation');
    setShops((prevShops) =>
      prevShops.map((shop) => (shop.id === id ? { ...shop, followed: !shop.followed } : shop))
    );
  };
  useEffect(() => {

  }, [])
  fetchNarByhpartners = () => {
   // apiRequest('', {})
  }


  return (
    <View style={styles.container}>
     
      <Button style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Text>Shops</Text>
      <HorizontalSlider data={shops}></HorizontalSlider>


      <Text>Products</Text>
      <HorizontalSlider data={products}></HorizontalSlider>

      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShopItem
            shop={item}
            onFollow={() => toggleFollow(item.id)}
            onPress={() => navigation.navigate('ShopDetails', { shopId: item.id })}
          />
        )}
      />
      <Button title="Go to Bookings List" onPress={() => navigation.navigate('DrawerNavigation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default HomeScreen;
