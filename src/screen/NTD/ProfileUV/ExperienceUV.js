import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {LocalIcon} from '../../../../assets/icon';
const ExperienceUV = () => {
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
        <Text style={styles.skill}>SUZUKIVIVU</Text>
        <Text style={styles.textskill2}>Thực tập bán hàng</Text>
        <Text style={styles.textskill2}>20/01/2021 - 20/10/2021</Text>
        <Text style={styles.textskill3}>
          Bán nhiều hàng nhất tháng 1 đạt giải nhân viên trẻ của tháng
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.skill}>SUZUKIVIVU</Text>
        <Text style={styles.textskill2}>Thực tập bán hàng</Text>
        <Text style={styles.textskill2}>20/01/2021 - 20/10/2021</Text>
        <Text style={styles.textskill3}>
          Bán nhiều hàng nhất tháng 1 đạt giải nhân viên trẻ của tháng
        </Text>
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

export default ExperienceUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  info: {
    width: scale(335),

    backgroundColor: 'white',
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
    borderRadius: scale(5),
    margin: scale(7),
  },
  avatar: {
    width: scale(60),
    height: scale(60),
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
  skill: {
    fontSize: scale(16),
    fontWeight: '500',
    marginLeft: scale(10),
    marginTop: scale(5),
  },
  textskill2: {
    fontWeight: '300',
    fontSize: scale(16),
    color: '#404040',
    marginTop: scale(5),
    marginLeft: scale(10),
  },
  textskill3: {
    fontWeight: '400',
    fontSize: scale(16),
    color: '#307DF1',
    marginTop: scale(5),
    marginLeft: scale(10),
  },
});
