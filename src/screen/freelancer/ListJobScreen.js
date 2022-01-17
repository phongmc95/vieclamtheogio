import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../components/title/TitleBasic';
import colors from '../../constant/colors';
import fonts from '../../constant/fonts';
import icons from '../../constant/icons';
import images from '../../constant/images';
import {FilterMoreIcon} from '../../../assets/icon';
import axiosClient from '../../config/axios';
import EmptyData from '../../components/EmptyData';

function findByTemplate(data, params) {
  return data.filter(item => {
    return Object.keys(params).every(keys => {
      return item[keys] === params[keys];
    });
  });
}
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

export default function ListJobScreen({navigation, route}) {
  const params = route.params;
  const [listJob, setListJob] = useState([]);
  const [DataFilter, setDataFilter] = useState([]);

  const getAPi = async () => {
    let url = 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs';
    try {
      const res = await axiosClient.get(url);
      setListJob(res.jobs);
      params.search &&
        setDataFilter(
          res.jobs.filter(item => {
            const itemdata = item.job_posting_position
              ? item.job_posting_position
                  .toUpperCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D')
              : ''
                  .toUpperCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D');
            const textdata = params?.search
              .toUpperCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'D');
            return itemdata.indexOf(textdata) > -1;
          }),
        );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAPi();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => (
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
          <View style={styles.viewContent}>
            <Text style={[styles.txtTitleJob]}>
              {item.job_posting_position}
            </Text>
            <Text style={styles.txtAddress}>{item?.career}</Text>
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
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TitleBasic
        title="danh sách việc"
        ic={<FilterMoreIcon />}
        onPress={() => navigation.navigate('Filters')}
      />
      <View style={styles.padding}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            params?.search
              ? DataFilter
              : !params
              ? listJob
              : findByTemplate(
                  listJob,
                  Object.filter(params, ps => ps !== null),
                )
          }
          keyExtractor={item => item._id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <EmptyData content="Không tìm thấy công việc" />
          )}
          ListFooterComponent={() => <View style={{marginBottom: scale(50)}} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.LIGHT_WHITE},
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(5),
    width: scale(305),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    marginBottom: scale(20),
    marginLeft: scale(3),
    borderColor: '#404040',
  },
  logoJob: {
    width: scale(79),
    height: scale(79),
    marginTop: scale(15),
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
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  padding: {
    paddingHorizontal: scale(20),
    marginTop: scale(20),
    marginBottom: scale(50),
  },
  viewContent: {
    marginHorizontal: scale(8),
    width: '65%',
  },
  row: {flexDirection: 'row', marginTop: scale(5)},
});
