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

const screenWidth = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

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

  const UV = listData?.map(item =>
    item.applicants_applied.reduce((a, b) => ({...a, data: b}), {}),
  );
  const DATA = {
    labels: ['11', '12', '1', '2', '3', '4'],
    datasets: [
      {
        data: [UV.length, 0, 0, 0, 0, 0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optionalK
      },
    ],
    legend: ['Lượt ứng tuyển'], // optional
  };
  const renderItem = ({item}) => (
    <View style={[styles.ViewFlatlist, {marginVertical: 20}]}>
      <Text style={styles.TextTitle}>{item?.job_posting_position}</Text>

      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Thời gian</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>
          {item.posting_date} đến {item?.last_date}
        </Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Quản lí</Text>
        <Text style={styles.TextR}>{'Còn Hạn'}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Lượt ứng tuyển</Text>
        <Text style={styles.TextR}>{item?.applicants_applied.length}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Địa Chỉ</Text>
        <Text style={styles.TextR}>{item?.work_location}</Text>
      </View>
    </View>
  );
  const renderItemHS = ({item}) => (
    <View
      style={[styles.ViewFlatlist, {padding: scale(10), marginBottom: '25%', marginVertical: 20}]}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={
            item?.data?.avatar ? {uri: item?.data?.avatar} : images.avatar
          }
          style={styles.imgItem}
        />
        <View>
          <Text style={styles.Name_hs}>{item?.data?.name}</Text>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Vị trí :</Text>
            <Text style={[styles.TextR, {color: '#307df1'}]}>
              {item?.data?.positions}
            </Text>
          </View>
        </View>
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
      <ScrollView style={{marginBottom: scale(30)}}>
        <View style={styles.main}>
          <Text style={styles.title}>Thống kê tin đăng</Text>
          {/* view1 */}
          <LineChart
            data={DATA}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
          {/* view2 */}
          {/* flatlist1 */}
          <View style={styles.viewRow}>
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
              showsHorizontalScrollIndicator={false}
            />
          )}
          <View style={styles.viewRow}>
            <Text style={styles.title}>Hồ sơ ứng tuyển mới nhất</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UV_Screen')}>
              <Text style={[styles.TextR, {marginTop: scale(15)}]}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
          {UV.length === 0 ? (
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
          ) : (
            <FlatList
              data={UV}
              keyExtractor={item => item.id}
              renderItem={renderItemHS}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
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
    color: '#000000',
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
    fontWeight: '500',
    fontSize: scale(16),
    color: '#307DF1',
    marginLeft: scale(15),
    marginTop: scale(10),
  },
  imgItem: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
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
