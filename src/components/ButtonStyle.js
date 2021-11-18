import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../constant/fonts';

const ButtonStyle = ({STYLE, Title, onPress, styleBtn}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styleBtn}>
        <Text style={[styles.btn, STYLE]}>{Title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonStyle;

const styles = StyleSheet.create({
  btn: {
    color: 'white',
    padding: scale(10),
    fontSize: scale(20),
    fontFamily: fonts.NORMAL,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C5BD4',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    
  },
});
