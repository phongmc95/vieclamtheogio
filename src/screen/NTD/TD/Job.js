import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, Selecter, DateIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';

const Job = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {}, []);
  const SearchText = text => {
    if (text) {
      const newData = filter.filter(item => {
        const itemdata = item.jc_name
          ? item.jc_name.toUpperCase()
          : ''.toUpperCase();
        const textdata = text.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(filter);
      setSearch(text);
    }
  };

  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Ngành ghề</Text>
      </View>

      <View style={styles.boxInput}>
        <TextInput
          placeholder="Nhập để tìm kiếm"
          style={styles.textInput}
          value={search}
          onChangeText={text => SearchText(text)}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.jc_id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DangTin', {item})}>
            <View style={styles.box}>
              <Text style={styles.text2}>{item.jc_name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Job;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: scale(20),
    fontFamily: fonts.BOLD,
    marginLeft: scale(20),
    textTransform: 'uppercase',
  },
  goback: {
    marginLeft: scale(10),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
    marginLeft: scale(15),
    backgroundColor: colors.WHITE,
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(5),
    fontFamily: fonts.ITALIC,
  },
  text2: {
    fontSize: scale(16),
    lineHeight: scale(28),
    color: '#404040',
    margin: scale(15),
    marginLeft: scale(40),
  },
  box: {
    borderColor: '#969696',
    borderBottomWidth: scale(1),
    width: scale(355),
  },
});
