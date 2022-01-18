import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextInputStyle from '../../components/TextInputStyle';
import TextInputPassword from '../../components/TextInputPassword';
import ButtonStyle from '../../components/ButtonStyle';
import SelectModal from '../../components/SelectModal';
import TextInputSelected from '../../components/TextInputSelected';
import fonts from '../../constant/fonts';
import {jobs, location} from '../../data/Jobs';
import ModalStyle from '../../components/ModalStyle';
import {validateEmail, isVietnamesePhoneNumber} from '../../base/Validate';
import LoadSreen from '../../components/loadScreen';
import axios from 'axios';
import {useSelector} from 'react-redux';

const Resgister = ({navigation, route}) => {
  const checkLogin = useSelector(state => state.Authen.check_type);
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [desiredProfession, setDesiredProfession] = useState('');
  const [province, setProvince] = useState('');
  const [isProvince, setIsProvince] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [locations, setLocation] = useState([]);

  useEffect(() => {
    provinces();
    return () => {};
  }, []);

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
      register();
    }
  };

  const register = () => {
    setSuccess(true);
    var data = JSON.stringify({
      email: email,
      password: pass,
      name: name,
      phone: phone,
      address: address,
      industry: checkLogin === 'flc' ? desiredProfession.title : null,
      job_adress: checkLogin === 'flc' ? province.title : null,
      role: checkLogin === 'flc' ? 'candidate' : 'employer',
    });

    var config = {
      method: 'post',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/auth/register',
      headers: {
        Authorization: '',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setSuccess(false);
        navigation.navigate('OTP_Confirm', {
          email_otp: email,
          type: 'register',
        });
      })
      .catch(function (error) {
        setSuccess(false);
        console.log(error);
      });
  };

  const provinces = () => {
    var config = {
      method: 'get',
      url: 'http://61e5c3e7c14c7a0017124e62.mockapi.io/poly/api/areafpt',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setLocation(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onValidate = () => {
    setIsValidate(!isValidate);
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
          <Text style={styles.title}>
            Đăng ký {checkLogin === 'flc' ? 'ứng viên' : 'nhà tuyển dụng'}
          </Text>
          <Text style={styles.title2}>
            Nhập đầy đủ thông tin để hoàn thành đăng ký
          </Text>

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
              keyboardType="numeric"
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
            {checkLogin === 'flc' ? (
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
            ) : null}
          </View>

          <ButtonStyle
            Title="Xác nhận"
            onPress={submit}
            styleBtn={{width: scale(130)}}
          />
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
        data={locations ? locations : location}
      />
      <ModalStyle
        isVisible={isValidate}
        onBackdropPress={() => setIsValidate(false)}
        content={error}
      />
      <LoadSreen load={success} />
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
    fontWeight: 'bold',
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
