import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {BackIcon, LikeIcon, NotificationICON} from '../../assets/icon';
import {isIos} from '../Utils/CheckDevice';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {FilterIcon} from '../../assets/icon/index';
const HeaderStyle = ({Logo, Title, type}) => {
  const navigation = useNavigation();
  return (
    <View>
      {type == 'home' ? (
        <View style={styles.StatusBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/img/logoVin.png')}
              style={styles.logo}
            />

            <Text style={styles.NameNTD}>{Title}</Text>
          </View>
          <TouchableOpacity style={styles.Notification}>
            <NotificationICON />
          </TouchableOpacity>
        </View>
      ) : type == 'nomal' ? (
        <View style={styles.StatusBar}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: scale(15),
            }}>
            <TouchableOpacity
              style={{paddingHorizontal: scale(10)}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
            <Text style={styles.NameNTD}>{Title}</Text>
          </View>
          <View />
        </View>
      ) : type == 'filter' ? (
        <View style={styles.StatusBar}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: scale(15),
            }}>
            <TouchableOpacity
              style={{paddingHorizontal: scale(10)}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
            <Text style={styles.NameNTD}>{Title}</Text>
          </View>
          <TouchableOpacity style={{padding: scale(10)}}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default HeaderStyle;

const styles = StyleSheet.create({
  StatusBar: {
    backgroundColor: '#307DF1',
    height: isIos ? scale(100) : scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    flexDirection: 'row',

    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  logo: {
    height: scale(40),
    width: scale(40),
    margin: scale(10),
    marginLeft: scale(10),
    borderRadius: scale(20),
  },
  NameNTD: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
  },
  Notification: {
    backgroundColor: 'white',
    width: scale(35),
    height: scale(35),

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(50),
    margin: scale(10),
  },
});
