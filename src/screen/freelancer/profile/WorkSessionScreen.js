import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';
import {working_day} from '../../../data/Jobs';

export default function WorkSessionScreen({item}) {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={styles.bottom}>
        <Text style={styles.txtProgress}>{item.day}</Text>
        <View style={styles.row}>
          <Text style={styles.buttonM(item)}>Sáng</Text>
          <Text style={styles.buttonA(item)}>Chiều</Text>
          <Text style={styles.buttonE(item)}>Tối</Text>
        </View>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View>
        {working_day.map(item => (
          <View style={styles.bottom}>
            <Text style={styles.txtProgress}>{item.day}</Text>
            <View style={styles.row}>
              <Text style={styles.buttonM(item)}>Sáng</Text>
              <Text style={styles.buttonA(item)}>Chiều</Text>
              <Text style={styles.buttonE(item)}>Tối</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={{height: scale(600)}}>
      <TouchableOpacity onPress={() => navigation.navigate('UpdateWork')}>
        <Image style={styles.pen} source={icons.pen} />
      </TouchableOpacity>
      <FlatList
        data={item.working_day}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pen: {
    height: scale(20),
    width: scale(20),
    marginLeft: '90%',
    marginTop: scale(10),
  },
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontFamily: fonts.BOLD,
  },
  buttonM: item => ({
    fontSize: scale(16),
    color: item?.seasons?.morning === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.seasons?.morning === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    fontFamily: fonts.NORMAL,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  }),
  buttonA: item => ({
    fontSize: scale(16),
    color: item?.seasons?.afternoon === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.seasons?.afternoon === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    fontFamily: fonts.NORMAL,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  }),
  buttonE: item => ({
    fontSize: scale(16),
    color: item?.seasons?.evening === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.seasons?.evening === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    fontFamily: fonts.NORMAL,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  }),
  row: {flexDirection: 'row'},
  bottom: {marginBottom: scale(20)},
});
