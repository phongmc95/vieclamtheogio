import React, {useState} from 'react';
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
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function UpdateInfomation({navigation, route}) {
  const {info} = route.params;
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [marital, setMarital] = useState('');
  const [address, setAddress] = useState('');

  const submit = () => {
    var data = {
      name: name,
      birthday: birthday,
      gender: gender,
      marital_status: marital,
      address: address,
    };

    var config = {
      method: 'patch',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/updateUser',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('data: ', data);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (navigation.canGoBack) {
          navigation.goBack();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBasic title="thông tin liên hệ" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.avatar} source={images.avatar} />
            <Text style={styles.txtAvatar}>Cập nhật ảnh đại diện</Text>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.textInput}
              placeholder={info.name}
            />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={birthday}
              onChangeText={setBirthday}
              style={styles.textInput}
              placeholder={info.birthday ? info.birthday : 'Ngày sinh'}
            />
            <TouchableOpacity>
              <Image style={styles.icon} source={icons.calendar_wb} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={gender}
              onChangeText={setGender}
              style={styles.textInput}
              placeholder={info.gender}
            />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={marital}
              onChangeText={setMarital}
              style={styles.textInput}
              placeholder={
                info.marital_status
                  ? info.marital_status
                  : 'Tình trạng hôn nhân'
              }
            />
            <TouchableOpacity>
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
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={submit}>
            <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
          </TouchableOpacity>
          <Button title="Không lưu" color="#307df1" bg={colors.GRAY} />
        </View>
      </ScrollView>
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
    height: scale(60),
    width: '100%',
    backgroundColor: colors.LIGHT_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scale(10),
  },
});
