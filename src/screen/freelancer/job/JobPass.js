import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import {SwipeListView} from 'react-native-swipe-list-view';
import listJob from '@data/ListJob';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';
import Header from '../../../components/title/Header';

export default function JobPass() {
  const renderItem = ({item}) => (
    <View style={styles.boxJob}>
      <View style={styles.row}>
        <Image style={styles.logoJob} source={icons.logoHCI} />
        <View style={styles.viewCompany}>
          <Text style={styles.txtTitleJob}>{item.title}</Text>
          <Text style={styles.txtAddress}>{item.company}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.type}>
          <Image style={styles.iconJob} source={icons.bag} />
          <Text style={styles.txtStatus}>{item.type}</Text>
        </View>
        <View style={styles.salary}>
          <Image style={styles.iconJob} source={icons.money} />
          <Text style={styles.txtStatus}>{item.salary}</Text>
        </View>
      </View>
      <View style={styles.salary}>
        <Image style={styles.iconJob} source={icons.local} />
        <Text style={styles.txtStatus}>{item.add}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="việc làm đã ứng tuyển" />
      <SwipeListView
        data={listJob}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderHiddenItem={() => (
          <View style={styles.swiper}>
            <Text style={styles.contact}>Liên hệ</Text>
          </View>
        )}
        rightOpenValue={-150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  info: {flexDirection: 'row', marginTop: scale(10)},
  type: {flexDirection: 'row', marginTop: scale(5), width: '60%'},
  salary: {flexDirection: 'row', marginTop: scale(5)},
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(20),
    width: scale(335),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    marginVertical: scale(10),
    marginLeft: scale(8),
  },
  logoJob: {
    width: scale(45),
    height: scale(45),
    marginTop: scale(5),
  },
  txtTitleJob: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.BOLD,
    flexWrap: 'wrap',
  },
  txtAddress: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    marginTop: scale(5),
    fontFamily: fonts.NORMAL,
  },
  iconHeart: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(5),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  row: {flexDirection: 'row'},
  viewCompany: {
    marginHorizontal: scale(8),
    width: '90%',
  },
  swiper: {
    width: scale(115),
    height: scale(135),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '65%',
    backgroundColor: '#307df1',
    marginTop: scale(10),
    borderRadius: scale(20),
  },
  contact: {color: '#fff', fontFamily: fonts.NORMAL, fontSize: scale(16)},
});
