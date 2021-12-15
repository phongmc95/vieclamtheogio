import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {BackIcon, LikeIcon, NotificationICON} from '../../assets/icon';
import {isIos} from '../Utils/CheckDevice';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {FilterIcon} from '../../assets/icon/index';
import fonts from '../constant/fonts';
import logobase from '../../assets/img/logoVin.png';
const HeaderStyle = ({Logo, Title, type, uri}) => {
  const navigation = useNavigation();
  return (
    <View>
      {type == 'home' ? (
        <View style={styles.StatusBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={!uri ? logobase : {uri: uri}} style={styles.logo} />

            <Text style={styles.NameNTD}>{Title}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationS')}
            style={{
              backgroundColor: 'white',
              marginBottom: scale(15),
              marginRight: scale(10),
              borderRadius: scale(20),
              padding: scale(3),
            }}>
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
            <Text style={styles.NameNTD}>{Title}</Text>
          </View>
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
    borderColor: 'white',
    borderWidth: 1,
  },
  NameNTD: {
    color: 'white',
    fontSize: scale(16),
    textTransform: 'uppercase',
    fontFamily: fonts.BOLD,
    marginLeft: scale(15),
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
