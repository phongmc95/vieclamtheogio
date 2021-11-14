import React from 'react';
import {View, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const TextInputStyle = ({Label, value, onChangeText}) => {
  return (
    <View>
      <TextInput
        label={Label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        style={{
          width: windowWidth - 30,
          marginBottom: scale(10),
        }}
        selectionColor="#307df1"
        underlineColor={'#307df1'}
      />
    </View>
  );
};

export default TextInputStyle;
