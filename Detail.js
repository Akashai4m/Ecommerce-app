import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import NavBar from './Navbar';

const ProductPage = ({navigation}) => {

  const handletouch = () => {
    navigation.navigate('CheckoutPage');
  };

  const gotocart = () => {
    navigation.navigate('CartPage');
  };

  return (
    <View style={styles.container}>
      <NavBar/>
      <Image
        source={require('./assets/headphones.jpeg')}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Product Name</Text>
      <Text style={styles.productDescription}>
        This is a description of the product. It provides details and features of the product.
      </Text>
      <Text style={styles.productPrice}>$99.99</Text>
      <View style={styles.actionarea}>
      <Button
        icon={<Icon name="shopping-cart" type="font-awesome" color="white" />}
        title="Add to Cart"
        buttonStyle={styles.addToCartButton}
        onPress={gotocart}
      />
       <Button
        title="Buy Now"
        buttonStyle={styles.buyNowButton}
        onPress={handletouch}
      />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    // justifyContent: 'center',
  },
  productImage: {
     width: 350,
     height: 300,
    marginBottom: 10,
    marginTop:4 ,
    resizeMode:'cover'
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    margin:2
  },
  buyNowButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    margin:2
  },
  actionarea: {
    display:'flex' ,
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
});

export default ProductPage;
