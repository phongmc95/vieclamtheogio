import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import HeaderStyle from '../../../components/HeaderStyle';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import images from '../../../constant/images';
import {scale} from 'react-native-size-matters';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  ClockIcon,
  LocalIcon,
  PhoneIcon,
  SelectDowIcon,
} from '../../../../assets/icon';
import SelectModal from '../../../components/SelectModal';
import moment from 'moment';
const UV_Screen = ({navigation}) => {
  const states = [
    {id: 2, title: 'Đến phỏng vấn'},
    {id: 3, title: 'Đạt yêu cầu'},
    {id: 4, title: 'Không đạt yêu cầu'},
  ];
  const [styleHinder, setStyleHinder] = useState({backgroundColor: 'white'});
  const [showStatus, setShowStastus] = useState(false);
  const [state, setState] = useState({id: null, title: 'Trạng thái'});
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const idEmp = useSelector(state => state.Authen.data);
  const [id, setId] = useState('');
  const [jobID, setJobID] = useState('');
  const isFocused = useIsFocused();
  const [dataUV, setDataUV] = useState([]);
  const [job, setJob] = useState([]);

  useEffect(() => {
    appliedList();
    return () => {};
  }, [load, isFocused]);

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

  const appliedList = () => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        setData(response.data.jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const status = item => {
    setShowStastus(!showStatus);
    setId(item?._id);
    setJobID(item?.jobId);
  };

  const accessApplied = title => {
    var data = JSON.stringify({
      status: title,
      id_apply: id,
    });

    var config = {
      method: 'patch',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/access-apply/${jobID}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('ok!');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toggleModalSelect = () => {
    setShowStastus(!showStatus);
  };

  const listData = data?.filter(item => item.createdBy === idEmp?.user?.userId);
  const listUV = listData
    ?.map(item => item.applicants_applied)
    .find(item => item);

  const RenderItem = ({item}) => {
    const epl = dataUV.find(it => it.name === item?.name);
    const jobs = job.find(it => it._id === item?.jobId);
    return (
      <View style={[styles.viewFL, styleHinder]}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() =>
            navigation.navigate('DetailUV', {id: epl?._id, type: 'epl'})
          }>
          <View>
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
                style={styles.avatar}
              />
              <View style={{marginLeft: scale(10)}}>
                <Text style={styles.nameUV}>{item?.name}</Text>
                <Text
                  style={[
                    styles.textitem,
                    {marginLeft: scale(10), marginTop: scale(5)},
                  ]}>
                  {jobs?.job_posting_position}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: scale(10),
                  marginTop: scale(10),
                  width: '52%',
                }}>
                <LocalIcon color={colors.BLUE} />
                <Text style={styles.textitem}>{epl?.job_adress}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: scale(10),
                  marginTop: scale(10),
                }}>
                <PhoneIcon />
                <Text style={styles.textitem}>{epl?.phone}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHinderItem = ({item}) => {
    return (
      <View style={styles.hinder}>
        <TouchableOpacity style={styles.status} onPress={() => status(item)}>
          <Text
            style={{
              fontSize: scale(12),
              color: 'white',
              fontFamily: fonts.NORMAL,
            }}>
            {state.title} <SelectDowIcon />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.contener}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <HeaderStyle type="filter" Title="Ứng viên đã ứng tuyển" />
      {/* main */}
      <View style={styles.main}>
        {listUV?.length === 0 || listUV === null ? (
          <View
            style={{
              paddingTop: scale(180),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: scale(80), height: scale(80)}}
              source={require('../../../../assets/images/logoVin.png')}
            />
            <Text style={{padding: 12, fontSize: 16}}>
              Bạn chưa có ứng viên nào ứng tuyển
            </Text>
          </View>
        ) : (
          <SwipeListView
            data={listUV}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={item => item.positions}
            renderHiddenItem={renderHinderItem}
            rightOpenValue={scale(-155)}
            ListFooterComponent={() => (
              <View style={{paddingBottom: scale(50)}} />
            )}
            //   onRowDidOpen={onRowDidOpen}
          />
        )}
      </View>
      <SelectModal
        isVisible={showStatus}
        onBackdropPress={toggleModalSelect}
        label={'Trạng thái'}
        onPress={item => {
          setState(item);
          toggleModalSelect();
          accessApplied(item.title);
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
    borderRadius: scale(30),
    marginLeft: scale(5),
    marginTop: scale(12),
  },
  LikeIcon: {
    margin: scale(18),
  },
  textitem: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    marginLeft: scale(8),
    marginTop: scale(2),
  },
  nameUV: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(18),
    color: '#307DF1',
    marginLeft: scale(10),
    marginTop: '8%',
  },
  hinder: {
    width: scale(142),
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
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#307DF1',
    borderRadius: scale(20),
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
