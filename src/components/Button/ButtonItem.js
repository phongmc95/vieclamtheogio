import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
export const ButtonItemLuu = props => {
  const {nameBTN} = props;
  return (
    <View>
      <Text
        style={{
          width: scale(100),
          paddingVertical: scale(4),
          paddingHorizontal: scale(10),
          backgroundColor: '#307DF1',
          color: 'white',
          borderWidth: 0.5,
          borderColor: '#307DF1',
          overflow: 'hidden',
          borderRadius: scale(20),
          fontWeight: '500',
          fontSize: scale(16),
          textAlign: 'center',
        }}>
        {nameBTN}
      </Text>
    </View>
  );
};
export const ButtonItemBoqua = props => {
  const {nameBTN} = props;
  return (
    <View>
      <Text
        style={{
          paddingVertical: scale(4),
          paddingHorizontal: scale(10),
          backgroundColor: 'white',
          color: '#307DF1',
          borderWidth: 0.5,
          borderColor: '#307DF1',
          overflow: 'hidden',
          borderRadius: scale(20),
          fontWeight: '500',
          fontSize: scale(16),
          textAlign: 'center',
        }}>
        {nameBTN}
      </Text>
    </View>
  );
};
export const ButtonGiaiPhap = props => {
  const {nameBTN} = props;
  return (
    <View>
      <Text
        style={{
          paddingVertical: scale(4),
          paddingHorizontal: scale(10),
          backgroundColor: '#307DF1',
          color: 'white',
          borderWidth: 0.5,
          borderColor: '#307DF1',
          overflow: 'hidden',
          borderRadius: scale(20),
          fontWeight: '500',
          fontSize: scale(16),
          textAlign: 'center',
        }}>
        {nameBTN}
      </Text>
    </View>
  );
};
export const ButtonSua = props => {
  const {nameBTN} = props;
  return (
    <View>
      <Text
        style={{
          paddingVertical: scale(4),
          paddingHorizontal: scale(30),
          backgroundColor: '#307DF1',
          color: 'white',
          borderWidth: 0.5,
          borderColor: '#307DF1',
          overflow: 'hidden',
          borderRadius: scale(20),
          fontWeight: '500',
          fontSize: scale(16),
          textAlign: 'center',
        }}>
        {nameBTN}
      </Text>
    </View>
  );
};
export const ButtonDAY = props => {
  const {nameBTN} = props;
  return (
    <View>
      <Text
        style={{
          paddingVertical: scale(11),
          paddingHorizontal: scale(24),
          backgroundColor: '#FFA800',
          color: 'white',
          borderWidth: 0.5,
          borderColor: '#FFA800',
          overflow: 'hidden',
          borderRadius: scale(5),
          fontWeight: '400',
          fontSize: scale(16),
          textAlign: 'center',
        }}>
        {nameBTN}
      </Text>
    </View>
  );
};
export const ButtonDAY2 = props => {
  const {nameBTN} = props;
  return (
    <View>
      <Text
        style={{
          paddingVertical: scale(11),
          paddingHorizontal: scale(13),
          backgroundColor: 'white',
          color: '#307DF1',
          borderWidth: 0.5,
          borderColor: '#307DF1',
          overflow: 'hidden',
          borderRadius: scale(5),
          fontWeight: '400',
          fontSize: scale(16),
          textAlign: 'center',
          marginBottom: scale(10),
        }}>
        {nameBTN}
      </Text>
    </View>
  );
};
