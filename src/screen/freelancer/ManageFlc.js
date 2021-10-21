import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../constant/icons';
import images from '../../constant/images';
import Logout from '@components/Logout';

export default function ManageFlc({navigation}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: scale(198),
          backgroundColor: '#307df1',
          borderBottomLeftRadius: scale(20),
          borderBottomRightRadius: scale(20),
        }}>
        <Image
          style={{
            marginLeft: scale(50),
          }}
          source={images.balloon}
        />
        <View style={{position: 'absolute', left: scale(120), top: scale(30)}}>
          <Image
            style={{
              height: scale(100),
              width: scale(100),
              borderRadius: scale(200),
            }}
            source={images.avatar}
          />
          <Text
            style={{
              fontSize: scale(20),
              fontWeight: '500',
              color: '#fff',
              marginTop: scale(10),
            }}>
            Hoàng Phong
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('JobPass')}>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.shakehand} />
            <Text style={styles.txtStatus}>Việc làm đã ứng tuyển</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('JobSaved')}>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.heart_blue} />
            <Text style={styles.txtStatus}>Việc làm đã lưu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.synchronize} />
            <Text style={styles.txtStatus}>Đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
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
    backgroundColor: '#fff',
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
  },
});
