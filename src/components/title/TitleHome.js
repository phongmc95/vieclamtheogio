import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../constant/icons';

export default function TitleHome(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        backgroundColor: '#307DF1',
        borderBottomLeftRadius: scale(20),
        borderBottomRightRadius: scale(20),
      }}>
      <Image style={{height: scale(40), width: scale(40)}} source={props.img} />
      <View style={{marginLeft: scale(10), width: '55%'}}>
        <Text
          style={{fontSize: scale(13), lineHeight: scale(20), color: '#fff'}}>
          Xin chào,
        </Text>
        <Text
          style={{
            fontSize: scale(16),
            lineHeight: scale(19),
            color: '#fff',
            fontWeight: 'bold',
          }}>
          {props.name}
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
