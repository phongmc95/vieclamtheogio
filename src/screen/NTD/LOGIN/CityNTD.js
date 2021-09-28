import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import City_NTD from '../../../base/API/apiNTD/City_NTD';
import {useNavigation} from '@react-navigation/native';
const CityNTD = () => {
  const [City, setCity] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const params = {};
        const response = await City_NTD.getAll();

        setCity(response.data.tinhthanh);
        setFilterData(response.data.tinhthanh);
        console.log(City);
      } catch (error) {
        console.log('Call lỗi rồi đại ca ơi!' + error);
      }
    };
    fetchCity();
    return () => {};
  }, []);
  const SearchText = text => {
    if (text) {
      const newData = filterData.filter(item => {
        const itemdata = item.cit_name
          ? item.cit_name.toUpperCase()
          : ''.toUpperCase();
        const textdata = text.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
      setCity(newData);
      setSearch(text);
    } else {
      setCity(filterData);
      setSearch(text);
    }
  };
  return (
    <View style={styles.contener}>
      <Text style={styles.title}>TỈNH/ THÀNH PHỐ</Text>
      <View style={[styles.boxInput, {marginTop: scale(20)}]}>
        <TextInput
          placeholder="Nhập để tìm kiếm"
          style={styles.textInput}
          value={search}
          onChangeText={text => SearchText(text)}
        />
      </View>
      <FlatList
        data={City}
        keyExtractor={item => item.cit_id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SignInNTD', {item})}>
            <View style={styles.box}>
              <Text style={styles.text2}>{item.cit_name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CityNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: scale(20),
    textAlign: 'center',
    color: '#307DF1',
    marginTop: scale(20),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',

    margin: scale(5),
    borderRadius: scale(30),
    justifyContent: 'center',
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(15),
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
