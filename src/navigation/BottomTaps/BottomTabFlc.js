import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import {HomeICON, UVICON, ChatICON, ProfileICON} from '@assets/icon';
import HomeScreen from '../../screen/freelancer/HomeScreen';
import ProfileScreen from '../../screen/freelancer/ProfileScreen';
import ChatScreen from '../../screen/freelancer/ChatScreen';
import ManageFlc from '../../screen/freelancer/ManageFlc';

const Tab = createBottomTabNavigator();
const BottomTabFlc = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabBarStyle: {
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
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
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
                width={focused ? scale(30) : scale(20)}
                height={focused ? scale(30) : scale(20)}
                color={focused ? '#307DF1' : 'gray'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileFLC"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
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
                width={focused ? scale(30) : scale(20)}
                height={focused ? scale(30) : scale(20)}
                color={focused ? '#307DF1' : 'gray'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
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
                width={focused ? scale(30) : scale(20)}
                height={focused ? scale(30) : scale(20)}
                color={focused ? '#307DF1' : 'gray'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ManageFlc"
        component={ManageFlc}
        options={{
          tabBarIcon: ({focused}) => (
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
                width={focused ? scale(30) : scale(20)}
                height={focused ? scale(30) : scale(20)}
                color={focused ? '#307DF1' : 'gray'}
              />
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
    backgroundColor: '#C4C4C4',
    borderRadius: scale(50),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
