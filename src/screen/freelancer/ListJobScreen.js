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
import {useIsFocused} from '@react-navigation/native';

export default function ListJobScreen({navigation, route}) {
  const {list, title} = route.params;
  const [listJob, setListJob] = useState('');
  const isFocued = useIsFocused();

  useEffect(() => {
    const filter = list.filter(item => item.career === title);
    setListJob(filter);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocued]);

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
      <TitleBasic title="danh sách việc" />
      <View style={styles.padding}>
        <FlatList
          data={title === '' ? list : listJob}
          keyExtractor={item => item._id}
          renderItem={renderItem}
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
