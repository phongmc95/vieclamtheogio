import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {FoderICon, FocusIcon, LogoutIcon} from '../../../../assets/icon';
import {Modal} from 'react-native-paper';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';
import {log_out} from '../../../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../../../../assets/img/logoVin.png';
const Manage_Screen = ({navigation}) => {
  const data = useSelector(state => state.ProfileEPl.data);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(log_out());
    navigation.navigate('Intro');
  };
  return (
    <View style={styles.contener}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <View style={styles.StatusBar}>
        <Image
          source={!data?.user?.avatar ? logo : {uri: data?.user?.avatar}}
          style={styles.avatar}
        />
        <Text style={styles.title}>{data?.user?.name}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('UpdateInfoNTD')}>
          <View style={styles.icon}>
            <FoderICon />
          </View>
          <Text style={styles.Textbtn}>Cập nhật thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ChangePassNTD')}>
          <View style={styles.icon}>
            <FocusIcon />
          </View>
          <Text style={styles.Textbtn}>Đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={showModal}>
          <View style={styles.icon}>
            <LogoutIcon />
          </View>
          <Text style={styles.Textbtn}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../../../assets/img/imgbgJob.png')}
        style={{
          backgroundColor: 'white',
          height: scale(211),
          width: scale(375),
          marginTop: '20%',
        }}
      />
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.modal}>
          <Text
            style={{
              color: '#307Df1',
              fontSize: scale(20),
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: scale(40),
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
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(180),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    alignItems: 'center',
    paddingTop: scale(50),
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    paddingTop: scale(10),
  },
  avatar: {
    height: scale(80),
    width: scale(80),
    borderRadius: scale(40),
  },
  Textbtn: {
    fontFamily: fonts.NORMAL,
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
    alignItems: 'center',
    margin: scale(7),
    padding: scale(20),
  },
  Viewbtn: {
    flexDirection: 'row',
  },
  btnL: {
    fontWeight: '500',
    fontSize: scale(16),
    backgroundColor: '#307FD1',

    paddingHorizontal: scale(28),
    paddingVertical: scale(10),
    color: 'white',
    margin: scale(5),
  },
  btnR: {
    fontWeight: '500',
    fontSize: scale(16),
    backgroundColor: 'white',

    paddingHorizontal: scale(50),
    paddingVertical: scale(10),
    color: '#307FD1',
    margin: scale(5),
    borderWidth: scale(1),
    borderColor: '#307FD1',
  },
  icon: {marginTop: scale(3)},
});
