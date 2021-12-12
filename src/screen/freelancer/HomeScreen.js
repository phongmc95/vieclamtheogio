import colors from '@constant/colors';
import fonts from '@constant/fonts';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import TitleHome from '../../components/title/TitleHome';
import icons from '../../constant/icons';
import {jobs} from '../../data/Jobs';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileEPl} from '../../redux/actions/actions';
import {useIsFocused} from '@react-navigation/core';
import images from '../../constant/images';

export default function HomeScreen({navigation}) {
  const isFocused = useIsFocused();
  const _id = useSelector(state => state.Authen.data);
  const dispatch = useDispatch();
  const data = useSelector(state => state.ProfileEPl.data);

  useEffect(() => {
    dispatch(ProfileEPl(_id?.user?.userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, isFocused]);
  const [listJobs, setListJobs] = useState([]);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        setListJobs(response.data.jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, [isFocused]);

  const renderJob = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', {id: item._id})}>
        <View style={styles.boxJob}>
          <View style={styles.row}>
            <Image
              style={styles.logoJob}
              source={
                item?.user_create?.avatar === '/uploads/example.jpeg'
                  ? images.avatar
                  : item?.user_create?.avatar === undefined
                  ? images.avatar
                  : item?.user_create?.avatar === null
                  ? images.avatar
                  : {uri: item.user_create.avatar}
              }
            />
            <View style={styles.viewTitle}>
              <Text style={styles.txtTitleJob}>
                {item.job_posting_position}
              </Text>
              <Text style={styles.txtAddress}>{item?.career}</Text>
            </View>
            {/* <Image style={styles.iconHeart} source={icons.reDislike} /> */}
          </View>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.bag} />
            <Text style={styles.txtStatus}>{item.working_form}</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.money} />
            <Text style={styles.txtStatus}>{item.salary}</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.local} />
            <Text style={styles.txtStatus}>{item.work_location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <TitleHome name={data?.user?.name} />
      <ScrollView style={styles.scroll}>
        <View style={styles.viewCategory}>
          <View style={styles.listJob}>
            {jobs.map(item => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListJob', {
                    list: listJobs,
                    title: item.title,
                  })
                }>
                <View style={styles.boxCategory}>
                  <Image style={styles.iconCategory} source={item.img} />
                  <Text style={styles.txtCategory}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <View style={styles.row}>
              <Text style={styles.txtTitle}>Việc làm mới nhất</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListJob', {
                    list: listJobs,
                    title: '',
                  })
                }>
                <Text style={styles.txtSeeMore}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={listJobs.reverse().slice(0, 3)}
              keyExtractor={item => item._id}
              renderItem={renderJob}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  viewCategory: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginTop: scale(10),
  },
  txtTitle: {
    fontSize: scale(18),
    lineHeight: scale(20),
    color: '#307df1',
    fontFamily: fonts.BOLD,
    width: '78%',
  },
  txtSeeMore: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  boxCategory: {
    height: scale(100),
    width: scale(90),
    backgroundColor: '#307df1',
    borderRadius: scale(20),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,

    elevation: 5,
    alignItems: 'center',
    marginRight: scale(20),
    marginVertical: scale(10),
  },
  iconCategory: {
    height: scale(30),
    width: scale(30),
    marginTop: scale(21),
  },
  txtCategory: {
    fontSize: scale(11),
    lineHeight: scale(20),
    color: '#fff',
    marginTop: scale(5),
    flexWrap: 'wrap',
    width: '70%',
    textAlign: 'center',
    fontFamily: fonts.NORMAL,
  },
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(20),
    width: scale(310),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,

    elevation: 5,
    marginVertical: scale(10),
  },
  logoJob: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(30),
  },
  txtTitleJob: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
    flexWrap: 'wrap',
  },
  txtAddress: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  iconHeart: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(5),
    left: scale(25),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  row: {flexDirection: 'row', marginTop: scale(5)},
  viewTitle: {
    marginHorizontal: scale(8),
    width: '60%',
  },
  listJob: {
    width: '100%',
    height: scale(270),
    flexWrap: 'wrap',
  },
  scroll: {marginBottom: scale(65)},
  titleJob: {
    marginHorizontal: scale(8),
    width: '60%',
  },
});
