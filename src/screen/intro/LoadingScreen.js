import React, {useRef, useState} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import images from '../../constant/images';

const LoadingScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.swiper}>
        <Image
          style={{width: scale(375), height: scale(175)}}
          source={images.wave}
        />
        <Image
          style={{
            width: scale(300),
            height: scale(222),
            marginTop: scale(60),
            marginBottom: scale(20),
          }}
          source={images.loading}
        />
      </View>
      <View style={{marginTop: scale(30)}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginFlc')}>
          <Text style={styles.buttonText}>{'Đăng nhập'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('RegisterFlc', {
              item: {cit_name: '', cit_id: ''},
            })
          }>
          <Text style={styles.buttonText}>{'Đăng ký'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomTabFlc')}>
          <Text style={styles.buttonText}>{'Đăng nhập với tư cách khách'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoadingScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(20),
    color: '#307DF1',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(328),
    height: scale(36),
    borderColor: '#307DF1',
    borderWidth: scale(1),
    borderRadius: scale(4),
    marginBottom: scale(5),
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: scale(10),
  },
});
