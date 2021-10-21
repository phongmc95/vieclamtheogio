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
import {BackIcon, Selecter, DateIcon} from '@assets/icon';
import TD_API from '@base/API/apiNTD/TD_API';
import {ButtonDAY, ButtonDAY2} from '@components/Button/ButtonItem';

const Job = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const callApi = async () => {
      try {
        const params = {};
        const response = await TD_API.Job(params);
        setData(response.data.cate);
        setFilter(response.data.cate);
        console.log(response);
      } catch (error) {
        console.log('Tuan oi loi roi' + error);
      }
    };
    callApi();
  }, []);
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
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  goback: {
    marginLeft: scale(10),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
    justifyContent: 'center',
    marginLeft: scale(15),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(5),
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
