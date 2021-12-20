import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import fonts from '../constant/fonts';

export default function Notification(props) {
  return (
    <Modal isVisible={props.on} onBackdropPress={props.off}>
      <View
        style={{
          width: scale(295),
          // height: scale(173),
          overflow: 'hidden',
          borderRadius: scale(20),
          borderWidth: 1,
          borderColor: '#307df1',
          backgroundColor: '#fff',
          alignItems: 'center',
          padding: scale(20),
        }}>
        <Text
          style={{
            fontSize: scale(20),
            color: '#307df1',
            marginBottom: scale(10),
            fontFamily: fonts.NORMAL,
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: scale(17),
            color: '#404040',
            textAlign: 'center',
            fontFamily: fonts.NORMAL,
          }}>
          {props.content1}
        </Text>
        {props.content}
      </View>
    </Modal>
  );
}
