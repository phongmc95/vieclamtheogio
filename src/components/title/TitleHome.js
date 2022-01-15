import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';
import {isIos} from '../../Utils/CheckDevice';
import {useSelector} from 'react-redux';
import images from '../../constant/images';
import {
  NotificationIcon,
  NotificationICON,
  SearchIcon,
} from '../../../assets/icon';

export default function TitleHome({name, type}) {
  const dataq = useSelector(state => state.ProfileEPl.data);
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: scale(isIos ? 60 : 10),
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        backgroundColor: '#307DF1',
        borderBottomLeftRadius: scale(20),
        borderBottomRightRadius: scale(20),
      }}>
      <Image
        style={{
          height: scale(40),
          width: scale(40),
          borderRadius: scale(20),
          borderWidth: 1,
          borderColor: 'white',
        }}
        source={
          dataq?.user?.avatar ? {uri: dataq?.user?.avatar} : images.avatar
        }
      />
      <View style={{marginLeft: scale(10), width: '55%'}}>
        <Text
          style={{
            fontSize: scale(13),
            fontFamily: fonts.NORMAL,
            color: '#fff',
          }}>
          Xin chào,
        </Text>
        <Text
          style={{
            fontSize: scale(16),
            color: '#fff',
            fontFamily: fonts.BOLD,
            marginTop: scale(5),
          }}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: scale(17.5),
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: scale(10),
          marginLeft: scale(15),
          marginRight: scale(5),
        }}
        onPress={() => navigation.navigate('Search')}>
        <SearchIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(type === 'epl' ? 'NotificationS' : 'Notification')
        }
        style={{
          borderRadius: scale(17.5),
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: scale(10),
          marginLeft: scale(10),
        }}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
}
