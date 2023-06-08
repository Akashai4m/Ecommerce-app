import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';

const CheckoutPage = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Place order logic goes here
    setIsOrderPlaced(true);
  };

  return (
    <View style={styles.container}>
      {!isOrderPlaced ? (
        <>
          <Text style={styles.header}>Checkout</Text>
          <Input
            label="Name"
            placeholder="Enter your name"
            containerStyle={styles.inputContainer}
          />
          <Input
            label="Address"
            placeholder="Enter your address"
            containerStyle={styles.inputContainer}
          />
          <Input
            label="Card Number"
            placeholder="Enter your card number"
            containerStyle={styles.inputContainer}
          />
          <Input
            label="Expiration Date"
            placeholder="MM/YY"
            containerStyle={styles.inputContainer}
          />
          <Input
            label="CVV"
            placeholder="Enter CVV"
            containerStyle={styles.inputContainer}
          />
          <TouchableOpacity style={styles.checkoutButton} onPress={handlePlaceOrder}>
            <Text style={styles.checkoutButtonText}>Place Order</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.orderPlacedContainer}>
          <Text style={styles.orderPlacedText}>Thank You for Your Order!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderPlacedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderPlacedText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CheckoutPage;
