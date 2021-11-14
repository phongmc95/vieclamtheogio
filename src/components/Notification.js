import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';

export default function Notification(props) {
  return (
    <Modal isVisible={props.on} onBackdropPress={props.off}>
      <View
        style={{
          width: scale(295),
          height: scale(173),
          borderRadius: scale(20),
          borderWidth: 1,
          borderColor: '#307df1',
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingVertical: scale(20),
          paddingHorizontal: scale(40),
        }}>
        <Text
          style={{
            fontSize: scale(20),
            color: '#307df1',
            marginBottom: scale(10),
          }}>
          THÔNG BÁO
        </Text>
        <Text
          style={{
            fontSize: scale(17),
            color: '#404040',
            textAlign: 'center',
          }}>
          Yêu cầu nhận việc của bạn đã được gửi tới Nhà tuyển dụng
        </Text>
      </View>
    </Modal>
  );
}
