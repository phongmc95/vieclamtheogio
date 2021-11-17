import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '../../../components/Button/Button';
import HeaderStyle from '../../../components/HeaderStyle';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import {
  ButtonItemBoqua,
  ButtonItemLuu,
} from '../../../components/Button/ButtonItem';
const jobs = [
  {
    id: 1,
    vi_tri: 'Bán hàng',
    fist_time: '20/11/2021',
    last_time: '20/11/2021',
    luot_ut: 10,
  },
];
const emp = [
  {
    id: 1,
    uv_username: 'Hà Anh Tuấn',
    vi_tri: 'Bán hàng',
    created_at: '20/11/2021',
    last_time: '20/11/2021',
    image:
      'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
    luot_ut: 10,
  },
];
const Home = () => {
  const renderItem = ({item}) => (
    <View style={styles.ViewFlatlist}>
      <Text style={styles.TextTitle}>{item.vi_tri}</Text>

      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Thời gian</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>
          {item.fist_time} đến {item.last_time}
        </Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Ngày ứng tuyển</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.fist_time}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Lượt ứng tuyển</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.luot_ut}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Quản lí</Text>
        <Text style={styles.TextR}>còn hạn</Text>
      </View>
    </View>
  );
  const renderItemHS = ({item}) => (
    <View
      style={[styles.ViewFlatlist, {padding: scale(10), marginBottom: '25%'}]}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.imgItem}
        />
        <Text style={styles.Name_hs}>{item.uv_username}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Vị trí ứng tuyển</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.vi_tri}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Ngày nộp</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.created_at}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: scale(10),
        }}>
        <View style={{marginRight: scale(20)}}>
          <ButtonItemLuu nameBTN="Lưu" />
        </View>
        <ButtonItemBoqua nameBTN="Bỏ qua" />
      </View>
    </View>
  );

  return (
    <View style={styles.contener}>
      {/* tusBar */}
      <HeaderStyle type="home" Title="HÀ Anh Tuấn" />
      {/* main */}
      <ScrollView style={{padding: scale(10)}}>
        <View style={styles.main}>
          <Text style={styles.title}>Thống kê tin đăng</Text>
          {/* view1 */}
          <View style={styles.viewRow}>
            <View style={styles.itemThongKe}>
              <Text style={styles.textItem}>Ứng viên ứng tuyển</Text>
              <Text style={styles.itemNumber}>23</Text>
            </View>
            <View style={styles.itemThongKe}>
              <Text style={styles.textItem}>Ứng viên điểm lọc</Text>
              <Text style={styles.itemNumber}>23</Text>
            </View>
            <View style={styles.itemThongKe}>
              <Text style={styles.textItem}>Ứng viên đã lưu</Text>
              <Text style={styles.itemNumber}>23</Text>
            </View>
          </View>
          {/* view2 */}
          <View style={styles.detaillTK}>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Tin VIP</Text>
              <Text style={styles.TextR}>0</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Việc sắp hết hạn</Text>
              <Text style={styles.TextR}>0</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Việc làm hết hạn</Text>
              <Text style={styles.TextR}>0</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Việc làm còn hạn</Text>
              <Text style={styles.TextR}>0</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Số tin đăng trong ngày</Text>
              <Text style={styles.TextR}>0</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Số việc làm mới tin trong ngày</Text>
              <Text style={styles.TextR}>0</Text>
            </View>
          </View>
          {/* flatlist1 */}
          <View style={styles.viewRow}>
            <Text style={styles.title}>DS tin tuyển dụng mới nhất</Text>
            <TouchableOpacity>
              <Text style={[styles.TextR, {marginTop: scale(15)}]}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={jobs}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal={true}
          />
          {/* flatlist2 */}
          <View style={styles.viewRow}>
            <Text style={styles.title}>Hồ sơ ứng tuyển mới nhất</Text>
            <TouchableOpacity>
              <Text style={[styles.TextR, {marginTop: scale(15)}]}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={emp}
            keyExtractor={item => item.id}
            renderItem={renderItemHS}
            horizontal={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },

  main: {
    marginTop: scale(5),
  },
  title: {
    fontWeight: '500',
    fontSize: scale(14),
    lineHeight: scale(20),
    marginTop: scale(15),
    marginLeft: scale(10),
    fontFamily: fonts.BOLD,
  },
  itemThongKe: {
    width: scale(100),
    height: scale(100),
    marginTop: scale(10),
    padding: scale(10),
    borderRadius: scale(20),
    borderColor: '#307DF1',
    borderWidth: scale(1),
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  textItem: {
    width: scale(60),
    fontSize: scale(13),
    fontWeight: '400',

    textAlign: 'center',
  },
  itemNumber: {
    color: '#307DF1',
    fontWeight: '500',
    fontSize: scale(36),

    textAlign: 'center',
  },
  detaillTK: {
    width: '97%',
    borderRadius: scale(20),
    borderWidth: scale(0.5),
    marginLeft: scale(5),
    borderColor: '#307DF1',
    marginTop: scale(10),
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
    padding: scale(10),
    elevation: 5,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: scale(5),
  },
  TextL: {
    fontWeight: '400',
    fontSize: scale(13),
    marginLeft: scale(10),
  },
  TextR: {
    fontWeight: '400',
    fontSize: scale(13),
    color: '#307DF1',
    marginRight: scale(10),
  },
  ViewFlatlist: {
    width: scale(320),
    paddingVertical: scale(10),

    borderRadius: scale(20),

    backgroundColor: 'white',
    margin: scale(5),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: scale(5),
  },
  TextTitle: {
    fontWeight: '500',
    fontSize: scale(16),
    color: '#307DF1',
    marginLeft: scale(15),
    marginTop: scale(10),
  },
  imgItem: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(20),
    marginTop: scale(14),
    marginLeft: scale(10),
  },
  Name_hs: {
    fontWeight: '500',
    fontSize: scale(18),
    marginLeft: scale(15),
    marginTop: scale(33),
  },
});
