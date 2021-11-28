import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';
import images from '../../constant/images';
import {isIos} from '../../Utils/CheckDevice';

export default function TitleJob(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.titleBox}>
      <View style={{flexDirection: 'row', marginBottom: scale(20)}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: scale(30), width: scale(30)}}
            source={icons.back}
          />
        </TouchableOpacity>
        <View style={{width: '82%'}} />
        <Image
          style={{height: scale(23), width: scale(23), marginTop: scale(5)}}
          source={icons.heart_wb}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: scale(15)}}>
        <Image
          style={{
            marginLeft: scale(16),
            marginRight: scale(10),
            height: scale(79),
            width: scale(79),
          }}
          source={props.logo ? {uri: props.logo} : images.logo}
        />
        <View style={{width: '65%'}}>
          <Text
            style={{
              fontSize: scale(18),
              lineHeight: scale(20),
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#fff',
              fontFamily: fonts.BOLD,
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: scale(12),
              lineHeight: scale(20),
              textTransform: 'uppercase',
              color: '#fff',
              marginTop: scale(5),
              fontFamily: fonts.NORMAL,
            }}>
            {props.company}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', marginRight: '20%'}}>
          <Image
            style={{height: scale(20), width: scale(20)}}
            source={icons.calendar_white}
          />
          <Text
            style={{
              fontSize: scale(12),
              fontFamily: fonts.NORMAL,
              color: '#fff',
              marginLeft: scale(5),
            }}>
            Hạn nộp: <Text>{props.deadline}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    paddingTop: scale(isIos ? 40 : 10),
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    height: scale(185),
  },
});
