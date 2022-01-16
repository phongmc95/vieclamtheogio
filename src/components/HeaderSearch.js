import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {isIos} from '../Utils/CheckDevice';
import fonts from '../constant/fonts';
import {SearchIcon} from '../../assets/icon';
const HeaderSearch = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tìm kiếm ứng viên</Text>

      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={require('../../assets/icons/ic_filter.png')}
          resizeMode={'contain'}
          style={{
            height: scale(30),
            width: scale(30),
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    paddingLeft: 8,
  },
  boxInput: {
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',

    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    paddingTop: scale(isIos ? 60 : 5),
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(16),
    lineHeight: scale(19),
    color: '#fff',
    fontFamily: fonts.BOLD,
    textTransform: 'uppercase',
    marginLeft: scale(20),
    marginTop: scale(8),
    width: '78%',
    marginBottom: scale(10),
  },
  image: {height: scale(30), width: scale(23)},
});
export default HeaderSearch;
