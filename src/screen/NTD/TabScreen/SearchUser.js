import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HeaderSearch from '../../../components/HeaderSearch';
import {useNavigation, useRoute} from '@react-navigation/native';
import axiosClient from '../../../config/axios';
import Render from '../../../components/Render';
import EmptyData from '../../../components/EmptyData';
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
  const [Data, setData] = useState([]);
  const getAPi = async () => {
    let url = 'https://fpt-jobs-api.herokuapp.com/api/v1/users';
    try {
      const res = await axiosClient.get(url);
      setData(res.users);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getAPi();
    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <HeaderSearch onPress={() => navigation.navigate('Filters')} />
      <View>
        <FlatList
          keyExtractor={item => item._id.toString()}
          data={
            params
              ? findByTemplate(
                  Data,
                  Object.filter(params, ps => ps !== null),
                )
              : Data
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
          ListFooterComponent={() => <View style={{marginBottom: 500}} />}
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
