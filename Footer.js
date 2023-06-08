import React from 'react';
import { View,  StyleSheet } from 'react-native';
import  {Button}  from '@rneui/themed';

export default function Footer ({navigation}) {
  const handlePress = () => {
    navigation.navigate('list');
  };

  return (
    <View style={styles.container}>
      <Button
              title="ADD TO CART"
              buttonStyle={{
                backgroundColor: 'yellow',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
                color:'black'
              }}
              containerStyle={{
                width: 150,
                // marginHorizontal: 2,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' ,color:'black' }}
              onPress={handlePress}
            />
  <Button
              title="BUY NOW"
              buttonStyle={{
                backgroundColor: 'yellow',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 150,
                // marginHorizontal: 2,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' ,color:'black' }}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:'black',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
   position:'absolute' ,
   bottom:0 ,
  left:0 ,
  right:0 ,
 marginTop:2
  }
});


