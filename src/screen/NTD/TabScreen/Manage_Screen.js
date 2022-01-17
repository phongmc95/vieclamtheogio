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
import axios from 'axios';
import {useIsFocused} from '@react-navigation/core';
import {LOG_OUT} from '../../../redux/actions/type/Type';
const Manage_Screen = ({navigation}) => {
  const data = useSelector(state => state.ProfileEPl.data);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/users/${data?.user?._id}`,
    };

    axios(config)
      .then(function (response) {
        setProfile(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const submit = () => {
    dispatch({
      type: LOG_OUT,
    });
    navigation.push('Intro');
    hideModal();
  };
  return (
    <View style={styles.contener}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <View style={styles.StatusBar}>
        <Image
          source={!profile?.avatar ? logo : {uri: profile?.avatar}}
          style={styles.avatar}
        />
        <Text style={styles.title}>{profile?.name}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('UpdateInfoNTD', {item: profile})}>
          <View style={styles.icon}>
            <FoderICon />
          </View>
          <Text style={styles.Textbtn}>Cập nhật thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('UpdatePassword')}>
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
              fontFamily: fonts.NORMAL,
              textAlign: 'center',
            }}>
            Bạn có chắc chắn muốn đăng xuất?
          </Text>
          <View style={styles.Viewbtn}>
            <TouchableOpacity onPress={submit}>
              <View style={styles.button}>
                <Text style={styles.btnL}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <View style={styles.buttonCancel}>
                <Text style={styles.btnR}>Hủy</Text>
              </View>
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
    fontFamily: fonts.BOLD,
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
    padding: scale(25),
  },
  Viewbtn: {
    flexDirection: 'row',
    marginTop: '17%',
  },
  btnL: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    color: 'white',
  },
  btnR: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    backgroundColor: 'white',
    color: '#307FD1',
  },
  icon: {marginTop: scale(3)},
  button: {
    borderRadius: scale(10),
    backgroundColor: '#307FD1',
    paddingHorizontal: scale(28),
    paddingVertical: scale(10),
    margin: scale(5),
  },
  buttonCancel: {
    backgroundColor: '#fff',
    paddingHorizontal: scale(50),
    paddingVertical: scale(9),
    margin: scale(5),
    borderColor: '#307FD1',
    borderRadius: scale(10),
    borderWidth: 1,
  },
});
