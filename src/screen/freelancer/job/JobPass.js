import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import {SwipeListView} from 'react-native-swipe-list-view';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';
import Header from '../../../components/title/Header';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/core';
import images from '../../../constant/images';
import {useSelector} from 'react-redux';
import EmptyData from '../../../components/EmptyData';
import Notification from '../../../components/Notification';
import {currentDate} from '../../../data/Jobs';

export default function JobPass({navigation}) {
  const isFocused = useIsFocused();
  const [listJob, setListJobs] = useState([]);
  const _id = useSelector(state => state.Authen.data);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getJobApplied();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const getJobApplied = () => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        setRefreshing(false);
        const listApply = response.data.jobs.filter(item =>
          item.applicants_applied.find(
            it => it.name === _id?.user?.name && it.is_cancel === false,
          ),
        );
        setListJobs(listApply);
        // console.log('listApply: ', JSON.stringify(listApply));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const remove = item => {
    setIsOpen(true);
    const apply = item.applicants_applied.find(
      it =>
        it.jobId === item._id &&
        it.name === _id?.user?.name &&
        it.is_cancel === false,
    );
    var data = JSON.stringify({
      id_apply: apply?._id,
    });

    var config = {
      method: 'patch',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/cancel-apply/${item._id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toggleSuccess = () => {
    setIsOpen(false);
    getJobApplied();
    setRefreshing(true);
    getJobApplied();
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getJobApplied();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => {
    if (currentDate < item.last_date) {
      setState('Còn hạn');
    } else if (currentDate === item.last_date) {
      setState('Đến hạn');
    } else {
      setState('Hết hạn');
    }

    const apply = item.applicants_applied.find(
      it =>
        it.jobId === item._id &&
        it.name === _id?.user?.name &&
        it.is_cancel === false,
    );
    return (
      <View>
        {apply?.is_cancel === false && (
          <View style={styles.boxJob(state)}>
            <TouchableOpacity
              onPress={() => navigation.navigate('JobDetail', {id: item._id})}>
              <View style={styles.row}>
                <Image
                  style={styles.logoJob}
                  source={
                    item.user_create.avatar
                      ? {uri: item.user_create.avatar}
                      : images.avatar
                  }
                />
                <View style={styles.viewCompany}>
                  <Text style={styles.txtTitleJob}>
                    {item.job_posting_position}
                  </Text>
                  <Text style={styles.txtAddress}>{item.career}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.info}>
              <View style={styles.type}>
                <Image style={styles.iconJob} source={icons.bag} />
                <Text style={styles.txtStatus}>{item.working_form}</Text>
              </View>
              <View style={styles.salary}>
                <Image style={styles.iconJob} source={icons.money} />
                <Text style={styles.txtStatus}>{item.salary}</Text>
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.type}>
                <Image style={styles.iconJob} source={icons.local} />
                <Text
                  numberOfLines={1}
                  style={[styles.txtStatus, {width: '80%'}]}>
                  {item.work_location}
                </Text>
              </View>
              <View style={styles.salary}>
                <Image style={styles.iconJob} source={icons.calendar_blue} />
                <Text style={styles.txtStatus}>{state}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="việc làm đã ứng tuyển" />
      <View style={{marginBottom: scale(100)}}>
        <SwipeListView
          data={listJob}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          renderHiddenItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => remove(item)}>
                <View style={styles.swiper}>
                  <Text style={styles.contact}>Huỷ</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => <EmptyData content="Chưa có dữ liệu" />}
          rightOpenValue={isOpen === true ? scale(120) : scale(-120)}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      </View>
      <Notification
        on={isOpen}
        off={toggleSuccess}
        content1="Huỷ ứng tuyển thành công thành công!!!"
        title="THÔNG BÁO"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  info: {flexDirection: 'row', marginTop: scale(10)},
  type: {flexDirection: 'row', marginTop: scale(5), width: '60%'},
  salary: {flexDirection: 'row', marginTop: scale(5)},
  boxJob: state => ({
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(20),
    width: scale(335),
    backgroundColor: state === 'Hết hạn' ? colors.GRAY : '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    marginVertical: scale(10),
    marginLeft: scale(8),
  }),
  logoJob: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(25),
  },
  txtTitleJob: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.BOLD,
    flexWrap: 'wrap',
  },
  txtAddress: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    marginTop: scale(5),
    fontFamily: fonts.NORMAL,
  },
  iconHeart: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(5),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    color: '#404040',
    fontFamily: fonts.NORMAL,
    top: scale(3),
  },
  row: {flexDirection: 'row'},
  viewCompany: {
    marginHorizontal: scale(8),
    width: '90%',
  },
  swiper: {
    width: scale(115),
    height: scale(135),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '65%',
    backgroundColor: '#307df1',
    marginTop: scale(10),
    borderRadius: scale(20),
  },
  contact: {color: '#fff', fontFamily: fonts.NORMAL, fontSize: scale(16)},
  txtContact: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(14),
  },
  txtBlue: {
    marginLeft: scale(5),
    marginTop: scale(2),
    color: colors.BLUE,
    textDecorationLine: 'underline',
  },
});
