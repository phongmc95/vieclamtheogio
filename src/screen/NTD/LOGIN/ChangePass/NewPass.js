import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {EyeIconPass} from '../../../../../assets/icon';
import {Modal, Portal} from 'react-native-paper';
import LogIn_NTD from '../../../../base/API/apiNTD/LogIn_NTD';
import {data} from 'browserslist';
const NewPass = ({navigation, route}) => {
  const {token_pass} = route.params;
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [show, setShow] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const [visible_logIn, setVisible_logIn] = React.useState(false);
  const [message, setMessage] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const submit = () => {
    if (!pass || !pass1) {
      setMessage('Các ô nhập là bắt buộc không được để trống');
      setVisible(true);
    } else if (reg.test(pass) === false) {
      setMessage(
        'Mật khẩu cần có ít nhất 8 ký tự, ít nhất một chữ cái và một số và không có dấu cách',
      );
      setVisible(true);
    } else if (pass1 != pass) {
      setMessage('Nhập lại mật khẩu không trùng khớp ');
      setVisible(true);
    } else {
      callApi();
    }
  };
  const callApi = async () => {
    try {
      var data = new FormData();
      data.append('token', token_pass),
        data.append('pass', pass),
        data.append('re_pass', pass1);
      const response = await LogIn_NTD.ChangePass(data);
      if (response.data == null) {
        setMessage(response.error.message);
        setVisible(true);
      } else {
        setVisible_logIn(true);
      }
    } catch (error) {
      console.log('Lỗi rồi tuấn ơi' + error);
    }
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../../../assets/images/logoBG.png')}
            style={styles.logo}
          />
          <View style={styles.boxRow}>
            <TextInput
              secureTextEntry={show}
              placeholder="Nhập mật khẩu"
              value={pass}
              onChangeText={input => setPass(input)}
              style={styles.textInput}
            />
            <TouchableOpacity
              style={{marginRight: scale(10)}}
              onPress={() => setShow(!show)}>
              <EyeIconPass color="#808080" />
            </TouchableOpacity>
          </View>

          <View style={styles.boxRow}>
            <TextInput
              secureTextEntry={show}
              placeholder="Nhập mật lại khẩu"
              value={pass1}
              onChangeText={input => setPass1(input)}
              style={styles.textInput}
            />
            <TouchableOpacity
              style={{marginRight: scale(10)}}
              onPress={() => setShow(!show)}>
              <EyeIconPass color="#808080" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={submit}>
            <Text
              style={{
                fontSize: scale(16),
                fontWeight: '500',
                paddingHorizontal: scale(20),
                paddingVertical: scale(11),
                backgroundColor: '#307df1',
                color: 'white',
                borderRadius: scale(30),
                marginTop: scale(40),
                marginBottom: scale(35),
              }}>
              Xác nhận
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../../../../../assets/images/bro.png')}
            style={styles.foodter}
          />
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
      <Modal visible={visible_logIn}>
        <View style={styles.viewModal}>
          <View style={styles.viewContent}>
            <Text style={styles.tbmd}>Lấy lại mật khẩu thành công</Text>
            <Text style={styles.content}>
              Bạn có thể đăng nhập bằng mật khẩu vừa thay đổi
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btntb}
            onPress={() => navigation.navigate('LoginNTD')}>
            <Text style={styles.confirm}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default NewPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: scale(144),
    width: '100%',
  },
  foodter: {
    width: scale(200),
    height: scale(200),
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
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(10),
  },
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
