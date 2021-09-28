import React from 'react';
import {Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';

export default function Button(props) {
  return (
    <View>
      <Text
        style={{
          fontSize: scale(16),
          fontWeight: '500',
          color: props.color,
          paddingTop: scale(8),
          backgroundColor: props.bg,
          borderRadius: scale(30),
          width: scale(130),
          height: scale(40),
          textAlign: 'center',
          elevation: 5,
          marginRight: props.right
        }}>
        {props.title}
      </Text>
    </View>
  );
}
