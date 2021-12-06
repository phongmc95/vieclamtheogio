import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';
import images from '../../constant/images';
import {isIos} from '../../Utils/CheckDevice';

export default function TitleJob({
  handleSave,
  type,
  logo,
  title,
  company,
  deadline,
}) {
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
        <TouchableOpacity onPress={handleSave}>
          <Image
            style={{height: scale(25), width: scale(28), marginTop: scale(5)}}
            source={type === true ? icons.whiteLike : icons.whiteDislike}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginBottom: scale(15)}}>
        <Image
          style={{
            marginLeft: scale(16),
            height: scale(79),
            width: scale(79),
            borderRadius: scale(40),
          }}
          source={
            logo === '/uploads/example.jpeg'
              ? images.avatar
              : logo === undefined
              ? images.avatar
              : logo === null
              ? images.avatar
              : {uri: logo}
          }
        />
        <View
          style={{width: '65%', marginLeft: scale(20), marginTop: scale(10)}}>
          <Text
            style={{
              fontSize: scale(16),
              textTransform: 'uppercase',
              color: '#fff',
              fontFamily: fonts.BOLD,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: scale(16),
              color: '#fff',
              marginTop: scale(5),
              fontFamily: fonts.NORMAL,
            }}>
            {company}
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
              fontSize: scale(14),
              fontFamily: fonts.NORMAL,
              color: '#fff',
              marginLeft: scale(5),
            }}>
            Hạn nộp: <Text>{deadline}</Text>
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
