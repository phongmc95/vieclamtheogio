import React, {useRef, useEffect} from 'react';
import {StyleSheet, Image, Animated} from 'react-native';
import {scale} from 'react-native-size-matters';

const SplashScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn();
    const time = setTimeout(() => {
      navigation.navigate('Intro');
    }, 7000);
    return () => {
      clearTimeout(time);
    };
  }, []);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
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
