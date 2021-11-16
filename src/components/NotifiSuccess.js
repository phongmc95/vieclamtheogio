import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import icons from '../constant/icons';

export default function NotifiSuccess(props) {
  return (
    <Modal isVisible={props.on} onBackdropPress={props.off}>
      <View
        style={{
          width: scale(295),
          height: scale(173),
          overflow: 'hidden', borderRadius: scale(20),
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
          }}>
          {props.title}
        </Text>
        <Image
          style={{height: scale(45), width: scale(45), marginBottom: scale(10)}}
          source={icons.confirm}
        />
        <Text
          style={{fontSize: scale(16), color: '#404040', textAlign: 'center'}}>
          {props.content}
        </Text>
      </View>
    </Modal>
  );
}
