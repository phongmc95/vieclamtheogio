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
  Dimensions,
  StatusBar,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '../../../components/Button/Button';
import HeaderStyle from '../../../components/HeaderStyle';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileEPl} from '../../../redux/actions/actions';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import ButtonStyle from '../../../components/ButtonStyle';
import images from '../../../constant/images';
import {LineChart} from 'react-native-chart-kit';
import {ClockIcon, LocalIcon, PhoneIcon} from '../../../../assets/icon';
import moment from 'moment';
import EmptyData from '../../../components/EmptyData';

const screenWidth = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    color: (opacity = 1) => `rgba(0, 0, 0,${opacity})`,
  };

  const dispatch = useDispatch();
  const _id = useSelector(state => state.Authen.data);
  const data = useSelector(state => state.ProfileEPl.data);
  const isFocused = useIsFocused();
  const idEmp = useSelector(state => state.Authen.data);
  const [listJob, setListJob] = useState([]);
  const [dataUV, setDataUV] = useState([]);
  const [job, setJob] = useState([]);

  useEffect(() => {
    dispatch(ProfileEPl(_id.user?.userId));
  }, []);

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

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users',
    };

    axios(config)
      .then(function (response) {
        setDataUV(response.data.users.filter(item => item.name !== undefined));
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, []);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        setJob(response.data.jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, []);

  const listData = listJob.filter(
    item => item.createdBy === idEmp?.user?.userId,
  );

  const listUV = listData.map(item => item.applicants_applied);

  const DATA = {
    labels: ['T12', 'T1', 'T2', 'T3', 'T4', 'T5'],
    datasets: [
      {
        data: [0, listUV.length, 0, 0, 0, 0],
        color: (opacity = 1) => `rgba(48, 125, 241, ${opacity})`, // optional
        strokeWidth: 2, // optionalK
      },
      {
        data: [0, listData.length, 0, 0, 0, 0],
        color: (opacity = 1) => `rgba(255, 40, 77, ${opacity})`, // optional
        strokeWidth: 2, // optionalK
      },
    ],
    legend: ['Lượt ứng tuyển', 'Tin tuyển dụng'], // optional
  };
  const RenderItem = ({item}) => {
    return (
      <View style={[styles.ViewFlatlist, {marginVertical: 10}]}>
        <Text style={styles.TextTitle}>{item?.job_posting_position}</Text>

        <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
          <Text style={styles.TextL}>Thời gian</Text>
          <Text style={[styles.TextR, {color: 'black'}]}>
            {item.posting_date} đến {item?.last_date}
          </Text>
        </View>
        <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
          <Text style={styles.TextL}>Quản lí</Text>
          <Text style={styles.TextR}>{'Còn Hạn'}</Text>
        </View>
        <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
          <Text style={styles.TextL}>Lượt ứng tuyển</Text>
          <Text style={styles.TextR}>{item?.applicants_applied.length}</Text>
        </View>
        <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
          <Text style={styles.TextL}>Địa Chỉ</Text>
          <Text style={styles.TextR}>{item?.work_location}</Text>
        </View>
      </View>
    );
  };
  const unique = arr => {
    return Array.from(new Set(arr)); //
  };

  const RenderItemHS = ({item}) => {
    const epl = dataUV.find(it => it.name === item?.name);
    const jobs = job.find(it => it._id === item?.jobId);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailUV', {id: epl?._id, type: 'epl'})
        }>
        <View
          style={[
            styles.ViewFlatlist,
            {paddingLeft: scale(10), marginVertical: scale(5)},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={
                item?.avatar === undefined
                  ? images.avatar
                  : item?.avatar === '/uploads/example.jpeg'
                  ? images.avatar
                  : item?.avatar === null
                  ? images.avatar
                  : {uri: item?.avatar}
              }
              style={styles.imgItem}
            />
            <View style={{marginTop: scale(5), marginLeft: scale(5)}}>
              <Text style={styles.Name_hs}>{item?.name}</Text>
              <Text
                style={[
                  styles.Name_hs,
                  {
                    fontSize: scale(14),
                    fontFamily: fonts.NORMAL,
                    marginTop: scale(5),
                  },
                ]}>
                {jobs?.job_posting_position}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <View style={[styles.viewRow, {width: '53%'}]}>
              <LocalIcon color={colors.BLUE} />
              <Text
                style={[
                  styles.TextR,
                  {color: colors.BLACK, marginTop: scale(3)},
                ]}>
                {epl?.address}
              </Text>
            </View>
            <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
              <PhoneIcon />
              <Text
                style={[
                  styles.TextR,
                  {color: colors.BLACK, marginTop: scale(3)},
                ]}>
                {epl?.phone}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.contener}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      {/* tusBar */}
      <HeaderStyle
        type="home"
        Title={data?.user?.name}
        uri={data?.user?.avatar ? data?.user?.avatar : null}
      />
      {/* main */}
      <ScrollView>
        <View
          style={{
            paddingVertical: scale(10),
            marginBottom: scale(50),
          }}>
          <Text style={styles.title}>Thống kê tin đăng</Text>
          {/* view1 */}
          <View style={{alignItems: 'center', marginTop: scale(20)}}>
            <LineChart
              data={DATA}
              width={screenWidth - 20}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
          {/* view2 */}
          {/* flatlist1 */}
          <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
            <Text style={styles.title}>DS tin tuyển dụng mới nhất</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TD_Screen')}>
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
                  fontFamily: fonts.BOLD,
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
              data={listData.slice(0, 3)}
              keyExtractor={item => item.id}
              renderItem={({item}) => <RenderItem item={item} />}
              ListEmptyComponent={() => (
                <EmptyData content="Chưa có tin tuyển dụng" />
              )}
            />
          )}
          <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
            <Text style={styles.title}>Hồ sơ ứng tuyển mới nhất</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UV_Screen')}>
              <Text style={[styles.TextR, {marginTop: scale(15)}]}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={listUV[0]}
            keyExtractor={item => item._id}
            renderItem={({item}) => <RenderItemHS item={item} />}
            ListEmptyComponent={() => (
              <EmptyData content="Chưa có hồ sơ ứng tuyển" />
            )}
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

  title: {
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
    fontFamily: fonts.NORMAL,
    textAlign: 'center',
  },
  itemNumber: {
    color: '#307DF1',
    fontFamily: fonts.BOLD,
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
    margin: scale(5),
  },
  TextL: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(13),
    marginLeft: scale(10),
    color: '#000000',
  },
  TextR: {
    fontSize: scale(13),
    color: '#307DF1',
    marginRight: scale(10),
    marginLeft: scale(5),
    fontFamily: fonts.NORMAL,
  },
  ViewFlatlist: {
    width: '95%',
    paddingVertical: scale(10),
    borderRadius: scale(20),
    backgroundColor: 'white',
    marginHorizontal: scale(10),

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
    fontFamily: fonts.BOLD,
    fontSize: scale(16),
    color: '#307DF1',
    marginLeft: scale(15),
    marginTop: scale(10),
  },
  imgItem: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(50),
    marginLeft: scale(10),
  },
  Name_hs: {
    fontFamily: fonts.BOLD,
    fontSize: scale(18),
    marginLeft: scale(15),
  },
});
