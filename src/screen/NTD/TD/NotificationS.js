import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, Selecter, DateIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {ProfileEPl} from '../../../redux/actions/actions';
import {useIsFocused} from '@react-navigation/native';
import images from '../../../constant/images';
const NotificationS = ({navigation}) => {
  const dispatch = useDispatch();
  const [listJob, setListJob] = useState([]);
  const _id = useSelector(state => state.Authen.data);
  const data = useSelector(state => state.ProfileEPl.data);
  useEffect(() => {
    dispatch(ProfileEPl(_id.user?.userId));
  }, []);
  const isFocused = useIsFocused();
  const idEmp = useSelector(state => state.Authen.data);
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

  const UV = listData?.map(item => item.applicants_applied);
  const renderItemHS = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UV_Screen')}
      style={[styles.ViewFlatlist]}>
      <Text style={styles.Name_hs} numberOfLines={3}>
        <Text style={{color: '#FFA800', fontWeight: 'bold'}}>{item?.name}</Text>{' '}
        đã ứng tuyển vị trí{' '}
        <Text style={[{color: '#307df1'}]}>{item?.positions}</Text>{' '}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Thông báo</Text>
      </View>
      <FlatList
        data={UV[0]}
        keyExtractor={item => item.id}
        renderItem={renderItemHS}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: scale(20),
    marginBottom: scale(10),
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  goback: {
    marginLeft: scale(10),
  },
  main: {
    alignItems: 'center',
  },
  ViewFlatlist: {
    width: scale(320),

    marginHorizontal: scale(10),
    borderBottomWidth: 1,
    borderColor: '#307df1',
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
    paddingVertical: 20,
  },
});
export default NotificationS;
