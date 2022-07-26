import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import fonts from '../constant/fonts';
import Button from './Button/Button';
import {useDispatch} from 'react-redux';
import {log_out} from '../redux/actions/actions';

export default function Logout(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logout = () => {
    dispatch(log_out());
    navigation.navigate('Intro');
  };
  return (
    <Modal isVisible={props.on} onBackdropPress={props.off}>
      <View style={styles.container}>
        <Text style={styles.content}>Bạn có chắc chắn muốn đăng xuất?</Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={logout}>
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

const styles = StyleSheet.create({
  containerMD: {
    width: scale(295),
    height: scale(173),
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: '#307df1',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: scale(20),
    paddingHorizontal: scale(20),
  },
  contentMD: {
    fontSize: scale(18),
    color: '#307df1',
    marginBottom: scale(10),
    textAlign: 'center',
    fontFamily: fonts.BOLD,
  },
  buttonMD: {flexDirection: 'row', top: '15%'},
});
