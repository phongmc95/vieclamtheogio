import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {EyeIconPass} from '../../assets/icon';
import {scale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const TextInputPassword = ({Label, value, onChangeText}) => {
  const [show, setShow] = React.useState(true);
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
        secureTextEntry={show}
        right={
          <TextInput.Icon
            name={() => <EyeIconPass color="#808080" />}
            onPress={() => setShow(!show)}
          />
        }
      />
    </View>
  );
};

export default TextInputPassword;

const styles = StyleSheet.create({});
