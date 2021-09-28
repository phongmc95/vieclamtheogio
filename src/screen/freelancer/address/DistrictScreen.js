import axios from 'axios';
import { stringify } from 'query-string';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import jobs from '../../../data/Jobs';

export default function DistrictScreen({route, navigation}) {
  const {cityid, screen} = route.params;
  const [districtList, setDistrictList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  console.log(districtList);
  useEffect(() => {
    const fetchDistrict = async () => {
      var data = new FormData();
      data.append('id_tt', cityid);

      var config = {
        method: 'post',
        url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/p_district.php',
        data: data,
      };

      axios(config)
        .then(function (response) {
          setDistrictList(response.data.data.quanhuyen);
          setFilterData(response.data.data.quanhuyen);
          // console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchDistrict();
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
      setDistrictList(newData);
      setSearch(text);
    } else {
      setDistrictList(filterData);
      setSearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>quận huyện</Text>
        <TextInput
          value={search}
          placeholder="Nhập để tìm kiếm"
          style={styles.search}
          onChangeText={text => SearchText(text)}
        />
      </View>
      <FlatList
        data={districtList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: scale(10),
              paddingHorizontal: scale(10),
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screen, {
                  nameDistrict: item.cit_name,
                  idDistrict: item.cit_id,
                })
              }>
              <Text style={{fontSize: scale(18), color: '#404040'}}>
                {item.cit_name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
