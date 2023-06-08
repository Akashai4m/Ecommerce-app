import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import NavBar from './Navbar';

const CartPage = ({navigation}) => {

    const handlenext = () => {
        navigation.navigate('CheckoutPage');
      };

  const cartItems = [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 20 },
    { id: '3', name: 'Product 3', price: 30 },
  ];

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View>
        <NavBar/>
        <Text style={styles.text}>Your Cart</Text>
    <View style={styles.container}>
     
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartItemsList}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={handlenext}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
        <Icon name="arrow-right" type="font-awesome" color="white" />
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    display:'flex',
    padding: 20,
  },
  cartItemsList: {
    paddingBottom: 20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  text: {
    fontSize:32 ,
    display:'flex' ,
    flexDirection:'row',
    justifyContent:'center' ,
    alignItems:'center'

  }
});

export default CartPage;
