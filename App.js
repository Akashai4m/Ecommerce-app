import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';
import Navbar from "./Navbar";
import EcommerceCard from "./Product";
import HomeScreen from "./Home";
import OtherScreen from "./Detail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from "./List";
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ScrollView>
    // <View style={styles.background}>
    //   <View style={styles.Navbar}><Navbar /></View>
    // <View >
    //   {/* <Text style={styles.header}>Hello Akash!</Text> */}
    //   <View style={styles.cardpage}>
    //   <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //    <EcommerceCard
    //     imageSource={require('./assets/headphones.jpeg')}
    //     name="Product Name"
    //     price="$19.99"
    //   />
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
    // </View>
    // </ScrollView>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="OtherScreen" component={OtherScreen} options={{ headerShown: false }} />
      <Stack.Screen name="list" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }} />
      <Stack.Screen name="CheckoutPage" component={CheckoutPage} options={{ headerShown: false }} />


    </Stack.Navigator>
  </NavigationContainer>
  );
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
