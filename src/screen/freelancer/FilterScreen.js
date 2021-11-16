import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import {jobs} from '@data/Jobs';
import search from '@data/Search';
import fonts from '@constant/fonts';
import colors from '../../constant/colors';

export default function FilterScreen() {
  const [check, setCheck] = useState(false);
  return (
    <SafeAreaView>
      <TitleBasic title="Tìm kiếm nâng cao" />
      <View style={styles.content}>
        {search.map(item => (
          <View style={styles.viewSearch}>
            <Image style={styles.imgSearch} source={item.img} />
            <Text style={styles.titleSearch}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.viewTextSearch}>
        <TextInput placeholder="Nhập để tìm kiếm" style={styles.inputSearch} />

        {jobs.map(item => (
          <View style={styles.list}>
            <TouchableOpacity onPress={() => setCheck(!check)}>
              <Image
                style={{marginTop: scale(4.5)}}
                source={!check ? icons.check : icons.checked}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: '100%',
    height: scale(255),
    flexWrap: 'wrap',
    marginTop: scale(33),
    paddingLeft: scale(10),
  },
  viewSearch: {
    width: scale(110),
    height: scale(110),
    alignItems: 'center',
  },
  imgSearch: {height: scale(40), width: scale(40)},
  titleSearch: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '80%',
    marginTop: scale(5),
    fontSize: scale(16),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  viewTextSearch: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: colors.LIGHT_WHITE,
  },
  inputSearch: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    fontStyle: 'italic',
    margin: scale(20),
    width: '90%',
    borderWidth: 1,
    borderColor: '#307df1',
    overflow: 'hidden',
    borderRadius: scale(30),
    paddingVertical: scale(8),
    paddingLeft: scale(20),
  },
  list: {
    marginTop: scale(5),
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: scale(18),
    color: '#404040',
    marginLeft: scale(10),
    fontFamily: fonts.NORMAL,
  },
});
