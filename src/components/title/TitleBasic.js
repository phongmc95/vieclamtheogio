import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../constant/icons';

export default function TitleBasic(props) {
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{height: scale(30), width: scale(30)}}
          source={icons.back}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: scale(16),
          lineHeight: scale(19),
          color: '#fff',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginLeft: scale(20),
          marginTop: scale(8),
          width: '78%'
        }}>
        {props.title}
      </Text>
      <Image style={{height: scale(30), width: scale(23)}} source={props.icon} />
    </View>
  );
}

const styles = StyleSheet.create({});
