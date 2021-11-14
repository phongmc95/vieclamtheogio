import React, {useRef, useState} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Swiper from 'react-native-swiper';

import images from '../../constant/images';
import {useDispatch} from 'react-redux';
import {checkLogin} from '../../redux/actions/actions';

const OnbroadScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const swiper = useRef(null);
  const [page, setPage] = useState(0);
  const handleFreelancer = () => {
    dispatch(checkLogin('flc'));
    navigation.navigate('SelectLogIN');
  };
  const handleEmployer = () => {
    dispatch(checkLogin('emp'));
    navigation.navigate('SelectLogIN');
  };
  return (
    <View style={styles.Container}>
      <View style={styles.swiper}>
        <Swiper
          autoplay={true}
          onIndexChanged={index => setPage(index)}
          ref={swiper}
          activeDotStyle={styles.activeSwiperDot}
          dotStyle={styles.swiperdot}>
          <View>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={images.rafiki} />
            </View>
            <View style={styles.textcontainer}>
              <Text style={[styles.title, {textTransform: 'uppercase'}]}>
                Đáp ứng nhu cầu tìm việc ngay lập tức
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={images.bro} />
            </View>
            <View style={styles.textcontainer}>
              <Text style={[styles.title, {textTransform: 'uppercase'}]}>
                Tìm kiếm sàng lọc ứng viên chất lượng
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={images.cuate} />
            </View>
            <View style={styles.textcontainer}>
              <Text style={[styles.title, {textTransform: 'uppercase'}]}>
                Hỗ trợ 24/7
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
      <View style={{marginTop: scale(30)}}>
        <TouchableOpacity style={styles.button} onPress={handleFreelancer}>
          <Text style={styles.buttonText}>{'Ứng viên'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEmployer}>
          <Text style={styles.buttonText}>{'Nhà tuyển dụng'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnbroadScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  ImageBack: {
    marginTop: scale(10),
  },
  swiperdot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    marginLeft: scale(8),
    marginRight: scale(8),
    marginTop: scale(3),
    marginBottom: scale(3),
  },
  swiper: {
    height: '70%',
    width: '100%',
  },
  textcontainer: {
    height: scale(150),
    width: scale(350),
    alignItems: 'center',
    paddingLeft: scale(20),
    paddingRight: scale(20),
  },
  title: {
    fontWeight: '700',
    lineHeight: scale(25),
    fontSize: scale(20),
    marginBottom: scale(24),
    color: '#307DF1',
    textAlign: 'center',
  },
  textBegin: {
    alignSelf: 'center',
    lineHeight: scale(19),
    fontSize: scale(14),
  },
  imagecontainer: {
    overflow: 'hidden',
    height: scale(350),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: scale(297),
    width: scale(300),
  },
  buttonText: {
    fontSize: scale(20),
    color: '#307DF1',
    fontWeight: 'bold',
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

    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: scale(10),
  },
  headerText: {
    paddingTop: scale(10),
    width: '90%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  text: {
    fontSize: scale(14),
  },
  activeSwiperDot: {
    backgroundColor: '#307DF1',
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    marginLeft: scale(8),
    marginRight: scale(8),
  },
});
