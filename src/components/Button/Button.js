import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import fonts from '../../constant/fonts';

export default function Button(props) {
  return (
    <View>
      <Text style={styles.button(props)}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: props => ({
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    color: props.color,
    paddingVertical: scale(10),
    backgroundColor: props.bg,
    borderRadius: scale(30),
    width: scale(130),
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    marginRight: props.right,
    marginBottom: scale(10),
  }),
});
