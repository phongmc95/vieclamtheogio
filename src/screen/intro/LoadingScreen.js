import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import images from '../../constant/images';
import fonts from '@constant/fonts';

const LoadingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.swiper}>
        <Image style={styles.imgWave} source={images.wave} />
        <Image style={styles.imgLoading} source={images.loading} />
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginFlc')}>
          <Text style={styles.buttonText}>{'Đăng nhập'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RegisterFlc')}>
          <Text style={styles.buttonText}>{'Đăng ký'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomTabFlc')}>
          <Text style={styles.buttonText}>{'Đăng nhập với tư cách khách'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoadingScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(20),
    color: '#307DF1',
    fontFamily: fonts.BOLD,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(328),
    height: scale(36),
    borderColor: '#307DF1',
    borderWidth: scale(1),
    borderRadius: scale(4),
    marginBottom: scale(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: '#fff',
  },
  imgLoading: {
    width: scale(300),
    height: scale(222),
    marginTop: scale(60),
    marginBottom: scale(20),
  },
  imgWave: {width: scale(375), height: scale(175)},
  viewButton: {marginTop: scale(30)},
});
