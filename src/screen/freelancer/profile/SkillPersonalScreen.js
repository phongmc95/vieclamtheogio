import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';

export default function SkillPersonalScreen({data}) {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={{width: '85%'}}>
          <Text style={styles.txtProgress}>{item}</Text>
        </View>
      </View>
    );
  };

  const renderEmptyItem = () => {
    return (
      <View style={{width: '85%'}}>
        <Text style={styles.txtProgress}>Chưa cập nhật</Text>
      </View>
    );
  };

  return (
    <View style={styles.box}>
      <View style={styles.contant}>
        <FlatList
          data={data.personal_skills}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyItem}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('UpdateSkill')}>
          <Image style={styles.pen(data)} source={icons.pen} />
        </TouchableOpacity>
        {/* {data.personal_skills.length > 0 && (
          <Image style={styles.trash} source={icons.trash_black} />
        )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
    marginBottom: scale(10),
    fontFamily: fonts.NORMAL,
  },
  box: {
    width: scale(300),
    padding: scale(15),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    flexDirection: 'row',
  },
  trash: {
    marginTop: scale(10),
    width: scale(20),
    height: scale(20),
    marginLeft: scale(10),
  },
  pen: data => ({
    width: scale(20),
    height: scale(20),
    marginLeft: scale(10),
    marginVertical: 0,
  }),
  contant: {width: '85%', flexDirection: 'row', flexWrap: 'wrap'},
});
