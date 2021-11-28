import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Buttonn from '@components/Button/Button';
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import Modal from 'react-native-modal';
import images from '@constant/images';
import Button from '@components/Button/Button';
import axios from 'axios';
import ModalStyle from '../../../components/ModalStyle';

export default function UpdatePassword({navigation}) {
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [error, setError] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleErrorModal = () => {
    setErrorModal(!errorModal);
  };

  const submit = () => {
    if (!oldPass || !newPass || !rePass) {
      toggleErrorModal();
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else if (rePass !== newPass) {
      toggleErrorModal();
      setError('Mật khẩu không đúng. Vui lòng nhập lại ! ');
    } else {
      var data = {
        oldPassword: oldPass,
        newPassword: newPass,
      };
      console.log('data: ', data);

      var config = {
        method: 'patch',
        url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/updateUserPassword',
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          toggleModal();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <TitleBasic title="đổi mật khẩu" />
      <View style={{marginVertical: scale(20)}}>
        <View style={styles.boxTextInput}>
          <TextInput
            value={oldPass}
            onChangeText={setOldPass}
            secureTextEntry={check1 ? false : true}
            style={styles.textInput}
            placeholder="Mật khẩu cũ"
          />
          <TouchableOpacity onPress={() => setCheck1(!check1)}>
            <Image
              style={styles.icon}
              source={check1 ? icons.eye_black : icons.eye_invisible}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxTextInput}>
          <TextInput
            value={newPass}
            onChangeText={setNewPass}
            secureTextEntry={check2 ? false : true}
            style={styles.textInput}
            placeholder="Mật khẩu mới"
          />
          <TouchableOpacity onPress={() => setCheck2(!check2)}>
            <Image
              style={styles.icon}
              source={check2 ? icons.eye_black : icons.eye_invisible}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.boxTextInput}>
          <TextInput
            value={rePass}
            onChangeText={setRePass}
            secureTextEntry={check3 ? false : true}
            style={styles.textInput}
            placeholder="Nhập lại mật khẩu mới"
          />
          <TouchableOpacity onPress={() => setCheck3(!check3)}>
            <Image
              style={styles.icon}
              source={check3 ? icons.eye_black : icons.eye_invisible}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={submit}>
          <Buttonn
            title="Đổi mật khẩu"
            color="#fff"
            bg="#307df1"
            right={scale(10)}
          />
        </TouchableOpacity>
        <Button title="Hủy" color="#307df1" bg="#fff" />
      </View>

      <Modal isVisible={modal} onBackdropPress={() => navigation.goBack()}>
        <View
          style={{
            width: scale(295),
            height: scale(173),
            overflow: 'hidden',
            borderRadius: scale(20),
            borderWidth: 1,
            borderColor: '#307df1',
            backgroundColor: '#fff',
            alignItems: 'center',
            padding: scale(20),
          }}>
          <Text
            style={{
              fontSize: scale(20),
              color: '#307df1',
              marginBottom: scale(10),
            }}>
            Đổi mật khẩu thành công
          </Text>
          <Image source={images.privacy} />
        </View>
      </Modal>
      <ModalStyle
        isVisible={errorModal}
        onBackdropPress={toggleErrorModal}
        content={error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginLeft: scale(10),
    borderRadius: scale(5),
    marginVertical: scale(10),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '83%',
  },
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
});
