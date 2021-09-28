import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../components/title/TitleBasic';
import images from '../../constant/images';
import * as Progress from 'react-native-progress';
import ExperienceScreen from './profile/ExperienceScreen';
import InfomationScreen from './profile/InfomationScreen';
import SkillPersonalScreen from './profile/SkillPersonalScreen';
import WorkSessionScreen from './profile/WorkSessionScreen';
import {TabView, TabBar} from 'react-native-tab-view';
import DesiredJobScreen from './profile/DesiredJobScreen';
import {ScrollView} from 'react-native-gesture-handler';
import icons from '../../constant/icons';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ProfileScreen() {
  const [index, setIndex] = useState(0);
  const [dataFlc, setDataFlc] = useState([]);
  const [percent, setPercent] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('')
  const token = useSelector(state => state.Token.data);
  // console.log(avatar)

  useEffect(() => {
    const fetchFlc = async () => {
      var data = new FormData();
      data.append('token', token);
      var config = {
        method: 'post',
        url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/uv_menubar_qltk.php',
        data: data,
      };

      axios(config)
        .then(function (response) {
          const info = response.data.data.thongtin_uv;
          const percent = response.data.data.hoanthien_hs_pt;
          setDataFlc(info);
          setPercent(parseInt(percent));
          setAvatar(info.map(item => item.uv_avatar));
          setUsername(info.map(item => item.uv_username))
          // console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchFlc()
    return () => {};
  }, []);

  const handleIndexChange = indexTab => {
    setIndex(indexTab);
  };

  const [routes, setRoutes] = useState([
    {key: 'info', title: 'THÔNG TIN LIÊN HỆ', type: 0},
    {key: 'job', title: 'CÔNG VIỆC MONG MUỐN', type: 1},
    {key: 'skill', title: 'KỸ NĂNG CÁ NHÂN', type: 2},
    {key: 'exp', title: 'KINH NGHIỆM LÀM VIỆC', type: 3},
    {key: 'work', title: 'BUỔI CÓ THỂ ĐI LÀM', type: 4},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'info':
        return <InfomationScreen />;
      case 'job':
        return <DesiredJobScreen />;
      case 'skill':
        return <SkillPersonalScreen />;
      case 'exp':
        return <ExperienceScreen />;
      case 'work':
        return <WorkSessionScreen />;
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
    <View style={styles.container}>
      <TitleBasic title="hồ sơ" />
      <ScrollView>
        <View style={{padding: scale(20)}}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.avatar} source={avatar ? {uri: String(avatar)} : images.avatar} />
            <Text style={styles.txtAvatar}>{username}</Text>
          </View>
          <View>
            <Text style={styles.txtProgress}>
              Mức độ hoàn thiện hồ sơ:{' '}
              <Text style={{color: '#307df1'}}>{percent}%</Text>
            </Text>
            <Progress.Bar
              progress={percent/100}
              width={scale(305)}
              height={scale(5)}
              unfilledColor="#808080"
              style={{marginBottom: scale(30)}}
            />
            <View style={{height: scale(700)}}>
              <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={handleIndexChange}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(50),
  },
  txtAvatar: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginTop: scale(10),
    color: '#404040',
    marginBottom: scale(30),

  },
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
    marginBottom: scale(20),
  },
});
