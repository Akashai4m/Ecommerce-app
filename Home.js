import React from 'react'
import { ScrollView, View ,StyleSheet, Button, TouchableOpacity } from 'react-native'
import NavBar from './Navbar'
import EcommerceCard from "./Product";
import OtherScreen from "./Detail";

export default function Home({navigation}) {

  //hello
    const handlePress = () => {
        navigation.navigate('OtherScreen');
      };

      const handletouch = () => {
        navigation.navigate('CartPage');
      };
    
  return (
    <View>
        <NavBar  handletouch={handletouch}   />
        <ScrollView>
        <View style={styles.cardpage}>
       <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
      <EcommerceCard
        imageSource={require('./assets/headphones.jpeg')}
        name="Product Name"
        price="$19.99"
      />
      </TouchableOpacity>
      </View>
        </ScrollView>
    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E49',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header : {
      fontSize:64 ,
      fontStyle:'italic' ,
      fontWeight:'500'
  
    },
    Navbar : {
      marginTop:33 ,
      backgroundColor:'#E49'
    },
    cardpage : {
     display:'flex' ,
     justifyContent:'space-evenly' ,
     flexDirection:'row' ,
     flexWrap:'wrap'
    } 
  
  });


