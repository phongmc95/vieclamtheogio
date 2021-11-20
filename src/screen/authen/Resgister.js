import React, {useState} from 'react';
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
import {useSelector} from 'react-redux';
import SelectModal from '../../components/SelectModal';
import TextInputSelected from '../../components/TextInputSelected';
import fonts from '../../constant/fonts';
import {jobs} from '../../data/Jobs';
import ModalStyle from '../../components/ModalStyle';
import { validateEmail } from "../../base/Validate";
const Resgister = ({navigation, route}) => {
  const checkLogin = useSelector(state => state.Authen.check_type);
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [desiredProfession, setDesiredProfession] = useState('');
  const [desiredWorkplace, setDesiredWorkplace] = useState('');
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');

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
  const selectItem = item => {
    setDesiredProfession(item);
    handleOpen();
  };

  const handleOpen = () => {
    setVisible(!visible);
  };
  const validateForm = () => {
    if (!phone || !name || !email || !address || !pass || !pass1) {
      setModal(true);
      setError('Các ô nhập là bắt buộc không được để trống! ');
    }else if(!validateEmail(email)){}
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
                <TextInputStyle
                  Label="Nơi làm việc mong muốn"
                  value={desiredWorkplace}
                  onChangeText={text => setDesiredWorkplace(text)}
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

          <ButtonStyle
            Title="Xác nhận"
            styleBtn={{width: scale(120)}}
            onPress={validateForm}
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
        label={'Công việc mong muốn'}
        onPress={item => selectItem(item)}
        data={jobs}
      />
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
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
