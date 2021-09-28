import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Touchable,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../../constant/icons';
import Button from '../../../components/Button/Button';
import {useDispatch} from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';
import {TokenFlc} from '../../../redux/actions/freelancer';

export default function RegisterScreen({navigation, route}) {
  const {item, nameDistrict, idDistrict, job_id, job_name, time_working} =
    route.params;
  const cityid = item.cit_id;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [sex, setSex] = useState('Chọn giới tính');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('Ngày sinh');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Tỉnh thành');
  const [district, setDistrict] = useState('Quận huyện');
  const [job_des, setJob_des] = useState('');
  const [category, setCategory] = useState('Ngành nghề mong muốn');
  const [local_des, setLocal_des] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [local, setLocal] = useState([]);

  const toggleBirthday = () => {
    setShow(!show);
  };

  const toggleSex = () => {
    setShow2(!show2);
  };

  const _submit = () => {
    var data = new FormData();
    data.append('uv_username', name);
    data.append('uv_email', email);
    data.append('uv_phone', phone);
    data.append('uv_password', password);
    data.append('uv_repassword', password);
    data.append('uv_address', address);
    data.append('uv_city', cityid);
    data.append('uv_district', idDistrict);
    data.append('uv_cv_mn', job_des);
    data.append('uv_noilv_mn', local_des);
    data.append('uv_nn_mn', job_id);
    data.append('uv_day', String(time_working));
    if (avatar) {
      const file = {
        uri: avatar.assets[0].uri,
        name: avatar.assets[0].fileName,
        type: avatar.assets[0].type,
      };
      data.append('uv_avatar', file);
    }

    var config = {
      method: 'post',
      url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/uv_dky.php',
      data: data,
    };

    axios(config)
      .then(function (response) {
        const data = response.data.data.user_info;
        const token = data.token;
        if (response.data.error == null) {
          navigation.navigate('OTPFlc', {token, email});
        } else if (response.data.data == null) {
          Alert.alert(response.data.error.message);
        }
        console.log(token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    item.cit_name && setCity(item.cit_name);
    nameDistrict && setDistrict(nameDistrict);
    job_name && setCategory(job_name);
  }, [item, nameDistrict, job_name]);

  const AddressChecker = () => {
    if (city == 'Tỉnh thành') {
      Alert.alert('Chọn tỉnh/thành phố trước!!!');
    } else {
      navigation.navigate('DistrictFlc', {cityid, screen: 'RegisterFlc'});
    }
  };

  const options = {
    mediaType: 'photo',
    maxWidth: 2048,
    maxHeight: 2048,
  };
  const openCamera = () => {
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }
      setAvatar(response);
    });
  };

  const openLibry = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }

      setAvatar(response);
      console.log('Avatar' + JSON.stringify(response));
    });
  };

  const timeConverter = time => {
    var a = new Date(time);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var time =
      (date < 10 ? `0${date}` : date) +
      '/' +
      (month < 10 ? `0${month}` : month) +
      '/' +
      year;
    return time;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{padding: scale(20), alignItems: 'center'}}>
          <Text
            style={{
              fontSize: scale(30),
              fontWeight: 'bold',
              color: '#307df1',
              marginVertical: scale(10),
            }}>
            Đăng ký ứng viên
          </Text>
          <Text
            style={{
              fontSize: scale(14),
              color: '#307df1',
              lineHeight: scale(16),
              textAlign: 'center',
            }}>
            Nhập đầy đủ thông tin để hoàn thành đăng ký
          </Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={openCamera}>
              <View style={styles.avatar}>
                <Image
                  style={{
                    height: !avatar ? scale(24) : scale(100),
                    width: !avatar ? scale(24) : scale(100),
                    borderRadius: scale(50),
                  }}
                  source={!avatar ? icons.camera : {uri: avatar.assets[0].uri}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openLibry}>
              <View style={styles.btnAvatar}>
                <Text style={styles.textAvatar}>Tải lên ảnh đại diện</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Họ và tên"
                placeholderTextColor="#404040"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>

            {/* <TouchableOpacity onPress={toggleSex}>
              <View
                style={{
                  flexDirection: 'row',
                  width: scale(330),
                  height: scale(40),
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  borderBottomLeftRadius: show2 ? 0 : 5,
                  borderBottomRightRadius: show2 ? 0 : 5,
                  borderColor: '#307df1',
                  borderWidth: 1,
                  marginTop: scale(5),
                }}>
                <Text style={styles.textInput}>{sex}</Text>

                <Image
                  style={{
                    height: scale(10),
                    width: scale(10),
                    marginLeft: scale(15),
                    marginTop: scale(15),
                  }}
                  source={icons.select}
                />
              </View>
            </TouchableOpacity>
            {show2 && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSex('Nam'), setGender(1), setShow2(!show2);
                  }}>
                  <View
                    style={{
                      width: scale(330),
                      height: scale(40),
                      backgroundColor: '#fff',
                      borderRadius: 1,
                      borderColor: '#307df1',
                      borderRightWidth: 1.5,
                      borderLeftWidth: 1.5,
                    }}>
                    <Text style={styles.textInput}>Nam</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSex('Nữ'), setGender(0), setShow2(!show2);
                  }}>
                  <View
                    style={{
                      width: scale(330),
                      height: scale(40),
                      backgroundColor: '#fff',
                      borderBottomLeftRadius: show2 ? 5 : 0,
                      borderBottomRightRadius: show2 ? 5 : 0,
                      borderColor: '#307df1',
                      borderWidth: 1,
                    }}>
                    <Text style={styles.textInput}>Nữ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )} */}

            <View style={[styles.boxTextInput, {marginTop: scale(10)}]}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Email"
                placeholderTextColor="#404040"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                autoCorrect={false}
              />
            </View>

            <View style={[styles.boxTextInput]}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Số điện thoại"
                placeholderTextColor="#404040"
                value={phone}
                onChangeText={text => setPhone(text)}
                keyboardType="phone-pad"
                autoCorrect={false}
              />
            </View>

            {/* <TouchableOpacity onPress={toggleBirthday}>
              <View
                style={{
                  flexDirection: 'row',
                  width: scale(330),
                  height: scale(40),
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  borderBottomLeftRadius: show ? 0 : 5,
                  borderBottomRightRadius: show ? 0 : 5,
                  borderColor: '#307df1',
                  borderWidth: 1,
                  marginTop: scale(5),
                }}>
                <Text style={styles.textInput}>{birthday}</Text>

                <Image
                  style={{
                    marginTop: scale(10),
                    height: scale(20),
                    width: scale(20),
                    marginLeft: scale(10),
                  }}
                  source={icons.calendar_blue}
                />
              </View>
            </TouchableOpacity>

            {show && (
              <View
                style={{
                  width: scale(330),
                  height: scale(150),
                  marginBottom: scale(10),
                  borderBottomWidth: 1,
                  borderBottomLeftRadius: scale(5),
                  borderBottomRightRadius: scale(5),
                  paddingVertical: scale(5),
                  alignItems: 'center',
                  borderColor: '#307df1',
                  borderRightWidth: 1.5,
                  borderLeftWidth: 1.5,
                }}>
                <DatePicker
                  date={date}
                  onDateChange={day => setBirthday(timeConverter(day))}
                  mode={mode}
                  androidVariant="nativeAndroid"
                />
              </View>
            )} */}

            <View style={[styles.boxTextInput, {marginTop: scale(10)}]}>
              <TextInput
                style={styles.textInput}
                placeholder="Mật khẩu"
                placeholderTextColor="#404040"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={show4 ? true : false}
              />
              <TouchableOpacity onPress={() => setShow4(!show4)}>
                <Image
                  style={{
                    height: scale(20),
                    width: scale(20),
                    marginTop: scale(10),
                    marginLeft: scale(8),
                  }}
                  source={!show4 ? icons.eye_black : icons.eye_invisible}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập lại mật khẩu"
                placeholderTextColor="#404040"
                value={password2}
                onChangeText={text => setPassword2(text)}
                secureTextEntry={show3 ? true : false}
              />
              <TouchableOpacity onPress={() => setShow3(!show3)}>
                <Image
                  style={{
                    height: scale(20),
                    width: scale(20),
                    marginTop: scale(10),
                    marginLeft: scale(8),
                  }}
                  source={!show3 ? icons.eye_black : icons.eye_invisible}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Địa chỉ"
                placeholderTextColor="#404040"
                value={address}
                onChangeText={text => setAddress(text)}
              />
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CityFlc', {screen: 'RegisterFlc'})
              }>
              <View style={styles.boxTextInput}>
                <Text style={styles.textInput}>{city}</Text>

                <Image style={styles.select} source={icons.select2} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={AddressChecker}>
              <View style={styles.boxTextInput}>
                <Text style={styles.textInput}>{district}</Text>

                <Image style={styles.select} source={icons.select2} />
              </View>
            </TouchableOpacity>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Công việc mong muốn"
                placeholderTextColor="#404040"
                value={job_des}
                onChangeText={text => setJob_des(text)}
              />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Nơi làm việc mong muốn"
                placeholderTextColor="#404040"
                value={local_des}
                onChangeText={text => setLocal_des(text)}
              />
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('JobDesiedFlc', {screen: 'RegisterFlc'})
              }>
              <View style={styles.boxTextInput}>
                <Text style={styles.textInput}>{category}</Text>
                <Image style={styles.select} source={icons.select2} />
              </View>
            </TouchableOpacity>

            <View style={styles.boxTextInput}>
              <Text style={styles.textInput}>
                {time_working ? String(time_working) : 'Buổi có thể đi làm'}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('TimeWorkingFlc')}>
                <Image style={styles.select} source={icons.select2} />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: scale(40)}}>
              <TouchableOpacity onPress={_submit}>
                <Button title="Xác nhận" color="#fff" bg="#307df1" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <View
              style={{
                marginTop: scale(20),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: scale(15),
                  color: '#000',
                }}>
                Bạn đã có tài khoản?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginFlc')}>
                <Text style={{fontSize: scale(15), color: '#307df1'}}>
                  ĐĂNG NHẬP NGAY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(100),
    marginVertical: scale(20),
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAvatar: {
    width: scale(184),
    height: scale(35),
    borderRadius: scale(30),
    borderColor: '#969696',
    borderWidth: 0.5,
    marginBottom: scale(20),
  },
  textAvatar: {
    textAlign: 'center',
    fontSize: scale(16),
    lineHeight: scale(26),
    color: '#757575',
    padding: scale(5),
  },
  txtAvatar: {
    fontSize: scale(16),
    marginTop: scale(10),
    color: '#404040',
    marginBottom: scale(30),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '83%',
    color: '#404040',
    paddingTop: scale(8),
  },
  text: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '83%',
  },
  boxTextInput: {
    flexDirection: 'row',
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: '#307df1',
    borderRadius: scale(5),
    marginVertical: scale(5),
    borderWidth: 1,
  },
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
});
