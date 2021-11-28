import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';
import {isIos} from '../../Utils/CheckDevice';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image style={styles.image} source={props.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    paddingTop: scale(isIos ? 60 : 5),
  },
  title: {
    fontSize: scale(16),
    lineHeight: scale(19),
    color: '#fff',
    fontFamily: fonts.BOLD,
    textTransform: 'uppercase',
    marginLeft: scale(20),
    marginTop: scale(8),
    width: '78%',
    marginBottom: scale(10),
  },
  image: {height: scale(30), width: scale(23)},
});
