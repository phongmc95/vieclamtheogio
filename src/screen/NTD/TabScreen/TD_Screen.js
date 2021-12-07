import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Dimensions,
  Alert, StatusBar,
} from "react-native";
import {scale} from 'react-native-size-matters';
import {FAB} from 'react-native-paper';
import {
  DeleteICon,
  LikeIcon,
  HsIcon,
  LocalIcon,
  ViewIcon,
  EyeIconPass,
} from '../../../../assets/icon';
import {TabView, TabBar} from 'react-native-tab-view';
import HeaderStyle from '../../../components/HeaderStyle';
import colors from '../../../constant/colors';
import {ButtonItemLuu} from '../../../components/Button/ButtonItem';
import fonts from '../../../constant/fonts';
import FloatActionButton from '../../../components/FloatActionButton';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
const TD_Screen = ({navigation}) => {
  const isFocused = useIsFocused();
  const idEmp = useSelector(state => state.Authen.data);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        setData(response.data.jobs);
        data
          ? setNewData(
            data?.filter(item => item.createdBy === idEmp?.user?.userId),
          )
          : [];
      })
      .catch(function (error) {
        console.log(error);
      });
    // setLoad(!load)
    return () => {};
  }, [load,isFocused,newData]);

  const alertDelete = item =>
    Alert.alert('Thông Báo', 'Bạn có muốn xóa tin này không ?', [
      {
        text: 'Không',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Có', onPress: () => handleDelete(item)},
    ]);
  const handleDelete = item => {
    const url = `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/${item._id}`;
    axios
      .delete(url)
      .then(res => {
        const data = data.filter(i => i._id !== item._id);
        setData({data});
      })
      .catch(err => {
        console.log(err);
      });
    setLoad(!load);
  };
  const listData = data?.filter(item => item.createdBy === idEmp?.user?.userId);
  const renderItem = ({item}) => (
    <View style={styles.ViewFlatlist}>
      <View style={styles.viewRow}>
        <Text style={styles.TextTitle}>{item.job_posting_position}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            alertDelete(item);
            console.log('Delete');
          }}>
          <DeleteICon />
        </TouchableOpacity>
      </View>

      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Thời gian</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>
          {item.posting_date}
        </Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Ngày ứng tuyển</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.last_date}</Text>
      </View>

      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Quản lí</Text>
        <Text style={styles.TextR}>{'Còn Hạn'}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{margin: scale(5)}}
          onPress={() => navigation.navigate('GiaiPhap')}>
          <ButtonItemLuu nameBTN="Giải pháp" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: scale(5)}}
          onPress={() => navigation.navigate('SuaTin', {item})}>
          <ButtonItemLuu nameBTN="Sửa" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.contener}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <View style={{backgroundColor: '#FFFFFF'}}>
        <HeaderStyle type="nomal" Title="Tuyển dụng" />
      </View>
      <View style={styles.main}>
        <FlatList
          data={listData}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <View style={{marginBottom: scale(170)}} />
          )}
        />
      </View>

      <FloatActionButton onPress={() => navigation.navigate('DangTin')} />
    </View>
  );
};

export default TD_Screen;

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
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  fab: {
    position: 'absolute',
    marginHorizontal: 16,
    right: 0,
    bottom: 90,
    width: 64,
    height: 64,
    backgroundColor: '#307DF1',
    borderRadius: 50,
    alignItems: 'center',
  },
  ViewFlatlist: {
    width: scale(320),
    paddingVertical: scale(10),
    borderWidth: scale(0.4),
    borderRadius: scale(20),
    borderColor: '#307DF1',
    backgroundColor: 'white',
    margin: scale(5),
  },
  TextTitle: {
    fontWeight: '500',
    fontSize: scale(16),
    color: '#307DF1',
    marginLeft: scale(10),
    marginTop: scale(10),
    fontFamily: fonts.NORMAL,
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
    fontFamily: fonts.NORMAL,
  },
  TextR: {
    fontWeight: '400',
    fontSize: scale(13),
    color: '#307DF1',
    marginRight: scale(10),
    fontFamily: fonts.NORMAL,
  },
  main: {
    alignItems: 'center',
  },
  delete: {
    marginRight: scale(10),
    marginTop: scale(10),
  },
  avatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(50),
    marginLeft: scale(5),
  },
  LikeIcon: {
    margin: scale(18),
  },
  textitem: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(12),
    marginTop: scale(3),
  },
  indicator: {
    backgroundColor: '#1ABC9C',
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
    width: 120,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.BOLD,
    margin: 8,
  },
});
