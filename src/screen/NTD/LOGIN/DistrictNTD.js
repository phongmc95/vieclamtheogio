import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import District_NTD from '@base/API/apiNTD/District_NTD';
import {useRoute} from '@react-navigation/native';
const DistrictNTD = () => {
  const [District, setDistrict] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const {cityid} = route.params;
  useEffect(() => {
    const fetchCity = async () => {
      try {
        var data = new FormData();
        data.append('id_tt', cityid);
        const response = await District_NTD.getAll(data);

        setDistrict(response.data.quanhuyen);
        setFilterData(response.data.quanhuyen);
        console.log(District);
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
      setDistrict(newData);
      setSearch(text);
    } else {
      setDistrict(filterData);
      setSearch(text);
    }
  };
  return (
    <View style={styles.contener}>
      <Text style={styles.title}>QUẬN HUYỆN</Text>
      <View style={[styles.boxInput, {marginTop: scale(20)}]}>
        <TextInput
          placeholder="Nhập để tìm kiếm"
          style={styles.textInput}
          value={search}
          onChangeText={text => SearchText(text)}
        />
      </View>
      <FlatList
        data={District}
        keyExtractor={item => item.cit_id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignInNTD', {
                nameDistrict: item.cit_name,
                idDistrict: item.cit_id,
              })
            }>
            <View style={styles.box}>
              <Text style={styles.text2}>{item.cit_name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DistrictNTD;

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
