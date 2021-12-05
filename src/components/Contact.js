import {Linking, Platform} from 'react-native';
import email from 'react-native-email';

export const callPhone = phone => {
  Linking.openURL(
    Platform.OS === 'android' ? `tel:${phone}` : `telprompt:${phone}`,
  ).catch(e => console.error('Errorr: ', e));
};

export const sendEmail = emailEpl => {
  email(emailEpl).catch(console.error);
};
