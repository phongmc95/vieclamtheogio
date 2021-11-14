import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {s, scale} from 'react-native-size-matters';
import {CameraIcon, Selecter, EyeIconPass} from '../../../../assets/icon';
import * as ImagePicker from 'react-native-image-picker';
import TextInputStyle from '../../../components/TextInputStyle';
import TextInputPassword from '../../../components/TextInputPassword';
import ButtonStyle from '../../../components/ButtonStyle';
const SignInNTD = ({navigation, route}) => {
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const nametest = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const options = {
    mediaType: 'photo',
    // includeBase64: true,
    maxWidth: 2048,
    maxHeight: 2048,
  };
  const openCamera = () => {
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }
      setLogo(response);
    });
  };
  const openLibry = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }

      setLogo(response);
    });
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.contener}>
          <Text style={styles.title}>Đăng ký nhà tuyển dụng</Text>
          <Text style={styles.title2}>
            Nhập đầy đủ thông tin để hoàn thành đăng ký
          </Text>
          <View style={styles.camera}>
            <Image
              style={styles.avatar}
              source={
                !logo
                  ? require('../../../../assets/images/avatar_icon.png')
                  : {uri: logo.assets[0].uri}
              }
            />
            <TouchableOpacity style={styles.btncamera} onPress={openCamera}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={openLibry}>
            <Text style={styles.openLibry}>Chọn ảnh</Text>
          </TouchableOpacity>
          <View style={{marginTop: scale(20), marginBottom: '7%'}}>
            <TextInputStyle
              Label="Phone"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <TextInputPassword
              Label="Password"
              value={pass}
              onChangeText={text => setPass(text)}
            />
            <TextInputPassword
              Label="Confirm Password"
              value={pass1}
              onChangeText={text => setPass1(text)}
            />
            <TextInputStyle
              Label="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInputStyle
              Label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInputStyle
              Label="Address"
              value={address}
              onChangeText={text => setAddress(text)}
            />
          </View>

          <ButtonStyle Title="Đăng Kí" styleBtn={{width: scale(120)}} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt_login}>Bạn đã có tài khoản ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginNTD')}>
              <Text style={styles.btnlogin}>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
  },
  title: {
    fontWeight: '700',
    fontSize: scale(30),
    textAlign: 'center',
    color: '#4C5BD4',
    marginTop: '20%',
  },
  title2: {
    fontWeight: '400',
    fontSize: scale(14),
    textAlign: 'center',
    color: '#4C5BD4',
    marginTop: scale(10),
  },
  camera: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(50),
    backgroundColor: '#C4C4C4',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#4C5BD4',

    justifyContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(20),
    color: '#404040',
  },

  avatar: {
    height: scale(80),
    width: scale(80),
    borderRadius: scale(40),
  },
  btncamera: {
    position: 'absolute',
  },
  openLibry: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#4C5BD4',
    borderWidth: scale(0.5),
    borderColor: '#4C5BD4',
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
    borderRadius: scale(10),
    marginTop: scale(10),
  },
  txt_login: {
    fontSize: scale(16),
    fontWeight: '400',
    color: '#404040',
    marginTop: scale(30),
    marginBottom: scale(30),
  },
  btnlogin: {
    color: '#307df1',
    fontSize: scale(18),
    fontWeight: '400',
    marginTop: scale(28),
  },
  // modal
});
