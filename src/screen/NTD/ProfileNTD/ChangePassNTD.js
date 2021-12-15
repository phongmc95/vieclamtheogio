import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Modal} from 'react-native-paper';
import {
  BackIcon,
  CameraIcon,
  EyeIcon,
  ChangePassIcon,
} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import TextInputPassword from '../../../components/TextInputPassword';
import {isIos} from '../../../Utils/CheckDevice';

const ChangePassNTD = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Đổi mật khẩu</Text>
      </View>
      <View style={styles.main}>
        <TextInputPassword Label="Mật khẩu cũ" />
        <TextInputPassword Label="Mật khẩu mới" />
        <TextInputPassword Label="Nhập lại mật khẩu" />

        <View style={styles.Viewbtn}>
          <TouchableOpacity onPress={showModal}>
            <View style={styles.button}>
              <Text style={styles.btnL}>Đổi mật khẩu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonCancel}>
              <Text style={styles.btnR}>Hủy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.modal}>
          <Text
            style={{
              color: '#307Df1',
              fontSize: scale(20),
              fontFamily: fonts.NORMAL,
              textAlign: 'center',
              marginBottom: scale(20),
            }}>
            Đổi mật khẩu thành công
          </Text>
          <ChangePassIcon />
        </View>
      </Modal>
    </View>
  );
};

export default ChangePassNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(isIos ? 120 : 50),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontFamily: fonts.BOLD,
    textTransform: 'uppercase',
    marginLeft: scale(20),
  },
  goback: {
    marginLeft: scale(10),
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    backgroundColor: colors.WHITE,
    borderRadius: scale(5),
    elevation: 5,
  },
  textInput: {
    fontSize: scale(16),
    marginLeft: scale(5),
    fontFamily: fonts.NORMAL,
    width: '90%',
  },
  TextTitle: {
    fontWeight: '500',
    fontSize: scale(16),
    marginLeft: scale(5),
    marginTop: scale(10),
  },
  Selecter: {
    width: scale(25),
    justifyContent: 'center',
    right: scale(15),
  },
  Viewbtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scale(10),
  },
  btnL: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    color: 'white',
  },
  btnR: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    color: '#307FD1',
  },
  modal: {
    width: scale(295),
    height: scale(173),
    borderRadius: scale(20),
    backgroundColor: 'white',
    alignItems: 'center',
    margin: scale(25),
    padding: scale(10),
  },
  button: {
    backgroundColor: '#307FD1',
    paddingHorizontal: scale(17),
    paddingVertical: scale(12),
    margin: scale(5),
    borderWidth: scale(1),
    borderColor: '#307FD1',
    borderRadius: scale(10),
    elevation: 5,
  },
  buttonCancel: {
    backgroundColor: 'white',
    paddingHorizontal: scale(50),
    paddingVertical: scale(12),
    margin: scale(5),
    borderWidth: scale(1),
    borderColor: '#307FD1',
    elevation: 5,
    borderRadius: scale(10),
  },
});
