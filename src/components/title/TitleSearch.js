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
import {useDispatch} from 'react-redux';
import {FilterMoreIcon, IconSearch} from '../../../assets/icon';
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';
import {search} from '../../redux/actions/actions';
import {isIos} from '../../Utils/CheckDevice';

export default function TitleSearch({value, onChangeText}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{height: scale(30), width: scale(30), marginTop: scale(3)}}
          source={icons.back}
        />
      </TouchableOpacity>
      <View style={styles.search}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Nhập để tìm kiếm"
          style={styles.txtSearch}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ListJob', {search: value});
            dispatch(search(value));
          }}>
          <IconSearch />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('Filters')}>
        <FilterMoreIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txtSearch: {
    fontSize: scale(16),
    fontFamily: fonts.ITALIC,
    width: '85%',
  },
  icon: {
    height: scale(30),
    width: scale(30),
    marginTop: scale(7),
    marginLeft: scale(12),
  },
  content: {
    paddingTop: scale(isIos ? 60 : 10),
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
  },
  search: {
    width: '75%',
    height: scale(40),
    borderRadius: scale(20),
    borderWidth: 1,
    backgroundColor: '#fff',
    marginLeft: scale(15),
    borderColor: '#307DF1',
    paddingLeft: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
