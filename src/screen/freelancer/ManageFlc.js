import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../constant/icons';
import images from '../../constant/images';
import fonts from '@constant/fonts';
import colors from '../../constant/colors';
import Modal from 'react-native-modal';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {log_out} from '../../redux/actions/actions';
import LoadSreen from '../../components/loadScreen';
import {LOG_OUT} from '../../redux/actions/type/Type';

export default function ManageFlc({}) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.ProfileEPl.data);
  const logout = () => {
    dispatch({
      type: LOG_OUT,
    });
    navigation.push('Intro');
    setModal(false);
  };
  const toggleModal = () => {
    setModal(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <View style={styles.content}>
        <Image
          style={styles.imgAvatar}
          source={
            data?.user?.avatar ? {uri: data?.user?.avatar} : images.avatar
          }
        />
        <Text style={styles.txtName}>{data?.user?.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('JobSaved')}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.heart_wb} />
            <Text style={styles.txtStatus}>Việc làm đã lưu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.synchronize} />
            <Text style={styles.txtStatus}>Đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModal(true)}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.logout} />
            <Text style={styles.txtStatus}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={{marginTop: scale(60), marginBottom: scale(60), width: '100%'}}
        source={images.jobhunt}
      />

      <Modal isVisible={modal}>
        <View style={styles.containerMD}>
          <Text style={styles.contentMD}>Bạn có chắc chắn muốn đăng xuất?</Text>

          <View style={styles.buttonMD}>
            <TouchableOpacity onPress={logout}>
              <Button
                title="Đăng xuất"
                color="#fff"
                bg="#307df1"
                right={scale(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Button title="Hủy" color="#307df1" bg="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
    marginHorizontal: scale(10),
  },
  contentMD: {
    fontSize: scale(18),
    color: '#307df1',
    marginBottom: scale(10),
    textAlign: 'center',
    fontFamily: fonts.BOLD,
  },
  buttonMD: {flexDirection: 'row', top: '15%'},
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
    // paddingTop: scale(isIos ? 60 : 0),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(26),
    marginRight: scale(15),
    marginLeft: scale(20),
  },
  txtStatus: {
    fontSize: scale(18),
    lineHeight: scale(20),
    color: '#404040',
    marginTop: scale(25),
    fontFamily: fonts.NORMAL,
  },
  content: {
    width: '100%',
    height: scale(205),
    backgroundColor: '#307df1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBalloon: {
    marginLeft: scale(50),
  },
  avatar: {position: 'absolute'},
  imgAvatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(200),
  },
  txtName: {
    fontSize: scale(20),
    fontFamily: fonts.BOLD,
    color: '#fff',
    marginTop: scale(10),
    textAlign: 'center',
  },
  row: {flexDirection: 'row', marginTop: scale(5)},
});
