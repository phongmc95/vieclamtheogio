import React, {useRef, useEffect} from 'react';
import {StyleSheet, Image, Animated} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const checkLogin = useSelector(state => state.Authen.check_type);
  const data = useSelector(state => state.Authen.data);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn();
    const time = setTimeout(() => {
      data && checkLogin
        ? navigation.navigate(data.user.role === 'employer' ? 'tabNTD' : 'BottomTabFlc')
        : navigation.navigate('Intro');
    }, 5000);
    return () => {
      clearTimeout(time);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  // const fadeOut = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 3000,
  //   }).start();
  // };
  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Image
        source={require('@assets/images/logoapp.png')}
        style={styles.logo}
      />
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5FF',
  },
  logo: {
    height: scale(140),
    width: scale(205),
  },
});
