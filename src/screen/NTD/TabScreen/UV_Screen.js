import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import HeaderStyle from '../../../components/HeaderStyle';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import images from '../../../constant/images';
import {scale} from 'react-native-size-matters';
const UV_Screen = ({navigation}) => {
  const states = [
    {id: 2, title: 'Đến phỏng vấn'},
    {id: 3, title: 'Đạt yêu cầu'},
    {id: 4, title: 'Không đạt yêu cầu'},
  ];
  const [styleHinder, setStyleHinder] = useState({backgroundColor: 'white'});
  const [Visible, setVisible] = useState(false);
  const [showStatus, setShowStastus] = useState(false);
  const [state, setState] = useState({id: null, title: 'Trạng thái'});
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [newData, setNewData] = useState([]);
  const idEmp = useSelector(state => state.Authen.data);
  const isFocused = useIsFocused();
  useEffect(() => {
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
    // setLoad(!load)
    return () => {};
  }, [load, isFocused]);

  const listData = data?.filter(item => item.createdBy === idEmp?.user?.userId);

  const UV = listData?.map(item =>
    item.applicants_applied.reduce((a, b) => ({...a, data: b}), {}),
  );

  //console.log(item?.applicants_applied,">>>");

  const renderItem = ({item}) => (
    <View style={[styles.viewFL, styleHinder]}>

      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => navigation.navigate('DetailUV', {item, type: 'epl'})}>
        <Image
          source={
            item?.data?.avatar ? {uri: item?.data?.avatar} : images.avatar
          }
          style={styles.avatar}
        />
        <View>
          <Text style={styles.nameUV}>{item?.data?.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: scale(5), marginLeft: scale(5)}}>
              <Text style={[styles.textitem, {color: '#000000'}]}>Vị trí:</Text>
            </View>
            <Text style={styles.textitem}>{item?.data?.positions}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.contener}>
      <HeaderStyle type="filter" Title="Ứng viên đã ứng tuyển" />
      {/* main */}
      <View style={styles.main}>
        {UV.length === 0 ? (
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
          <FlatList
            data={UV}
            renderItem={renderItem}
            keyExtractor={item => item.data?.positions}
            ListFooterComponent={() => (
              <View style={{paddingBottom: scale(50)}} />
            )}
            //   onRowDidOpen={onRowDidOpen}
          />
        )}
      </View>
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
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    marginLeft: scale(5),
  },
  LikeIcon: {
    margin: scale(18),
  },
  textitem: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(18),
    marginLeft: scale(8),
    marginTop: scale(10),
    color: '#307df1',
  },
  nameUV: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(21),
    color: '#307DF1',
    marginLeft: scale(10),
    marginTop: scale(10),
  },
  hinder: {
    width: scale(142),
    height: scale(144),

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
    height: scale(36),
    flexDirection: 'row',
    backgroundColor: '#307DF1',
    borderRadius: scale(30),
    marginTop: scale(10),
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
