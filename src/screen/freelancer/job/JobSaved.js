import React, {useEffect, useState} from 'react';
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
import EmptyData from '../../../components/EmptyData';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import Notification from '../../../components/Notification';

export default function JobSaved({navigation}) {
  const profile = useSelector(state => state.ProfileEPl.data);
  // const list = profile?.user?.save_job.filter(item => item.is_save === true);
  const userId = useSelector(state => state.Authen);
  const [user, setUser] = useState([]);
  const id = userId?.data?.user?.userId;
  const isFocued = useIsFocused();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getJobSave();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocued]);

  const getJobSave = () => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        const job = response?.data?.jobs.filter(item =>
          item.save_job.find(
            item => item.userId === id && item.is_save === true,
          ),
        );
        setUser(job);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const remove = ({item}) => {
    const id_save = item.save_job.find(item => item.userId === id)._id;
    var data = JSON.stringify({
      is_save: false,
      id_save: id_save,
    });

    var config = {
      method: 'patch',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/save-job/${item._id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setIsOpen(true);
        getJobSave();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toggleSuccess = () => {
    setIsOpen(false);
    getJobSave();
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.boxJob}>
        <View style={styles.row}>
          <Image
            style={styles.logoJob}
            source={
              item?.user_create?.avatar
                ? {uri: item?.user_create?.avatar}
                : images.avatar
            }
          />

          <View style={styles.title}>
            <TouchableOpacity
              onPress={() => navigation.navigate('JobDetail', {id: item?._id})}>
              <Text style={styles.txtTitleJob}>
                {item?.job_posting_position}
              </Text>
            </TouchableOpacity>
            <Text style={styles.txtAddress}>{item?.career}</Text>
          </View>

          <TouchableOpacity onPress={() => remove({item})}>
            <Image style={styles.trash} source={icons.trash_black} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: scale(10)}}>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.bag} />
            <Text style={styles.txtStatus}>{item?.working_form}</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.money} />
            <Text style={styles.txtStatus}>{item?.salary}</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.iconJob} source={icons.local} />
            <Text style={styles.txtStatus}>{item?.work_location}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TitleBasic title="Việc làm  đã lưu" />
      <View style={{paddingHorizontal: scale(10), marginBottom: scale(60)}}>
        <FlatList
          data={user}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => <EmptyData content="Chưa có dữ liệu" />}
        />
      </View>
      <Notification
        on={isOpen}
        off={toggleSuccess}
        content1="Xoá tin thành công!!!"
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
    width: '70%',
  },
  trash: {
    height: scale(20),
    width: scale(18),
  },
});
