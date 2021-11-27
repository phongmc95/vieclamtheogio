import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';
import {isIos} from '../../Utils/CheckDevice';
import { useSelector } from "react-redux";
import images from "../../constant/images";

export default function TitleHome({ name }) {
  const data=useSelector(state => state.Authen.data);
  const dataq=useSelector(state => state.ProfileEPl.data)
  const navigation = useNavigation();
  console.log(">>>>q",dataq);
  return (
    <View
      style={{
        paddingTop: scale(isIos ? 60 : 0),
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        backgroundColor: '#307DF1',
        borderBottomLeftRadius: scale(20),
        borderBottomRightRadius: scale(20),
      }}>
      <Image style={{height: scale(40), width: scale(40),borderRadius:scale(20),borderWidth:1,borderColor:'white'}} source={dataq.user?.avatar?{uri:dataq.user?.avatar}:images.avatar} />
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
          }}>
          {name}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            style={{
              height: scale(40),
              width: scale(40),
              marginRight: scale(10),
            }}
            source={icons.search}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
            style={{height: scale(40), width: scale(40)}}
            source={icons.bell}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
