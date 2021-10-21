import React, {useState} from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';

export default function ProfileScreen() {
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
            <Image style={styles.avatar} source={images.avatar} />
            <Text style={styles.txtAvatar}>Hoàng Phong</Text>
          </View>
          <View>
            <Text style={styles.txtProgress}>
              Mức độ hoàn thiện hồ sơ:{' '}
              <Text style={{color: '#307df1'}}>50%</Text>
            </Text>
            <Progress.Bar
              progress={0.5}
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
    borderRadius: scale(200),
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
