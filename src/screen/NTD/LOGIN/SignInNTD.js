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
import {CameraIcon, Selecter, EyeIconPass} from '@assets/icon';
import * as ImagePicker from 'react-native-image-picker';
import {Modal, Portal} from 'react-native-paper';
import {isVietnamesePhoneNumber, validateEmail} from '@base/Validate';
import SignIn_NTD from '@base/API/apiNTD/SignIn_NTD';
const SignInNTD = ({navigation, route}) => {
  const {item} = route.params;
  const cityid = item.cit_id;
  const {nameDistrict, idDistrict} = route.params;
  const districtID = idDistrict;
  const [showP, setShowP] = useState(true);
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Tỉnh thành');
  const [district, setDistrict] = useState('Quận huyện');
  const [address, setAddress] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = useState('');
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
  const submit = () => {
    if (
      !phone ||
      !pass ||
      !pass1 ||
      !name ||
      !email ||
      !address ||
      city == 'Tỉnh thành' ||
      district == 'Quận huyện'
    ) {
      setMessage('Các ô nhập là bắt buộc không được để trống');
      setVisible(true);
    } else if (!isVietnamesePhoneNumber(phone)) {
      setMessage('Số điện thoại nhập không đúng định dạng');
      setVisible(true);
    } else if (reg.test(pass) === false) {
      setMessage(
        'Mật khẩu cần có ít nhất 8 ký tự, ít nhất một chữ cái và một số và không có dấu cách',
      );
      setVisible(true);
    } else if (pass1 != pass) {
      setMessage('Nhập lại mật khẩu không trùng khớp ');
      setVisible(true);
    } else if (nametest.test(name) === true) {
      setMessage('Tên doanh nghiệp không được chứa ký tự đặc biệt');
      setVisible(true);
    } else if (!validateEmail(email)) {
      setMessage('Email không đúng định dạng');
      setVisible(true);
    } else if (logo == null) {
      setMessage('Bạn chưa chọn logo đại diện cho công ty');
      setVisible(true);
    } else {
      PostSignUp();
    }
  };
  const PostSignUp = async () => {
    try {
      var data = new FormData();
      data.append('email', email);
      data.append('phone', phone);
      data.append('name', name);
      data.append('pass', pass);
      data.append('re_pass', pass1);
      data.append('tinhthanh', cityid);
      data.append('quanhuyen', districtID);
      data.append('address', address);
      if (logo) {
        const file = {
          uri: logo.assets[0].uri,
          name: logo.assets[0].fileName,
          type: logo.assets[0].type,
        };
        data.append('logo', file);
      }
      const response = await SignIn_NTD.SignUp(data);
      if (response.data == null) {
        setMessage(response.error.message);
        setVisible(true);
      } else {
        navigation.navigate('OTP_Confirm', {
          token: response.data.token,
          email_otp: email,
        });
        console.log(response.data.token);
      }
      console.log(response.data.token);
    } catch (error) {
      console.log('Call lỗi rồi đại ca ơi!' + error);
    }
  };
  const AddressChecker = () => {
    if (city == 'Tỉnh thành') {
      setMessage('Bạn phải chọn Tỉnh thành trước');
      setVisible(true);
    } else {
      navigation.navigate('DistrictNTD', {cityid});
    }
  };
  useEffect(() => {
    item.cit_name && setCity(item.cit_name);
    nameDistrict && setDistrict(nameDistrict);
  }, [item, nameDistrict]);

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
                  ? require('@assets/images/avatar_icon.png')
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
          <View style={[styles.boxInput, {marginTop: scale(20)}]}>
            <TextInput
              placeholder="Nhập số điện thoại"
              value={phone}
              onChangeText={input => setPhone(input)}
              style={styles.textInput}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.boxRow}>
            <TextInput
              secureTextEntry={showP}
              placeholder="Nhập mật khẩu"
              value={pass}
              onChangeText={input => setPass(input)}
              style={styles.textInput}
            />
            <TouchableOpacity
              style={{marginRight: scale(10)}}
              onPress={() => setShowP(!showP)}>
              <EyeIconPass color="#808080" />
            </TouchableOpacity>
          </View>
          <View style={styles.boxRow}>
            <TextInput
              secureTextEntry={showP}
              placeholder="Nhập lại mật khẩu"
              value={pass1}
              onChangeText={input => setPass1(input)}
              style={styles.textInput}
            />
            <TouchableOpacity
              style={{marginRight: scale(10)}}
              onPress={() => setShowP(!showP)}>
              <EyeIconPass color="#808080" />
            </TouchableOpacity>
          </View>
          <View style={styles.boxInput}>
            <TextInput
              placeholder="Tên doanh nghiệp"
              style={styles.textInput}
              value={name}
              onChangeText={input => setName(input)}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              value={email}
              onChangeText={input => setEmail(input)}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              placeholder="Địa chỉ"
              style={styles.textInput}
              value={address}
              onChangeText={input => setAddress(input)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CityNTD');
            }}>
            <View style={styles.boxRow}>
              <Text style={styles.textInput}>{city}</Text>
              <View style={{marginRight: scale(10)}}>
                <Selecter />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={AddressChecker}>
            <View style={styles.boxRow}>
              <Text style={styles.textInput}>{district}</Text>
              <View style={{marginRight: scale(10)}}>
                <Selecter />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={submit}>
            <Text style={styles.btnSigin}>Đăng ký</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt_login}>Bạn đã có tài khoản ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginNTD')}>
              <Text style={styles.btnlogin}>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.viewModal}>
          <View style={styles.viewContent}>
            <Text style={styles.tbmd}>Thông báo</Text>
            <Text style={styles.content}>{message}.</Text>
          </View>
          <TouchableOpacity
            style={styles.btntb}
            onPress={() => setVisible(false)}>
            <Text style={styles.confirm}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SignInNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: scale(30),
    textAlign: 'center',
    color: '#307DF1',
    marginTop: scale(10),
  },
  title2: {
    fontWeight: '400',
    fontSize: scale(14),
    textAlign: 'center',
    color: '#307DF1',
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
    borderColor: '#307DF1',

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
  btnSigin: {
    fontWeight: '500',

    fontSize: scale(16),
    textAlign: 'center',
    backgroundColor: '#307DF1',
    paddingHorizontal: scale(23),
    paddingVertical: scale(11),
    borderRadius: scale(30),
    color: 'white',
    marginTop: scale(20),
  },
  boxRow: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',

    margin: scale(5),
    borderRadius: scale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: '#307df1',
    borderWidth: scale(0.5),
    borderColor: '#307df1',
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
    borderRadius: scale(30),
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
  viewModal: {
    height: scale(200),
    backgroundColor: 'white',
    width: scale(300),

    margin: scale(25),
    borderRadius: scale(30),
    marginTop: scale(-50),
  },
  tbmd: {
    fontSize: scale(24),
    fontWeight: '700',
    color: '#307df1',
    marginTop: scale(15),
  },
  content: {
    fontSize: scale(18),
    fontWeight: '600',
    color: '#404040',
    margin: scale(15),
    textAlign: 'center',
  },
  confirm: {
    color: '#307df1',
    fontSize: scale(24),
    marginTop: scale(8),
  },
  btntb: {
    borderTopWidth: scale(0.3),
    borderColor: '#404040',
    width: scale(300),

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  viewContent: {
    alignItems: 'center',
    height: scale(130),
  },
});
