import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import Button from './Button/Button';

export default function Logout(props) {
  const navigation = useNavigation();
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
          paddingHorizontal: scale(20),
        }}>
        <Text
          style={{
            fontSize: scale(20),
            color: '#307df1',
            marginBottom: scale(10),
            textAlign: 'center',
          }}>
          Bạn có chắc chắn muốn đăng xuất
        </Text>

        <View style={{flexDirection: 'row', marginTop: scale(30)}}>
          <TouchableOpacity onPress={() => navigation.navigate('LoadingFlc')}>
            <Button
              title="Đăng xuất"
              color="#fff"
              bg="#307df1"
              right={scale(5)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.off}>
            <Button title="Hủy" color="#307df1" bg="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
