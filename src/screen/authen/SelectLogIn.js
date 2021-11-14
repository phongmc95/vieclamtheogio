import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import {scale} from 'react-native-size-matters';
const Resgister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4C9BD4" />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/Bgheader.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../../assets/images/logoapp.png')}
          style={styles.logoapp}
        />
      </View>

      <Image
        source={require('../../../assets/images/selectNTD.png')}
        style={styles.body}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Resgister')}>
        <Text style={styles.text}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Resgister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
  },
  logo: {
    height: scale(173),
    width: Dimensions.get('window').width,
  },
  body: {
    height: scale(222),
    width: scale(300),
    marginBottom: scale(70),
  },
  btn: {
    height: scale(40),
    width: scale(335),
    marginBottom: scale(10),
    borderColor: '#307df1',
    borderWidth: scale(1),
    borderRadius: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text: {
    fontSize: scale(20),
    fontWeight: '700',
    color: '#307df1',
  },
  logoapp: {
    height: scale(100),
    width: scale(165),
    position: 'absolute',
    top: scale(50),
  },
});
