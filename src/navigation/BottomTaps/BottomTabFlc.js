import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import {HomeICON, UVICON, ChatICON, ProfileICON} from '@assets/icon';
import HomeScreen from '../../screen/freelancer/HomeScreen';
import ProfileScreen from '../../screen/freelancer/ProfileScreen';
import ManageFlc from '../../screen/freelancer/ManageFlc';
import {isIos} from '../../Utils/CheckDevice';
import JobPass from '../../screen/freelancer/job/JobPass';
import {NTDICON} from '../../../assets/icon';

const Tab = createBottomTabNavigator();
const BottomTabFlc = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          height: scale(60),
        },
        style: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          height: isIos ? scale(80) : scale(60),
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.viewIcon}>
              <View
                style={
                  focused
                    ? [
                        styles.viewIconTab,
                        {
                          marginTop: scale(-50),
                          width: scale(60),
                          height: scale(60),
                        },
                      ]
                    : styles.viewIconTab
                }>
                <HomeICON
                  width={focused ? 30 : 21}
                  height={focused ? 28 : 19}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>

              <Text>
                {focused ? <Text style={styles.blue}>Trang chủ</Text> : null}
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileFLC"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.viewIcon}>
              <View
                style={
                  focused
                    ? [
                        styles.viewIconTab,
                        {
                          marginTop: scale(-50),
                          width: scale(60),
                          height: scale(60),
                        },
                      ]
                    : styles.viewIconTab
                }>
                <ProfileICON
                  width={focused ? 30 : 21}
                  height={focused ? 28 : 19}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>

              <Text>
                {focused ? <Text style={styles.blue}>Hồ sơ</Text> : null}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Việc làm ứng tuyển"
        component={JobPass}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.viewIcon}>
              <View
                style={
                  focused
                    ? [
                        styles.viewIconTab,
                        {
                          marginTop: scale(-50),
                          width: scale(60),
                          height: scale(60),
                        },
                      ]
                    : styles.viewIconTab
                }>
                <NTDICON
                  width={focused ? 30 : 21}
                  height={focused ? 28 : 19}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>

              <Text>
                {focused ? (
                  <Text style={styles.blue}>Ứng tuyển</Text>
                ) : null}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ManageFlc"
        component={ManageFlc}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.viewIcon}>
              <View
                style={
                  focused
                    ? [
                        styles.viewIconTab,
                        {
                          marginTop: scale(-50),
                          width: scale(60),
                          height: scale(60),
                        },
                      ]
                    : styles.viewIconTab
                }>
                <UVICON
                  width={focused ? 30 : 21}
                  height={focused ? 28 : 19}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>

              <Text>
                {focused ? <Text style={styles.blue}>Quản lý</Text> : null}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabFlc;

const styles = StyleSheet.create({
  viewIconTab: {
    width: scale(40),
    height: scale(40),
    backgroundColor: '#EBEBEB',
    borderRadius: scale(50),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewIcon: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  blue: {color: '#307DF1'},
});
