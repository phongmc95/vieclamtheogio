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
import {useDispatch, useSelector} from 'react-redux';
import {ProfileEPl} from '../../../redux/actions/actions';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import ButtonStyle from '../../../components/ButtonStyle';
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
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const _id = useSelector(state => state.Authen.data);
  const data = useSelector(state => state.ProfileEPl.data);
  useEffect(() => {
    dispatch(ProfileEPl(_id.user?.userId));
  }, []);
  const isFocused = useIsFocused();
  const idEmp = useSelector(state => state.Authen.data);
  const [listJob, setListJob] = useState([]);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        setListJob(response.data.jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, [isFocused]);
  const listData = listJob.filter(
    item => item.createdBy === idEmp?.user?.userId,
  );
  console.log('ListData: ', listData);
  const renderItem = ({item}) => (
    <View style={styles.ViewFlatlist}>
      <Text style={styles.TextTitle}>{item.job_posting_position}</Text>

      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Thời gian</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>
          {item.posting_date} đến {item.last_date}
        </Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Quản lí</Text>
        <Text style={styles.TextR}>{'Còn Hạn'}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Lương</Text>
        <Text style={styles.TextR}>{item.salary}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Địa Chỉ</Text>
        <Text style={styles.TextR}>{item.work_location}</Text>
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
      <HeaderStyle
        type="home"
        Title={data?.user?.name}
        uri={data?.user?.avatar ? data?.user?.avatar : null}
      />
      {/* main */}
      <ScrollView style={{padding: scale(10), marginBottom: scale(30)}}>
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
          {/* flatlist1 */}
          <View style={styles.viewRow}>
            <Text style={styles.title}>DS tin tuyển dụng mới nhất</Text>
            <TouchableOpacity>
              <Text style={[styles.TextR, {marginTop: scale(15)}]}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          {listData.length === 0 || !listData ? (
            <View
              style={[
                styles.ViewFlatlist,
                {
                  paddingVertical: scale(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingBottom: scale(15),
                }}>
                Chưa có tin tuyền dụng
              </Text>
              <ButtonStyle
                styleBtn={{width: scale(130), backgroundColor: '#307DF1'}}
                Title={'Đăng Tin'}
                onPress={() => navigation.navigate('DangTin')}
              />
            </View>
          ) : (
            <FlatList
              data={listData}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              horizontal={true}
            />
          )}
          <View style={styles.viewRow}>
            <Text style={styles.title}>Hồ sơ ứng tuyển mới nhất</Text>
            <TouchableOpacity>
              <Text style={[styles.TextR, {marginTop: scale(15)}]}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.ViewFlatlist,
              {
                paddingVertical: scale(50),
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: scale(80),
              },
            ]}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../../../assets/images/logoVin.png')}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Chưa có hồ sơ ứng tuyển
            </Text>
          </View>
          {/* // <FlatList*!/*/}
          {/* //   data={emp}*!/*/}
          {/* //   keyExtractor={item => item.id}*!/*/}
          {/*//   renderItem={renderItemHS}*!/*/}
          {/* //   horizontal={true}*!/*/}
          {/* // */}
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
