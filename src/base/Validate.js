import {Alert} from 'react-native';

export const validateEmail = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
export const alertmg = content => {
  Alert.alert('Thông báo', content, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};
export const isVietnamesePhoneNumber = number => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
};
