import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../constant/icons';
import images from '../../constant/images';
import Logout from '@components/Logout';
import fonts from '@constant/fonts';
import colors from '../../constant/colors';
import { isIos } from "../../Utils/CheckDevice";

export default function ManageFlc({navigation}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.imgBalloon} source={images.balloon} />
        <View style={styles.avatar}>
          <Image style={styles.imgAvatar} source={images.avatar} />
          <Text style={styles.txtName}>Hoàng Phong</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('JobPass')}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.shakehand} />
            <Text style={styles.txtStatus}>Việc làm đã ứng tuyển</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('JobSaved')}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.heart_blue} />
            <Text style={styles.txtStatus}>Việc làm đã lưu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.synchronize} />
            <Text style={styles.txtStatus}>Đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.logout} />
            <Text style={styles.txtStatus}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image style={{marginTop: scale(10)}} source={images.jobhunt} />
      <Logout on={modal} off={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
    paddingTop: scale(isIos ? 60 : 0),
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
  },
  imgBalloon: {
    marginLeft: scale(50),
  },
  avatar: {position: 'absolute', left: scale(120), top: scale(30)},
  imgAvatar: {
    height: scale(100),
    width: scale(100),
    overflow: 'hidden',
    borderRadius: scale(200),
  },
  txtName: {
    fontSize: scale(20),
    fontFamily: fonts.NORMAL,
    color: '#fff',
    marginTop: scale(10),
    right: scale(20),
  },
  row: {flexDirection: 'row', marginTop: scale(5)},
});
