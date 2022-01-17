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
  const [dataSearch, setDataSearch] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAPi = async () => {
    let url = 'https://fpt-jobs-api.herokuapp.com/api/v1/users';
    try {
      const res = await axiosClient.get(url);
      setRefreshing(false);

      if (params) {
        if (params?.search) {
          setTextSearch(params?.search);
          const filter = res.users.filter(item => {
            return item.industry
              .trim()
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd')
              .replace(/Đ/g, 'D')
              .match(
                textSearch
                  .toString()
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/đ/g, 'd')
                  .replace(/Đ/g, 'D'),
              );
          });
          setDataSearch(filter);
        } else {
          const filter = findByTemplate(
            res.users,
            Object.filter(params, ps => ps !== null),
          );
          setDataSearch(filter);
        }
      } else {
        setData(res.users);
      }
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
      <TitleBasic
        title="Tìm kiếm"
        ic={<FilterMoreIcon />}
        onPress={() => navigation.navigate('Filters')}
      />
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={!params ? Data : dataSearch}
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
