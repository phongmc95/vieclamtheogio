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
} from 'react-native';
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
const TD_Screen = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      title: 'Bán thịt lợn',
      date: '20/02/2002-02/02/2020',
      date1: '12/12/2012',
      count: '5',
      manage: 'Còn hạn',
    },
    {
      id: 2,
      title: 'Bán rau',
      date: '20/02/2002-02/02/2020',
      date1: '12/12/2012',
      count: '5',
      manage: 'Còn hạn',
    },
    {
      id: 3,
      title: 'Bán đá',
      date: '20/02/2002-02/02/2020',
      date1: '12/12/2012',
      count: '5',
      manage: 'Còn hạn',
    },
    {
      id: 4,
      title: 'Bán cần',
      date: '20/02/2002-02/02/2020',
      date1: '12/12/2012',
      count: '5',
      manage: 'Còn hạn',
    },
  ];
  const DATA1 = [
    {
      id: 1,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',
      maHs: '12345',
      diaChi: 'Hà Nội',
      views: '999',
    },
    {
      id: 2,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',
      maHs: '12345',
      diaChi: 'Hà Nội',
      views: '999',
    },
    {
      id: 3,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',
      maHs: '12345',
      diaChi: 'Hà Nội',
      views: '999',
    },
    {
      id: 4,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',
      maHs: '12345',
      diaChi: 'Hà Nội',
      views: '999',
    },
    {
      id: 5,
      avatar:
        'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-hai.jpg',
      nameUV: 'Phong Lợn',
      nameJob: 'Thợ hồ',
      maHs: '12345',
      diaChi: 'Hà Nội',
      views: '999',
    },
  ];

  const FirstRoute = () => (
    <View style={styles.main}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={() => <View style={{marginBottom: scale(170)}} />}
      />
      <FAB
        style={styles.fab}
        small
        icon={() => (
          <Text style={{fontSize: scale(24), color: 'white'}}>+</Text>
        )}
        onPress={() => navigation.navigate('DangTin')}
        color="white"
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.main}>
      <FlatList
        data={DATA1}
        keyExtractor={item => item.id}
        renderItem={renderItemUV}
        ListFooterComponent={() => <View style={{marginBottom: scale(170)}} />}
      />
    </View>
  );
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;

      default:
        return null;
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.ViewFlatlist}>
      <View style={styles.viewRow}>
        <Text style={styles.TextTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.delete}>
          <DeleteICon />
        </TouchableOpacity>
      </View>

      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Thời gian</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.date}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Ngày ứng tuyển</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.date1}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Lượt ứng tuyển</Text>
        <Text style={[styles.TextR, {color: 'black'}]}>{item.count}</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={styles.TextL}>Quản lí</Text>
        <Text style={styles.TextR}>{item.manage}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{margin: scale(5)}}
          onPress={() => navigation.navigate('GiaiPhap')}>
          <ButtonItemLuu nameBTN="Giải pháp" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: scale(5)}}
          onPress={() => navigation.navigate('SuaTin')}>
          <ButtonItemLuu nameBTN="Sửa" />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItemUV = ({item}) => (
    <View style={[styles.ViewFlatlist]}>
      <View style={{padding: scale(5)}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('DetailUV', {item})}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View>
              <Text style={styles.TextTitle}>{item.nameUV}</Text>
              <Text
                style={[
                  styles.TextTitle,
                  {fontSize: scale(12), marginTop: scale(0)},
                ]}>
                {item.nameJob}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LikeIcon}>
            <LikeIcon />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: scale(13),
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: scale(5), marginLeft: scale(5)}}>
              <HsIcon color="#307DF1" />
            </View>
            <Text style={styles.textitem}>Mã hồ sơ:{item.maHs}</Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: scale(15)}}>
            <View style={{marginRight: scale(5)}}>
              <ViewIcon />
            </View>
            <Text style={styles.textitem}>Lượt xem:{item.views}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(20)}}>
          <View style={{marginRight: scale(5), marginLeft: scale(5)}}>
            <LocalIcon color="#307DF1" />
          </View>
          <Text style={styles.textitem}>{item.diaChi}</Text>
        </View>
      </View>
    </View>
  );
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'TIN ĐÃ ĐĂNG', type: 0},
    {key: 'second', title: 'ỨNG VIÊN THEO GIỜ', type: 1},
  ]);
  const handleIndexChange = indexTab => {
    setIndex(indexTab);
  };
  const renderTabBar = props => (
    <View style={styles.TabBar}>
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={[{backgroundColor: '#307df1'}]}
        style={[{backgroundColor: '#FFFFFF'}]}
        tabStyle={{width: scale(200)}}
        inactiveColor={'#404040'}
        activeColor={'#307df1'}
        renderLabel={({route, color}) => (
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color,
                fontSize: scale(16),
              }}>
              {route.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
  return (
    <View style={styles.contener}>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <HeaderStyle type="nomal" Title="Tuyển dụng" />
      </View>
      {/* main */}

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
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
