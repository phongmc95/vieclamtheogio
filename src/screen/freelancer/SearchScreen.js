import fonts from '@constant/fonts';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleSearch from '../../components/title/TitleSearch';
import icons from '../../constant/icons';
import {jobs} from '../../data/Jobs';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constant/colors';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TitleSearch title="Tìm kiếm" />
      <View style={styles.viewSearch}>
        <View style={styles.row}>
          <Text style={styles.txtSearch}>Tìm kiếm gần đây</Text>
          <Image style={styles} source={icons.trash_black} />
        </View>
        {jobs.map(item => (
          <Text style={styles.title}>{item.title}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  row: {flexDirection: 'row'},
  title: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    color: '#404040',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    paddingBottom: scale(5),
    marginBottom: scale(5),
  },
  txtSearch: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    color: '#404040',
    width: '90%',
  },
  viewSearch: {paddingHorizontal: scale(20), marginTop: scale(20)},
});
