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
import {useSelector} from 'react-redux';
import {NotificationICON} from '../../../../assets/icon';
import HomeAPi from '../../../base/API/apiNTD/HomeAPi';
import {
  ButtonItemBoqua,
  ButtonItemLuu,
} from '../../../components/Button/ButtonItem';

const Home = () => {
  const get_token = useSelector(state => state.LOGIN.tokenlogin);
  const [data, setData] = useState(null);
  useEffect(() => {
    const callApi = async () => {
      try {
        var data = new FormData();
        data.append('token', get_token);

        const response = await HomeAPi.getAll(data);

        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log('lỗi rồi Tuấn ơi??????' + error);
      }
    };
    callApi();
  }, []);

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
    <View style={[styles.ViewFlatlist, {height: scale(179)}]}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={
            item.uv_avatar
              ? {uri: item.uv_avatar}
              : {
                  uri: 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
                }
          }
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={{margin: scale(5)}}>
          <ButtonItemLuu nameBTN="Lưu" />
        </TouchableOpacity>
        <TouchableOpacity style={{margin: scale(5)}}>
          <ButtonItemBoqua nameBTN="Bỏ qua" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.contener}>
      {/* tusBar */}
      <View style={styles.StatusBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={
              data
                ? {uri: data.avatar}
                : require('../../../../assets/img/logoVin.png')
            }
            style={styles.logo}
          />
          <Text style={styles.NameNTD}>{data ? data.ten_ntd : ''}</Text>
        </View>
        <TouchableOpacity
          style={styles.Notification}
          onPress={() => console.log(get_token)}>
          <NotificationICON />
        </TouchableOpacity>
      </View>
      {/* main */}
      <ScrollView style={{marginBottom: scale(65)}}>
        <View style={styles.main}>
          <Text style={styles.title}>Thống kê tin đăng</Text>
          {/* view1 */}
          <View style={styles.viewRow}>
            <View style={styles.itemThongKe}>
              <Text style={styles.textItem}>Ứng viên ứng tuyển</Text>
              <Text style={styles.itemNumber}>
                {data ? data.so_luot_ut : ''}
              </Text>
            </View>
            <View style={styles.itemThongKe}>
              <Text style={styles.textItem}>Ứng viên điểm lọc</Text>
              <Text style={styles.itemNumber}>
                {data ? data.so_hs_loc_diem : ''}
              </Text>
            </View>
            <View style={styles.itemThongKe}>
              <Text style={styles.textItem}>Ứng viên đã lưu</Text>
              <Text style={styles.itemNumber}>
                {data ? data.so_hs_luu : ''}
              </Text>
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
              <Text style={styles.TextR}>
                {data ? data.tin_sap_het_han : ''}
              </Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Việc làm hết hạn</Text>
              <Text style={styles.TextR}>{data ? data.tin_het_han : ''}</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Việc làm còn hạn</Text>
              <Text style={styles.TextR}>{data ? data.tin_con_han : ''}</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.TextL}>Số tin đăng trong ngày</Text>
              <Text style={styles.TextR}>
                {data ? data.so_tin_dang_perday : ''}
              </Text>
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
            data={data ? data.ds_tin : []}
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
            data={data ? data.ds_hs_ut : []}
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
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: scale(40),
    width: scale(40),
    margin: scale(10),
    marginLeft: scale(10),
    borderRadius: scale(20),
  },
  NameNTD: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
  },
  Notification: {
    backgroundColor: 'white',
    width: scale(35),
    height: scale(35),

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(50),
    margin: scale(10),
  },

  main: {
    marginTop: scale(5),
  },
  title: {
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: scale(20),
    fontStyle: 'normal',
    marginTop: scale(15),
    marginLeft: scale(10),
  },
  itemThongKe: {
    width: scale(100),
    height: scale(100),
    marginTop: scale(10),

    borderRadius: scale(20),
    borderColor: '#307DF1',
    borderWidth: scale(1),
    alignItems: 'center',
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
    width: scale(335),
    height: scale(165),
    borderRadius: scale(20),
    borderWidth: scale(0.5),
    marginLeft: scale(10),
    borderColor: '#307DF1',
    marginTop: scale(10),
    justifyContent: 'space-between',
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
    width: scale(302),
    height: scale(162),

    borderRadius: scale(20),

    backgroundColor: 'white',
    margin: scale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: scale(2),
    },
    shadowOpacity: scale(0.25),
    shadowRadius: scale(3.84),

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
