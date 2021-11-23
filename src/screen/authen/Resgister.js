import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CameraIcon} from '../../../assets/icon';
import * as ImagePicker from 'react-native-image-picker';
import TextInputStyle from '../../components/TextInputStyle';
import TextInputPassword from '../../components/TextInputPassword';
import ButtonStyle from '../../components/ButtonStyle';
import {useDispatch, useSelector} from 'react-redux';
import SelectModal from '../../components/SelectModal';
import TextInputSelected from '../../components/TextInputSelected';
import fonts from '../../constant/fonts';
import {jobs, provinces} from '../../data/Jobs';
import ModalStyle from '../../components/ModalStyle';
import {validateEmail, isVietnamesePhoneNumber} from '../../base/Validate';
import {
  loadRegisterEmployer,
  loadRegisterFreelancer,
} from '../../redux/actions/actions';
import LoadSreen from '../../components/loadScreen';

const Resgister = ({navigation, route}) => {
  const checkLogin = useSelector(state => state.Authen.check_type);
  const success = useSelector(state => state.Authen.is_register);
  const load = useSelector(state => state.Authen.requesting);

  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [desiredProfession, setDesiredProfession] = useState('');
  const [province, setProvince] = useState('');
  const [isProvince, setIsProvince] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (success === true) {
      navigation.navigate('OTP_Confirm', {email_otp: email, type: 'register'});
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, load]);

  const submit = () => {
    if (!email || !pass || !phone || !name || !address) {
      onValidate();
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else if (!validateEmail(email)) {
      onValidate();
      setError('Email không đúng định dạng. Vui lòng nhập lại ! ');
    } else if (!isVietnamesePhoneNumber(phone)) {
      onValidate();
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại ! ');
    } else if (pass1 !== pass) {
      onValidate();
      setError('Mật khẩu không đúng. Vui lòng nhập lại ! ');
    } else {
      checkLogin === 'flc'
        ? dispatch(
            loadRegisterFreelancer(
              email,
              pass,
              name,
              phone,
              address,
              desiredProfession.title,
              province.title,
            ),
          )
        : dispatch(loadRegisterEmployer(email, pass, name, phone, address));
    }
  };

  const onValidate = () => {
    setIsValidate(!isValidate);
  };

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
  const selectItem = item => {
    setDesiredProfession(item);
    handleOpen();
  };

  const handleOpen = () => {
    setVisible(!visible);
  };

  const selectProvince = item => {
    setProvince(item);
    handleSelectProvince();
  };

  const handleSelectProvince = () => {
    setIsProvince(!isProvince);
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
                  ? require('../../../assets/images/avatar_icon.png')
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
          <View style={styles.form}>
            <TextInputStyle
              Label="Họ và tên"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInputStyle
              Label="Số điện thoại"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <TextInputStyle
              Label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInputPassword
              Label="Mật khẩu"
              value={pass}
              onChangeText={text => setPass(text)}
            />
            <TextInputPassword
              Label="Nhập lại mật khẩu"
              value={pass1}
              onChangeText={text => setPass1(text)}
            />
            <TextInputStyle
              Label="Địa chỉ"
              value={address}
              onChangeText={text => setAddress(text)}
            />
            {checkLogin === 'flc' && (
              <View>
                <TextInputSelected
                  Label="Nơi làm việc mong muốn"
                  value={province.title}
                  onChangeText={text => setProvince(text)}
                  onPress={handleSelectProvince}
                />
                <TextInputSelected
                  Label="Ngành nghề mong muốn"
                  value={desiredProfession.title}
                  onChangeText={text => setDesiredProfession(text)}
                  onPress={handleOpen}
                />
              </View>
            )}
          </View>

          <ButtonStyle Title="Xác nhận" onPress={submit} />
          <View style={styles.row}>
            <Text style={styles.txt_login}>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.btnlogin}>ĐĂNG NHẬP NGAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <SelectModal
        isVisible={visible}
        onBackdropPress={handleOpen}
        label={'Ngành nghề mong muốn'}
        onPress={item => selectItem(item)}
        data={jobs}
      />

      <SelectModal
        isVisible={isProvince}
        onBackdropPress={handleSelectProvince}
        label={'Nơi làm việc mong muốn'}
        onPress={item => selectProvince(item)}
        data={provinces}
      />
      <ModalStyle
        isVisible={isValidate}
        onBackdropPress={() => setIsValidate(false)}
        content={error}
      />
      <LoadSreen load={load} />
    </View>
  );
};

export default Resgister;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
  },
  title: {
    fontSize: scale(25),
    textAlign: 'center',
    color: '#4C5BD4',
    marginTop: '20%',
    fontFamily: fonts.NORMAL,
  },
  title2: {
    fontWeight: '400',
    fontSize: scale(12),
    textAlign: 'center',
    color: '#4C5BD4',
    marginTop: scale(10),
    fontFamily: fonts.NORMAL,
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
    bottom: 0,
    right: 0,
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
    fontFamily: fonts.NORMAL,
  },
  txt_login: {
    fontSize: scale(14),
    fontWeight: '400',
    color: '#404040',
    marginTop: scale(30),
    marginBottom: scale(30),
    fontFamily: fonts.NORMAL,
  },
  btnlogin: {
    color: '#307df1',
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: scale(30),
    fontFamily: fonts.NORMAL,
  },
  form: {marginTop: scale(20), marginBottom: '7%'},
  row: {flexDirection: 'row'},
});
