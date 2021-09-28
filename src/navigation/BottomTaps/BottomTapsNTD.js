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
} from '../../../assets/icon';

const Tab = createBottomTabNavigator();
const BottomTapsNTD = () => {
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
          height: scale(60),
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
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
                  width={21}
                  height={19}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>

              <Text>
                {focused ? (
                  <Text style={{color: '#307DF1'}}>Trang chủ</Text>
                ) : (
                  <></>
                )}
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
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
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
                  width={28}
                  height={28}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? (
                  <Text style={{color: '#307DF1'}}>Tuyển dụng</Text>
                ) : (
                  <></>
                )}
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
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
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
                  width={18}
                  height={22}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? (
                  <Text style={{color: '#307DF1'}}>Ứng viên</Text>
                ) : (
                  <></>
                )}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chat_Screen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
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
                <ChatICON
                  width={20}
                  height={19}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? (
                  <Text style={{color: '#307DF1'}}>Trò chuyện</Text>
                ) : (
                  <></>
                )}
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
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
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
                  width={20}
                  height={20}
                  color={focused ? '#307DF1' : 'gray'}
                />
              </View>
              <Text>
                {focused ? (
                  <Text style={{color: '#307DF1'}}>Quản lý</Text>
                ) : (
                  <></>
                )}
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
    backgroundColor: '#C4C4C4',
    borderRadius: scale(50),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(10),
  },
});
