import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';

export default function JobDesied({route, navigation}) {
  const [job, setJob] = useState([]);
  const {screen} = route.params;
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCity = async () => {
      var config = {
        method: 'get',
        url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/p_cate-tag.php',
      };

      axios(config)
        .then(function (response) {
          setJob(response.data.data.cate);
          setFilterData(response.data.data.cate);
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
        const itemdata = item.jc_name
          ? item.jc_name.toUpperCase()
          : ''.toUpperCase();
        const textdata = text.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
      setJob(newData);
      setSearch(text);
    } else {
      setJob(filterData);
      setSearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>ngành nghề mong muốn</Text>
        <TextInput
          value={search}
          placeholder="Nhập để tìm kiếm"
          style={styles.search}
          onChangeText={text => SearchText(text)}
        />
      </View>
      {job.map(item => (
        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: scale(10),
            paddingHorizontal: scale(10),
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(screen, {
                job_name: item.jc_name,
                job_id: item.jc_id,
              })
            }>
            <Text style={{fontSize: scale(18), color: '#404040'}}>
              {item.jc_name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
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
