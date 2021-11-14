import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Selecter} from '../../assets/icon';
import {scale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const TextInputSelected = ({Label, value, onChangeText, onPress}) => {
  return (
    <View>
      <TextInput
        label={Label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        style={{width: windowWidth - 30, marginBottom: scale(10)}}
        selectionColor="#307df1"
        underlineColor={'#307df1'}
        right={<TextInput.Icon name={() => <Selecter />} onPress={onPress} />}
      />
    </View>
  );
};

export default TextInputSelected;

const styles = StyleSheet.create({});
