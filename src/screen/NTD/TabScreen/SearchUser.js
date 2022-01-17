import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HeaderSearch from '../../../components/HeaderSearch';
import {useNavigation, useRoute} from '@react-navigation/native';
import axiosClient from '../../../config/axios';
import Render from '../../../components/Render';
import EmptyData from '../../../components/EmptyData';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../../components/title/TitleBasic';
import {FilterMoreIcon} from '../../../../assets/icon';
function findByTemplate(allPersons, template) {
  return allPersons.filter(person => {
    return Object.keys(template).every(
      propertyName => person[propertyName] === template[propertyName],
    );
  });
}
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
const SearchUser = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const [textSearch, setTextSearch] = useState('');
  const [Data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAPi = async () => {
    let url = 'https://fpt-jobs-api.herokuapp.com/api/v1/users';
    try {
      const res = await axiosClient.get(url);
      setRefreshing(false);
      setData(res.users);
    } catch (error) {
      setRefreshing(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getAPi();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data, params, textSearch]);

  const onRefresh = () => {
    setTextSearch('');
    setRefreshing(true);
    getAPi();
  };

  useEffect(() => {
    return () => {};
  }, [textSearch, Data, params]);
  return (
    <View style={styles.container}>
      <HeaderSearch onPress={() => navigation.navigate('Filters')} />
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={
            !params
              ? Data
              : findByTemplate(
                  Data,
                  Object.filter(params, ps => ps !== null),
                )
          }
          renderItem={({item}) => (
            <Render
              item={item}
              onPress={() =>
                navigation.navigate('DetailUV', {id: item._id, type: 'epl'})
              }
            />
          )}
          ListEmptyComponent={() => (
            <EmptyData content="Không tìm thấy ứng viên" />
          )}
          ListFooterComponent={() => (
            <View style={{marginBottom: scale(120)}} />
          )}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
});

export default SearchUser;
