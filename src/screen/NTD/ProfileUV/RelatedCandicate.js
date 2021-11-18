import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {LocalIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';

export default function RelatedCandicate() {
  const DATA = [
    {
      id: 1,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',

      diaChi: 'Hà Nội',
    },
    {
      id: 2,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',

      diaChi: 'Hà Nội',
    },
    {
      id: 3,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',

      diaChi: 'Hà Nội',
    },
    {
      id: 4,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',

      diaChi: 'Hà Nội',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.viewFL}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View style={{margin: scale(5)}}>
          <Text style={styles.titleName}>{item.nameUV}</Text>
          <Text style={styles.titleJob}>{item.nameJob}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: scale(10)}}>
        <View style={{marginLeft: scale(5), marginTop: scale(3)}}>
          <LocalIcon color="#307DF1" />
        </View>
        <Text style={styles.local}>Hà Nội, Hồ Chí Minh</Text>
      </View>
    </View>
  );
  return (
    <View>
      <Text
        style={{
          fontFamily: fonts.NORMAL,
          fontSize: scale(20),
          margin: scale(20),
        }}>
        Ứng viên liên quan
      </Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewFL: {
    width: scale(335),
    padding: scale(10),
    backgroundColor: 'white',
    borderRadius: scale(5),
    margin: scale(7),
    borderWidth: 0.5,
    borderColor: colors.BLUE,
  },
  avatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(50),
    margin: scale(5),
  },
  titleName: {
    fontSize: scale(18),
    fontFamily: fonts.NORMAL,
    color: '#307DF1',
  },
  titleJob: {
    fontSize: scale(14),
    fontFamily: fonts.NORMAL,
  },
  local: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    marginLeft: scale(5),
    marginTop: scale(3),
  },
});
