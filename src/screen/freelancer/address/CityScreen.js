import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import jobs from '../../../data/Jobs';

export default function CityScreen({route, navigation}) {
  const [city, setCity] = useState([]);
  const {screen} = route.params;
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCity = async () => {
      var config = {
        method: 'get',
        url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/p_pro.php',
      };

      axios(config)
        .then(function (response) {
          setCity(response.data.data.tinhthanh);
          setFilterData(response.data.data.tinhthanh);
        })
        .catch(function (error) {
          console.log(error);
        });
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
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Tỉnh/ thành phố</Text>
        <TextInput
          value={search}
          onChangeText={text => SearchText(text)}
          placeholder="Nhập để tìm kiếm"
          style={styles.search}
        />
      </View>
      <ScrollView>
        {city.map(item => (
          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: scale(10),
              paddingHorizontal: scale(10),
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screen, {
                  item,
                })
              }>
              <Text style={{fontSize: scale(18), color: '#404040'}}>
                {item.cit_name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#307df1',
    textTransform: 'uppercase',
    marginTop: scale(20),
  },
  search: {
    fontSize: scale(16),
    width: scale(315),
    height: scale(40),
    borderRadius: scale(20),
    borderWidth: 1,
    backgroundColor: '#fff',
    fontStyle: 'italic',
    borderColor: '#307DF1',
    paddingLeft: scale(20),
    marginVertical: scale(20),
  },
});
