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
        <View style={[styles.boxInput, {flexDirection: 'row'}]}>
          <TextInput placeholder="Mật khẩu cũ" style={styles.textInput} />
          <TouchableOpacity style={styles.Selecter}>
            <EyeIcon color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.boxInput, {flexDirection: 'row'}]}>
          <TextInput placeholder="Mật khẩu mới" style={styles.textInput} />
          <TouchableOpacity style={styles.Selecter}>
            <EyeIcon color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.boxInput, {flexDirection: 'row'}]}>
          <TextInput placeholder="Xác nhận mật khẩu" style={styles.textInput} />
          <TouchableOpacity style={styles.Selecter}>
            <EyeIcon color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.Viewbtn}>
          <TouchableOpacity onPress={showModal}>
            <Text style={styles.btnL}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btnR}>Hủy</Text>
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
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: '#307FD1',
    borderRadius: scale(30),
    paddingHorizontal: scale(17),
    paddingVertical: scale(10),
    color: 'white',
    margin: scale(5),
    elevation: 5,
  },
  btnR: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    backgroundColor: 'white',
    borderRadius: scale(30),
    paddingHorizontal: scale(50),
    paddingVertical: scale(10),
    color: '#307FD1',
    margin: scale(5),
    borderWidth: scale(1),
    borderColor: '#307FD1',
    elevation: 5,
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
});
