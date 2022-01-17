import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {TabView, TabBar} from 'react-native-tab-view';
import {ScrollView} from 'react-native-gesture-handler';
import fonts from '@constant/fonts';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import images from '../../../constant/images';
import InfomationScreen from '../../freelancer/profile/InfomationScreen';
import DesiredJobScreen from '../../freelancer/profile/DesiredJobScreen';
import SkillPersonalScreen from '../../freelancer/profile/SkillPersonalScreen';
import ExperienceScreen from '../../freelancer/profile/ExperienceScreen';
import WorkSessionScreen from '../../freelancer/profile/WorkSessionScreen';
import colors from '../../../constant/colors';
import Header from '../../../components/title/Header';
import TitleBasic from '../../../components/title/TitleBasic';
import FooterButton from '../../../components/FooterButton';

export default function DetailUV({route}) {
  const {id} = route.params;
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({name: null});

  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/users/${id}`,
    };

    axios(config)
      .then(function (response) {
        setUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        return <InfomationScreen item={user} type="epl" />;
      case 'job':
        return <DesiredJobScreen item={user} type="epl" />;
      case 'skill':
        return <SkillPersonalScreen data={user} type="epl" />;
      case 'exp':
        return <ExperienceScreen data={user} type="epl" />;
      case 'work':
        return <WorkSessionScreen item={user} type="epl" />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <View style={styles.TabBar}>
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={styles.blue}
        style={styles.white}
        tabStyle={styles.width210}
        inactiveColor={colors.GRAY}
        activeColor={colors.BLUE}
        renderLabel={({route, color}) => (
          <View style={styles.align}>
            <Text style={styles.title(color)}>{route.title}</Text>
          </View>
        )}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <TitleBasic title="hồ sơ" />

      <View style={styles.content}>
        <View style={styles.center}>
          <Image
            style={styles.avatar}
            source={
              user?.avatar === '/uploads/example.jpeg'
                ? images.avatar
                : user?.avatar === undefined
                ? images.avatar
                : user?.avatar === null
                ? images.avatar
                : {uri: user?.avatar}
            }
          />
          <Text style={styles.txtAvatar}>{user?.name}</Text>
        </View>
        <View>
          {/* <Text style={styles.txtProgress}>
              Mức độ hoàn thiện hồ sơ: <Text style={styles.percent}>50%</Text>
            </Text> */}
          {/* <Progress.Bar
              progress={1}
              width={scale(305)}
              height={scale(5)}
              unfilledColor="#808080"
              style={{marginBottom: scale(30)}}
            /> */}
          <View style={styles.tab}>
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              onIndexChange={handleIndexChange}
            />
          </View>
        </View>
      </View>
      <FooterButton
        phone={() => {
          const phones = user?.phone;
          if (phones) {
            let phoneNumber = '';

            if (Platform.OS === 'android') {
              phoneNumber = `tel:${phones}`;
            } else {
              phoneNumber = `telprompt:${phones}`;
            }

            Linking.openURL(phoneNumber).catch(e =>
              console.error('Errorr: ', e),
            );
          } else {
            alert("Client doesn't have a phone number!");
          }
        }}
        email_uv={user?.email}
        // vitri={item.data.positions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  avatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(200),
  },
  txtAvatar: {
    fontSize: scale(20),
    fontFamily: fonts.BOLD,
    marginTop: scale(10),
    color: colors.BLACK,
    marginBottom: scale(30),
  },
  txtProgress: {
    fontSize: scale(14),
    color: colors.BLACK,
    marginBottom: scale(20),
    fontFamily: fonts.NORMAL,
  },
  tab: {height: scale(700)},
  percent: {color: colors.BLUE},
  content: {padding: scale(20)},
  title: color => ({
    color,
    fontSize: scale(14),
    lineHeight: scale(18),
    fontFamily: fonts.BOLD,
  }),
  align: {alignItems: 'center'},
  width210: {width: scale(210)},
  blue: {backgroundColor: colors.BLUE},
  white: {backgroundColor: colors.LIGHT_WHITE},
  center: {alignItems: 'center'},
});
