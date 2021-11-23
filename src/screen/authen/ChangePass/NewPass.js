import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextInputPassword from '../../../components/TextInputPassword';
import ButtonStyle from '../../../components/ButtonStyle';
import {getDeviceWidth} from '../../../Utils/CheckDevice';
import {useDispatch, useSelector} from 'react-redux';
import ModalStyle from '../../../components/ModalStyle';
import {changePass} from '../../../redux/actions/actions';
const NewPass = ({navigation, route}) => {
  const isChange = useSelector(state => state.Forgot.isChange);
  const dispatch = useDispatch();
  const {email_otp} = route.params;
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('isChange: ', isChange);
    if (isChange === true) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChange]);

  const submit = () => {
    console.log('aaa', isChange);
    if (pass1 !== pass) {
      setModal(true);
      setError('Mật khẩu không đúng. Vui lòng nhập lại ! ');
    } else if (!pass1 || !pass) {
      setModal(true);
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else {
      dispatch(changePass(email_otp, pass));
    }
    return () => {};
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../../assets/images/Bgheader.png')}
            style={styles.logo}
          />
          <Image
            source={require('../../../../assets/images/logoapp.png')}
            style={styles.logoapp}
          />
          <View style={styles.form}>
            <TextInputPassword
              Label="Password"
              value={pass}
              onChangeText={text => setPass(text)}
            />
            <TextInputPassword
              Label="Confirm Password"
              value={pass1}
              onChangeText={text => setPass1(text)}
            />
          </View>

          <ButtonStyle
            Title="Xác nhận"
            onPress={submit}
            styleBtn={styles.button}
          />
          <View style={styles.imgFooter}>
            <Image
              source={require('../../../../assets/images/bro.png')}
              style={styles.foodter}
            />
          </View>
        </View>
      </ScrollView>
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
    </View>
  );
};

export default NewPass;

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
  logoapp: {
    height: scale(100),
    width: scale(165),
    position: 'absolute',
    top: scale(50),
  },
  imgFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {marginBottom: '30%'},
  form: {marginBottom: '10%'},
});
