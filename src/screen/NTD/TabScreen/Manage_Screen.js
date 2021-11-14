import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {FoderICon, FocusIcon, LogoutIcon} from '../../../../assets/icon';
import {Modal} from 'react-native-paper';
const Manage_Screen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const submit = () => {};
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <Image
          source={require('../../../../assets/img/logoVin.png')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Vingroup</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('UpdateInfoNTD')}>
        <View>
          <FoderICon />
        </View>
        <Text styles={styles.Textbtn}>Cập nhật thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ChangePassNTD')}>
        <View>
          <FocusIcon />
        </View>
        <Text styles={styles.Textbtn}>Đổi mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={showModal}>
        <View>
          <LogoutIcon />
        </View>
        <Text styles={styles.Textbtn}>Đăng xuất</Text>
      </TouchableOpacity>

      <Image
        source={require('../../../../assets/img/imgbgJob.png')}
        style={{
          backgroundColor: 'white',
          height: scale(211),
          width: scale(375),
          marginTop: scale(10),
        }}
      />
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.modal}>
          <Text
            style={{
              color: '#307Df1',
              fontSize: scale(20),
              fontWeight: '400',
              width: scale(255),
              textAlign: 'center',
            }}>
            Bạn có chắc chắn muốn đăng xuất?
          </Text>
          <View style={styles.Viewbtn}>
            <TouchableOpacity onPress={submit}>
              <Text style={styles.btnL}>Đăng xuất</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <Text style={styles.btnR}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Manage_Screen;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(180),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
  },
  avatar: {
    height: scale(100),
    width: scale(100),
  },
  Textbtn: {
    fontWeight: '400',
    fontSize: scale(18),
    marginLeft: scale(20),
    color: '#404040',
  },
  btn: {
    flexDirection: 'row',
    marginTop: scale(20),
    marginLeft: scale(20),
  },
  modal: {
    width: scale(335),
    height: scale(176),
    borderRadius: scale(20),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(7),
  },
  Viewbtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scale(10),
  },
  btnL: {
    fontWeight: '500',
    fontSize: scale(16),
    backgroundColor: '#307FD1',
    borderRadius: scale(30),
    paddingHorizontal: scale(28),
    paddingVertical: scale(10),
    color: 'white',
    margin: scale(5),
  },
  btnR: {
    fontWeight: '500',
    fontSize: scale(16),
    backgroundColor: 'white',
    borderRadius: scale(30),
    paddingHorizontal: scale(50),
    paddingVertical: scale(10),
    color: '#307FD1',
    margin: scale(5),
    borderWidth: scale(1),
    borderColor: '#307FD1',
  },
});
