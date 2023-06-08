import React, { useState } from 'react';
import { View,  Button , Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';



const NavBar = (props) => {

    const [open ,setopen] = useState(false)


    const openmenu = () => {
        setopen(true)
    }

    const gotocart = () => {
      props.handletouch()
    }



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={openmenu}>
        <Text style={styles.navText}><Octicons name="home" size={32} color="black" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}><AntDesign name="search1" size={32} color="black" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}><AntDesign name="contacts" size={32} color="black" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={gotocart}>
        <Text style={styles.navText}><AntDesign name="shoppingcart" size={32} color="black" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}><AntDesign name="menufold" size={32} color="black" /></Text>
      </TouchableOpacity>
      <Modal
        visible={open}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onRequestClose={() => setopen(false)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>This is a modal!</Text>
          <Button title="Close" onPress={() => setopen(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,

   
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin : 2
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 2
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    width:'50%'

  },
  modalContent: {
   
    padding: 0,
  },
};

export default NavBar;
