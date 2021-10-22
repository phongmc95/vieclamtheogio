import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  BackIcon,
  LikeIcon,
  HsIcon,
  EyeIcon,
  LocalIcon,
} from '../../../../assets/icon';
import {Modal} from 'react-native-paper';
import {TabView, TabBar} from 'react-native-tab-view';
import InfoUV from './InfoUV';
import DesiredJobUV from './DesiredJobUV';
import SkillUV from './SkillUV';
import ExperienceUV from './ExperienceUV';
import WorkSessionUV from './WorkSessionUV';
import ButtonStyle from '../../../components/ButtonStyle';
const DetailUV = ({navigation, route}) => {
  const {item} = route.params;
  const [index, setIndex] = useState(0);

  const handleIndexChange = indexTab => {
    setIndex(indexTab);
  };

  const [routes] = React.useState([
    {key: 'info', title: 'THÔNG TIN LIÊN HỆ', type: 0},
    {key: 'job', title: 'CÔNG VIỆC MONG MUỐN', type: 1},
    {key: 'skill', title: 'KỸ NĂNG CÁ NHÂN', type: 2},
    {key: 'exp', title: 'KINH NGHIỆM LÀM VIỆC', type: 3},
    {key: 'work', title: 'BUỔI CÓ THỂ ĐI LÀM', type: 4},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'info':
        return <InfoUV />;
      case 'job':
        return <DesiredJobUV />;
      case 'skill':
        return <SkillUV />;
      case 'exp':
        return <ExperienceUV />;
      case 'work':
        return <WorkSessionUV />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <View style={styles.TabBar}>
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={[{backgroundColor: '#307df1'}]}
        style={[{backgroundColor: '#FFFFFF'}]}
        tabStyle={{width: scale(210)}}
        inactiveColor={'#404040'}
        activeColor={'#307df1'}
        renderLabel={({route, color}) => (
          <View style={{alignItems: 'center'}}>
            <Text style={{color, fontSize: scale(16), lineHeight: scale(18)}}>
              {route.title}
            </Text>
          </View>
        )}
      />
    </View>
  );

  return (
    <View style={styles.contener}>
      <ScrollView style={{marginBottom: scale(0)}}>
        <View style={styles.StatusBar}>
          <View style={styles.viewRowBw}>
            <View style={{flexDirection: 'row', marginTop: scale(20)}}>
              <TouchableOpacity
                style={styles.goback}
                onPress={() => navigation.goBack()}>
                <BackIcon />
              </TouchableOpacity>
              <Text style={styles.title}>CHI TIẾT ỨNG VIÊN</Text>
            </View>
            <TouchableOpacity style={styles.btnlike}>
              <LikeIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.viewAvatar}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <Text style={styles.nameUV}>{item.nameUV}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: scale(13),
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: scale(5), marginLeft: scale(10)}}>
                <HsIcon color="white" />
              </View>
              <Text style={styles.textitem}>Mã hồ sơ:{item.maHs}</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: scale(15)}}>
              <View style={{marginRight: scale(5)}}>
                <EyeIcon color="white" />
              </View>
              <Text style={styles.textitem}>Lượt xem:{item.views}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: scale(20)}}>
            <View style={{marginRight: scale(5), marginLeft: scale(10)}}>
              <LocalIcon color="white" />
            </View>
            <Text style={styles.textitem}>{item.diaChi}</Text>
          </View>
        </View>

        <View style={{height: scale(700)}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={handleIndexChange}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(260),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
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
  btnlike: {margin: scale(20)},
  avatar: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
  },
  viewAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameUV: {
    fontSize: scale(20),
    fontWeight: '500',
    textAlign: 'center',

    color: 'white',
  },
  viewRowBw: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scale(30),
  },
  textitem: {
    fontWeight: '400',
    fontSize: scale(12),
    color: 'white',
  },
  Foodter: {
    backgroundColor: 'white',
    height: scale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
