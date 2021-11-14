import {useNavigation} from '@react-navigation/native';
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
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';

export default function TitleSearch(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{height: scale(30), width: scale(30), marginTop: scale(3)}}
          source={icons.back}
        />
      </TouchableOpacity>
      <TextInput placeholder="Nhập để tìm kiếm" style={styles.txtSearch} />
      <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
        <Image style={styles.icon} source={icons.filter} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txtSearch: {
    fontSize: scale(16),
    width: scale(240),
    height: scale(40),
    borderRadius: scale(20),
    borderWidth: 1,
    backgroundColor: '#fff',
    marginLeft: scale(15),
    fontFamily: fonts.ITALIC,
    borderColor: '#307DF1',
    paddingLeft: scale(20),
  },
  icon: {
    height: scale(30),
    width: scale(30),
    marginTop: scale(5),
    marginLeft: scale(10),
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
  },
});
