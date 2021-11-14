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
import {getDeviceWidth} from '../../../../Utils/CheckDevice';
import TextInputStyle from '../../../../components/TextInputStyle';
import ButtonStyle from '../../../../components/ButtonStyle';
const InputEmail = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/images/Bgheader.png')}
        style={styles.logo}
      />
      <Text
        style={{
          fontSize: scale(30),
          fontWeight: '700',
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
      <ButtonStyle Title="Xác nhận" styleBtn={{width: scale(120)}} />
      <Image
        source={require('../../../../../assets/images/bro.png')}
        style={styles.foodter}
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
