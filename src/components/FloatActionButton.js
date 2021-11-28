import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from "react-native";
import { isIos } from "../Utils/CheckDevice";

const FloatActionButton = ({style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>

        <Image
          source={require('../../assets/images/Fab.png')}

        />



    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({

  btn: {




    position: 'absolute',
    marginHorizontal: 16,
    right: 5,
    bottom: isIos?130:100,
    // width: 64,
    // height: 64,
backgroundColor:'white',
    borderRadius:50



  },
});
