import fonts from '@constant/fonts';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleSearch from '../../components/title/TitleSearch';
import colors from '../../constant/colors';
import {TrashIcon} from '../../../assets/icon';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {clearSearch} from '../../redux/actions/actions';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const {history} = useSelector(state => state.search);

  return (
    <View style={styles.container}>
      <TitleSearch title="Tìm kiếm" value={search} onChangeText={setSearch} />
      <View style={styles.viewSearch}>
        <View style={styles.row}>
          <Text style={styles.txtSearch}>Tìm kiếm gần đây</Text>
          <TouchableOpacity
            onPress={() => dispatch(clearSearch())}
            style={{marginBottom: scale(15), marginLeft: scale(8)}}>
            <TrashIcon />
          </TouchableOpacity>
        </View>
        {history.map(item => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ListJob', {
                search: item,
                type: 'search',
              })
            }>
            <Text style={styles.title}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  row: {flexDirection: 'row'},
  title: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    color: '#404040',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    paddingBottom: scale(5),
    marginBottom: scale(5),
  },
  txtSearch: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    color: '#404040',
    width: '90%',
  },
  viewSearch: {paddingHorizontal: scale(20), marginTop: scale(20)},
});
