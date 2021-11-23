import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {getDeviceHeight, getDeviceWidth, isIos} from '../Utils/CheckDevice';
import {scale} from 'react-native-size-matters';
import Loader1 from './Loading';
const LoadSreen = props => {
  const {load} = props;
  return (
    <Modal isVisible={load}>
      <View
        style={{
          width: getDeviceWidth,
          height: getDeviceHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Loader1 />
      </View>
    </Modal>
  );
};

export default LoadSreen;
