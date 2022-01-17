import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import Home from '../../screen/NTD/TabScreen/Home';
import TD_Screen from '../../screen/NTD/TabScreen/TD_Screen';
import UV_Screen from '../../screen/NTD/TabScreen/UV_Screen';
import Chat_Screen from '../../screen/NTD/TabScreen/Chat_Screen';
import Manage_Screen from '../../screen/NTD/TabScreen/Manage_Screen';
import {
  HomeICON,
  NTDICON,
  UVICON,
  ChatICON,
  ProfileICON,
  SearchTabIcon,
  HsIcon,
} from '../../../assets/icon';
import {isIos} from '../../Utils/CheckDevice';
import SearchUser from '../../screen/NTD/TabScreen/SearchUser';

const Tab = createBottomTabNavigator();
const BottomTapsNTD = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeEPL"
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
        name="HomeEPL"
        component={Home}
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
                  width={focused ? 28 : 20}
                  height={focused ? 28 : 20}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>

              <Text>
                {focused ? <Text style={styles.blue}>Trang chủ</Text> : <></>}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TD_Screen"
        component={TD_Screen}
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
                  width={focused ? 28 : 20}
                  height={focused ? 28 : 20}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? <Text style={styles.blue}>Tuyển dụng</Text> : <></>}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search_User"
        component={SearchUser}
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
                  width={focused ? 28 : 20}
                  height={focused ? 28 : 20}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? <Text style={styles.blue}>Ứng viên</Text> : <></>}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UV_Screen"
        component={UV_Screen}
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
                  width={focused ? 28 : 20}
                  height={focused ? 28 : 20}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? <Text style={styles.blue}>Ứng tuyển</Text> : <></>}
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Manage_Screen}
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
                <HsIcon
                  width={focused ? 30 : 20}
                  height={focused ? 30 : 20}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? <Text style={styles.blue}>Quản lý</Text> : <></>}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTapsNTD;

const styles = StyleSheet.create({
  viewIconTab: {
    width: scale(40),
    height: scale(40),
    backgroundColor: '#EBEBEB',
    borderRadius: scale(50),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(10),
  },
  viewIcon: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  blue: {color: '#307DF1'},
});
