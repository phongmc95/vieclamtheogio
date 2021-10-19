import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {getDeviceWidth} from '../Utils/CheckDevice';

const ButtonStyle = ({STYLE, Title, onPress, styleBtn}) => {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4C5BD4',
            width: getDeviceWidth - 30,
            borderRadius: scale(5),
          },
          styleBtn,
        ]}>
        <Text style={[styles.btn, STYLE]}>{Title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonStyle;

const styles = StyleSheet.create({
  btn: {
    color: 'white',
    paddingVertical: scale(10),
    fontSize: scale(20),
  },
});
