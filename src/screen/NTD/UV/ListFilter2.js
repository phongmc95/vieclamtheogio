import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {
  FilterIcon,
  LocalIcon,
  PhoneIcon,
  ClockIcon,
  SelectDowIcon,
  BackIcon,
  DeleteICon,
} from '@assets/icon/index';
import {SwipeListView} from 'react-native-swipe-list-view';
const ListFilter2 = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',

      phone: '0232223135',
      city: 'Hà Nội',
      time: 'Thứ 2, Thứ 3,Thứ 4, Thứ 5',
    },

    {
      id: 2,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',

      phone: '0232223135',
      city: 'Hà Nội',
      time: 'Thứ 2, Thứ 3,Thứ 4, Thứ 5',
    },

    {
      id: 3,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',

      phone: '0232223135',
      city: 'Hà Nội',
      time: 'Thứ 2, Thứ 3,Thứ 4, Thứ 5',
    },

    {
      id: 4,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',

      phone: '0232223135',
      city: 'Hà Nội',
      time: 'Thứ 2, Thứ 3,Thứ 4, Thứ 5',
    },
    {
      id: 5,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',

      phone: '0232223135',
      city: 'Hà Nội',
      time: 'Thứ 2, Thứ 3,Thứ 4, Thứ 5',
    },
  ];
  const [styleHinder, setStyleHinder] = useState({backgroundColor: 'white'});
  const renderItem = ({item}) => (
    <View style={[styles.viewFL, styleHinder]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <Text style={styles.nameUV}>{item.nameUV}</Text>
        </View>
        <TouchableOpacity style={{margin: scale(5)}}>
          <DeleteICon />
        </TouchableOpacity>
      </View>
      <View style={styles.viewItemRow}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: scale(5), marginLeft: scale(5)}}>
            <LocalIcon />
          </View>
          <Text style={styles.textitem}>{item.city}</Text>
        </View>
        <View style={{flexDirection: 'row', marginRight: scale(15)}}>
          <View style={{marginRight: scale(5)}}>
            <PhoneIcon />
          </View>
          <Text style={styles.textitem}>{item.phone}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: scale(20)}}>
        <View style={{marginRight: scale(5), marginLeft: scale(5)}}>
          <ClockIcon />
        </View>
        <Text style={styles.textitem}>Ca1:{item.time}</Text>
      </View>
    </View>
  );

  const onRowDidOpen = () => {
    // setStyleHinder({
    //   backgroundColor: '#307DF1',
    // });
  };
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginLeft: scale(10)}}
            onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.title}>ỨNG VIÊN TỪ ĐIỂM LỌC</Text>
        </View>
        <TouchableOpacity style={{margin: scale(10)}}>
          <FilterIcon />
        </TouchableOpacity>
      </View>
      {/* main */}
      <View style={styles.main}>
        <FlatList
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={renderItem}

          //   onRowDidOpen={onRowDidOpen}
        />
      </View>
    </View>
  );
};

export default ListFilter2;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFL: {
    width: scale(335),
    borderRadius: scale(20),
    backgroundColor: 'white',
    margin: scale(5),
    height: scale(144),
  },
  avatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(50),
    marginLeft: scale(5),
  },
  LikeIcon: {
    margin: scale(18),
  },
  textitem: {
    fontWeight: '400',
    fontSize: scale(12),
  },
  nameUV: {
    fontWeight: '500',
    fontSize: scale(16),
    color: '#307DF1',
    marginLeft: scale(10),
    marginTop: scale(10),
  },
  hinder: {
    flex: 1,

    width: scale(142),
    height: scale(144),

    marginLeft: scale(190),
    margin: scale(5),
  },
  viewItemRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scale(13),
  },
  nghichu: {
    height: scale(98),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307DF1',
  },
  status: {
    height: scale(36),
    backgroundColor: '#307DF1',
    flexDirection: 'row',
    backgroundColor: '#307DF1',
    borderRadius: scale(30),
    marginTop: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
