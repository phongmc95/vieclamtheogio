import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../constant/fonts';
import icons from '../constant/icons';

export default function EmptyData({content, onPress, icon, type}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={require('../../assets/images/logoVin.png')}
          />
          <Text style={styles.content}>{content}</Text>
        </View>
        {type === 'flc' && (
          <TouchableOpacity style={styles.touch} onPress={onPress}>
            <Image style={styles.pen} source={icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(80),
    width: '97%',
    borderRadius: scale(20),
    backgroundColor: 'white',
    margin: scale(5),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: scale(5),
    marginTop: scale(20),
  },
  content: {
    fontSize: scale(18),
    fontFamily: fonts.NORMAL,
    marginTop: scale(10),
  },
  image: {width: scale(60), height: scale(60)},
  touch: {
    left: scale(60),
    bottom: scale(30),
  },
  pen: {
    width: scale(20),
    height: scale(20),
  },
});
