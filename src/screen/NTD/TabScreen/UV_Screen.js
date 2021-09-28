import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {
  FilterIcon,
  LocalIcon,
  PhoneIcon,
  ClockIcon,
  SelectDowIcon,
} from '../../../../assets/icon';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Modal} from 'react-native-paper';
const UV_Screen = ({navigation}) => {
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
  const [Visible, setVisible] = useState(false);
  const [showStatus, setShowStastus] = useState(false);
  const toggleModal = () => {
    setVisible(!Visible);
  };
  const renderItem = ({item}) => (
    <View style={[styles.viewFL, styleHinder]}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <Text style={styles.nameUV}>{item.nameUV}</Text>
      </TouchableOpacity>
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
  const renderHinderItem = ({item}) => (
    <View style={styles.hinder}>
      <TouchableOpacity
        style={styles.nghichu}
        onPress={() => {
          setVisible(true), console.log('abc');
        }}>
        <Text style={{fontSize: scale(12), fontWeight: '500', color: 'white'}}>
          Nghi chú
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.status}
        onPress={() => setShowStastus(!showStatus)}>
        <Text style={{fontSize: scale(12), fontWeight: '400', color: 'white'}}>
          không đạt yêu cầu
        </Text>
        <SelectDowIcon />
      </TouchableOpacity>
      {showStatus && (
        <View style={styles.showStatus}>
          <TouchableOpacity>
            <Text
              style={{fontSize: scale(12), fontWeight: '400', color: 'white'}}>
              Trạng thái
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{fontSize: scale(12), fontWeight: '400', color: 'white'}}>
              Đến phỏng vấn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{fontSize: scale(12), fontWeight: '400', color: 'white'}}>
              Đạt yêu cầu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{fontSize: scale(12), fontWeight: '400', color: 'white'}}>
              Không đạt yêu cầu
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  const onRowDidOpen = () => {
    setStyleHinder({
      backgroundColor: '#307DF1',
    });
  };
  const ModalNode = () => {
    return (
      <View>
        <Modal isVisible={Visible}>
          <View style={styles.centeredViewMD}>
            <View style={styles.modalView}>
              {/* <Text
                style={{
                  fontSize: scale(20),
                  fontWeight: '700',
                  color: '#307DF1',
                  textAlign: 'center',
                }}>
                Ghi chú nhà tuyển dụng
              </Text>
              <View>
                <View style={[styles.boxInput, {height: scale(105)}]}>
                  <TextInput
                    placeholder="Nhập tối thiểu 50 từ"
                    style={styles.textInput}
                  />
                </View>
              </View> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <Text style={styles.title}>ỨNG VIÊN ĐÃ ỨNG TUYỂN</Text>
        <TouchableOpacity
          style={{margin: scale(5)}}
          onPress={() => navigation.navigate('Filter')}>
          <FilterIcon />
        </TouchableOpacity>
      </View>
      {/* main */}
      <View style={styles.main}>
        <SwipeListView
          data={DATA}
          renderItem={renderItem}
          renderHiddenItem={renderHinderItem}
          rightOpenValue={scale(-165)}
          //   onRowDidOpen={onRowDidOpen}
        />
      </View>
      <ModalNode />
    </View>
  );
};

export default UV_Screen;

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
  centeredViewMD: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(22),
    backgroundColor: 'rgba(61, 61, 61, 0.3)',
  },
  modalView: {
    margin: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(30),
    padding: scale(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: scale(311),
    height: scale(403),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(5),
  },
  showStatus: {
    width: scale(142),

    position: 'absolute',
    backgroundColor: '#307DF1',
    marginTop: scale(130),
  },
});
