import React from 'react';
import {View, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import fonts from '../constant/fonts';
const windowWidth = Dimensions.get('window').width;
const TextInputStyle = ({
  Label,
  value,
  onChangeText,
  keyboardType,
  multiline,
}) => {
  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        label={Label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        style={{
          width: windowWidth - 30,
          marginBottom: scale(10),
        }}
        multiline={multiline}
      />
    </View>
  );
};

export default TextInputStyle;
