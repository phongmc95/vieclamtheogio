import React, {useState} from 'react';
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

export default function UpdatePassword() {
  const [modal, setModal] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <View style={styles.container}>
      <TitleBasic title="đổi mật khẩu" />
      <View style={{marginVertical: scale(20)}}>
        <View style={styles.boxTextInput}>
          <TextInput
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
            secureTextEntry={check2 ? false : true}
            style={styles.textInput}
            placeholder="Mật khẩu cũ"
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
            secureTextEntry={check3 ? false : true}
            style={styles.textInput}
            placeholder="Mật khẩu cũ"
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
        <TouchableOpacity onPress={toggleModal} on>
          <Buttonn
            title="Đổi mật khẩu"
            color="#fff"
            bg="#307df1"
            right={scale(10)}
          />
        </TouchableOpacity>
        <Button title="Hủy" color="#307df1" bg="#fff" />
      </View>

      <Modal isVisible={modal} onBackdropPress={toggleModal}>
        <View
          style={{
            width: scale(295),
            height: scale(173),
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
    borderRadius: 1,
    borderColor: '#307df1',
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
