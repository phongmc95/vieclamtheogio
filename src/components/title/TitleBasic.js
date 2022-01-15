import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';
import {isIos} from '../../Utils/CheckDevice';

export default function TitleBasic(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.icBack} source={icons.back} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{marginTop: scale(5)}}>{props.ic}</View>
      </TouchableOpacity>
      <Image style={styles.image} source={props.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    paddingTop: scale(isIos ? 60 : 10),
  },
  title: {
    fontSize: scale(22),
    color: '#fff',
    fontFamily: fonts.BOLD,
    textTransform: 'uppercase',
    marginLeft: scale(20),
    marginTop: scale(5),
    width: '78%',
  },
  image: {height: scale(30), width: scale(23)},
  icBack: {height: scale(30), width: scale(30)},
});
