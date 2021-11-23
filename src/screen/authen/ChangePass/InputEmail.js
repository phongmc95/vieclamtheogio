import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {getDeviceWidth} from '../../../Utils/CheckDevice';
import TextInputStyle from '../../../components/TextInputStyle';
import ButtonStyle from '../../../components/ButtonStyle';
import fonts from '../../../constant/fonts';
import ModalStyle from '../../../components/ModalStyle';
import {validateEmail} from '../../../base/Validate';
import {useDispatch, useSelector} from 'react-redux';
import {loadForgetPass} from '../../../redux/actions/actions';

const InputEmail = ({navigation}) => {
  const dispatch = useDispatch();
  const success = useSelector(state => state.Forgot.success);
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (success === true) {
      navigation.navigate('OTP_Confirm', {email_otp: email, type: 'forgot'});
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const submit = () => {
    if (!email) {
      setError('Vui lòng nhập email!!!');
      setModal(true);
    } else if (!validateEmail(email)) {
      setError('Định danh email không đúng. Vui lòng nhập lại!');
      setModal(true);
    } else {
      dispatch(loadForgetPass(email));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/Bgheader.png')}
        style={styles.logo}
      />
      <Text
        style={{
          fontSize: scale(30),
          fontFamily: fonts.BOLD,
          color: 'white',
          position: 'absolute',
          top: '9%',
        }}>
        Lấy lại mật khẩu
      </Text>

      <View style={[{marginTop: '5%'}]}>
        <TextInputStyle
          Label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <ButtonStyle Title="Xác nhận" onPress={submit} />
      <Image
        source={require('../../../../assets/images/bro.png')}
        style={styles.foodter}
      />
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
    </View>
  );
};

export default InputEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
  },
  logo: {
    height: scale(173),
    width: getDeviceWidth,
    marginBottom: scale(10),
  },

  foodter: {
    width: scale(200),
    height: scale(200),
  },
});
