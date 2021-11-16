import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {LocalIcon} from '../../../../assets/icon';
const InfoUV = () => {
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
    <View style={styles.contener}>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Họ và tên: <Text style={{color: '#307DF1'}}>Phong lợn</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Ngày sinh: <Text style={{color: '#307DF1'}}>27/07/1995</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Giới tính: <Text style={{color: '#307DF1'}}>Nữ</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Hôn nhân: <Text style={{color: '#307DF1'}}>Ế</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Số điện thoại: <Text style={{color: '#307DF1'}}>************</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Email: <Text style={{color: '#307DF1'}}>************</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Địa chỉ: <Text style={{color: '#307DF1'}}>Tây Hồ ,Hà Nội</Text>
          </Text>
        </View>
      </View>

      <Text style={{fontWeight: '500', fontSize: scale(16), margin: scale(20)}}>
        Ứng viên liên quan
      </Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default InfoUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  info: {
    width: scale(335),
    height: scale(220),
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: scale(20),
    marginTop: scale(20),
    margin: scale(7),
  },
  title: {
    fontSize: scale(16),
    fontWeight: '400',
    marginLeft: scale(10),
    marginTop: scale(4),
  },
  dot: {
    fontSize: scale(20),
    fontWeight: '700',
    marginTop: scale(-4),
    marginLeft: scale(10),
  },
  viewFL: {
    width: scale(335),
    height: scale(112),
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: scale(5),
    margin: scale(7),
  },
  avatar: {
    width: scale(60),
    height: scale(60),
    overflow: 'hidden',
    borderRadius: scale(50),
    margin: scale(5),
  },
  titleName: {
    fontSize: scale(18),
    fontWeight: '500',
    color: '#307DF1',
  },
  titleJob: {
    fontSize: scale(12),
    fontWeight: '500',
  },
  local: {
    fontSize: scale(12),
    fontWeight: '400',
    marginLeft: scale(5),
  },
});
