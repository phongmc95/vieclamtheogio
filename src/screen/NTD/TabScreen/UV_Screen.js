import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {PhoneIcon, ClockIcon, SelectDowIcon} from '../../../../assets/icon';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Modal} from 'react-native-paper';
import HeaderStyle from '../../../components/HeaderStyle';
import SelectModal from '../../../components/SelectModal';
import Button from '../../../components/Button/Button';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
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

  const states = [
    {id: 2, title: 'Đến phỏng vấn'},
    {id: 3, title: 'Đạt yêu cầu'},
    {id: 4, title: 'Không đạt yêu cầu'},
  ];
  const [styleHinder, setStyleHinder] = useState({backgroundColor: 'white'});
  const [Visible, setVisible] = useState(false);
  const [showStatus, setShowStastus] = useState(false);
  const [state, setState] = useState({id: null, title: 'Trạng thái'});
  const toggleModal = () => {
    setVisible(!Visible);
  };

  const toggleModalSelect = () => {
    setShowStastus(!showStatus);
  };
  const renderItem = ({item}) => (
    <View style={[styles.viewFL, styleHinder]}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => navigation.navigate('DetailUV', {item})}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <Text style={styles.nameUV}>{item.nameUV}</Text>
      </TouchableOpacity>
      <View style={styles.viewItemRow}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: scale(5), marginLeft: scale(5)}}>
            <ClockIcon />
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
      <TouchableOpacity style={styles.nghichu} onPress={toggleModal}>
        <Text
          style={{
            fontSize: scale(12),
            fontWeight: '500',
            color: 'white',
            fontFamily: fonts.NORMAL,
          }}>
          Ghi chú
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.status}
        onPress={() => setShowStastus(!showStatus)}>
        <Text
          style={{
            fontSize: scale(12),
            fontWeight: '400',
            color: 'white',
            fontFamily: fonts.NORMAL,
          }}>
          {state.title}
        </Text>
        <View style={{position: 'absolute', right: 0, marginRight: scale(15)}}>
          <SelectDowIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
  const ModalNode = () => {
    return (
      <Modal visible={Visible} onDismiss={toggleModal} dismissible={false}>
        <View style={styles.modalView}>
          <Text style={styles.titleNote}>Ghi chú nhà tuyển dụng</Text>
          <View style={[styles.boxInput]}>
            <TextInput
              placeholder="Nhập tối thiểu 50 từ"
              style={styles.textInput}
            />
          </View>
          <Button title="Lưu" color={colors.WHITE} bg={colors.BLUE} />
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.contener}>
      <HeaderStyle type="filter" Title="Ứng viên đã ứng tuyển" />
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
      <SelectModal
        isVisible={showStatus}
        onBackdropPress={toggleModalSelect}
        label={'Trạng thái'}
        onPress={item => {
          setState(item);
          toggleModalSelect();
        }}
        data={states}
      />
    </View>
  );
};

export default UV_Screen;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
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
    fontFamily: fonts.NORMAL,
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '35%',
  },
  viewFL: {
    width: scale(335),
    borderRadius: scale(20),
    backgroundColor: 'white',
    margin: scale(5),
    padding: scale(10),
    borderWidth: 0.5,
    borderColor: colors.BLUE,
    elevation: 5,
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
    fontFamily: fonts.NORMAL,
    fontSize: scale(12),
    marginTop: scale(5),
  },
  nameUV: {
    fontFamily: fonts.NORMAL,
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
    padding: scale(20),
    alignItems: 'center',
    width: scale(311),
  },
  boxInput: {
    width: scale(280),
    height: scale(205),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: scale(20),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    padding: scale(10),
    fontFamily: fonts.NORMAL,
  },
  showStatus: {
    width: scale(142),
    backgroundColor: '#307DF1',
    marginTop: scale(130),
    alignItems: 'center',
  },
  titleNote: {
    fontSize: scale(20),
    fontFamily: fonts.NORMAL,
    color: '#307DF1',
    textAlign: 'center',
  },
});
