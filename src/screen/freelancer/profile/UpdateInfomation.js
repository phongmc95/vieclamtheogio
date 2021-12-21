import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import images from '@constant/images';
import Button from '@components/Button/Button';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import axios from 'axios';
import moment from 'moment';
import * as ImagePicker from 'react-native-image-picker';
import SelectModal from '../../../components/SelectModal';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';

const listGender = [
  {id: 1, title: 'Nam'},
  {id: 2, title: 'Nữ'},
];
const listMarital = [
  {id: 1, title: 'Độc thân'},
  {id: 2, title: 'Đã kết hôn'},
];

export default function UpdateInfomation({navigation, route}) {
  const {info} = route.params;
  const [name, setName] = useState(info.name);
  const [birthday, setBirthday] = useState(info.birthday);
  const [gender, setGender] = useState('');
  const [marital, setMarital] = useState('Tình trạng hôn nhân');
  const [address, setAddress] = useState(info.address);
  const [avatar, setAvatar] = useState({uri: info?.avatar});
  const [checkGender, setCheckGender] = useState(false);
  const [checkMarital, setCheckMarital] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);

  useEffect(() => {
    setMarital(info?.marital_status);
    setGender(info?.gender);
    return () => {};
  }, [info]);

  const handleGender = () => {
    setCheckGender(!checkGender);
  };

  const handleMarital = () => {
    setCheckMarital(!checkMarital);
  };

  const handleBirthday = () => {
    setOpenPicker(!openPicker);
  };

  const selectBirthday = date => {
    setBirthday(moment(date).format('DD/MM/YYYY'));
    handleBirthday();
  };

  const selectGender = item => {
    setGender(item.title);
    handleGender();
  };

  const selectMarital = item => {
    setMarital(item.title);
    handleMarital();
  };

  const submit = () => {
    var data = {
      name: name,
      birthday: birthday,
      gender: gender,
      marital_status: marital,
      address: address,
    };
    console.log('data: ', data);

    var config = {
      method: 'patch',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/updateUser',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        uploadImage();
        if (navigation.canGoBack) {
          navigation.goBack();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const uploadImage = () => {
    var data = new FormData();
    data.append('photo', avatar);
    data.append('email', info.email);

    var config = {
      method: 'post',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/picture-upload',
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
      setAvatar({
        uri: response.assets[0].uri,
        name: response.assets[0].fileName,
        type: response.assets[0].type,
      });
    });
  };
  const openLibry = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }

      setAvatar({
        uri: response.assets[0].uri,
        name: response.assets[0].fileName,
        type: response.assets[0].type,
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBasic title="thông tin liên hệ" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.avatar}
              source={avatar ? {uri: avatar.uri} : images.avatar}
            />
            <TouchableOpacity onPress={openLibry}>
              <Text style={styles.txtAvatar}>Cập nhật ảnh đại diện</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.textInput}
              placeholder={info.name}
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={birthday}
              onChangeText={setBirthday}
              style={styles.textInput}
              placeholder={info.birthday ? info.birthday : 'Ngày sinh'}
              placeholderTextColor="#000"
            />
            <TouchableOpacity onPress={handleBirthday}>
              <Image style={styles.icon} source={icons.calendar_wb} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={openPicker}
              mode="date"
              onConfirm={selectBirthday}
              onCancel={handleBirthday}
            />
          </View>

          <View style={styles.boxTextInput}>
            {/* <TextInput
              value={gender}
              onChangeText={setGender}
              style={styles.textInput}
              placeholder={info.gender}
            /> */}
            <Text style={styles.textInput}>{gender}</Text>
            <TouchableOpacity onPress={handleGender}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            {/* <TextInput
              value={marital}
              onChangeText={setMarital}
              style={styles.textInput}
              placeholder={
                info.marital_status
                  ? info.marital_status
                  : 'Tình trạng hôn nhân'
              }
            /> */}
            <Text style={styles.textInput}>{marital}</Text>
            <TouchableOpacity onPress={handleMarital}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              style={styles.textInput}
              value={info.phone}
              editable={false}
            />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              style={styles.textInput}
              editable={false}
              value={info.email}
            />
          </View>

          {/* <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Tỉnh thành" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Quân huyện" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View> */}

          <View style={styles.boxTextInput}>
            <TextInput
              value={address}
              onChangeText={setAddress}
              style={styles.textInput}
              placeholder={info.address}
              placeholderTextColor="#000"
            />
          </View>
        </View>
        <SelectModal
          isVisible={checkGender}
          onBackdropPress={handleGender}
          label={'Giới tính'}
          onPress={item => selectGender(item)}
          data={listGender}
        />
        <SelectModal
          isVisible={checkMarital}
          onBackdropPress={handleMarital}
          label={'Tình trạng hôn nhân'}
          onPress={item => selectMarital(item)}
          data={listMarital}
        />
      </ScrollView>
      <View style={styles.button}>
        <TouchableOpacity onPress={submit}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button title="Không lưu" color="#307df1" bg={colors.GRAY} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  avatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(200),
    marginVertical: scale(10),
  },
  txtAvatar: {
    fontSize: scale(16),
    marginTop: scale(10),
    color: '#404040',
    marginBottom: scale(30),
    fontFamily: fonts.NORMAL,
  },
  textInput: {
    fontFamily: fonts.ITALIC,
    fontSize: scale(16),
    marginLeft: scale(15),
    width: '83%',
    color: colors.BLACK,
    paddingVertical: scale(8),
  },
  boxTextInput: {
    flexDirection: 'row',
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderColor: '#307df1',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    borderRadius: scale(5),
    marginVertical: scale(10),
  },
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
  button: {
    width: '100%',
    backgroundColor: colors.LIGHT_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: scale(5),
  },
});
