import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';
import {useSelector} from 'react-redux';
import images from '../../../constant/images';
import icons from '../../../constant/icons';

export default function JobSaved({navigation}) {
  const [check, setCheck] = useState(false);
  const profile = useSelector(state => state.ProfileEPl.data);
  const list = profile?.user?.save_job.filter(item => item.is_save === true);
  console.log('list: ', list);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', {id: item?.job?._id})}>
        <View style={styles.boxJob}>
          <View style={styles.row}>
            <Image
              style={styles.logoJob}
              source={
                item?.job?.user_create?.avatar
                  ? {uri: item?.job?.user_create?.avatar}
                  : images.avatar
              }
            />

            <View style={styles.title}>
              <Text style={styles.txtTitleJob}>
                {item?.job?.job_posting_position}
              </Text>
              <Text style={styles.txtAddress}>{item?.job?.career}</Text>
            </View>

            <Image style={styles.trash} source={icons.trash_black} />
          </View>
          <View style={{marginTop: scale(10)}}>
            <View style={styles.row}>
              <Image style={styles.iconJob} source={icons.bag} />
              <Text style={styles.txtStatus}>{item?.job?.working_form}</Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.iconJob} source={icons.money} />
              <Text style={styles.txtStatus}>{item?.job?.salary}</Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.iconJob} source={icons.local} />
              <Text style={styles.txtStatus}>{item?.job?.work_location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TitleBasic title="Việc làm  đã lưu" />
      <View style={{paddingHorizontal: scale(10), marginBottom: scale(60)}}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.job._id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(20),
    width: scale(325),
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
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  content: {marginLeft: scale(10), flexDirection: 'row'},
  row: {flexDirection: 'row', marginTop: scale(5)},
  title: {
    marginHorizontal: scale(8),
    width: '85%',
  },
  trash: {
    right: scale(40),
    height: scale(20),
    width: scale(18),
  },
});
