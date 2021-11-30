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
import EmptyData from '../../../components/EmptyData';

export default function SkillPersonalScreen({data, type}) {
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

  const update = () => navigation.navigate('UpdateSkill');

  return (
    <View>
      {data?.personal_skills?.length > 0 ? (
        data?.personal_skills[0] !== '' ? (
          <View style={styles.box}>
            <View style={styles.contant}>
              <FlatList
                data={data?.personal_skills}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />
            </View>
            {type === 'flc' && (
              <TouchableOpacity onPress={update}>
                <Image style={styles.pen(data)} source={icons.pen} />
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <EmptyData
            content="Chưa cập nhật"
            onPress={update}
            icon={icons.pen}
            type={type}
          />
        )
      ) : (
        <EmptyData
          content="Chưa cập nhật"
          onPress={update}
          icon={icons.pen}
          type={type}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
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
    width: scale(15),
    height: scale(15),
    marginLeft: scale(20),
  }),
  contant: {width: '85%', flexDirection: 'row', flexWrap: 'wrap'},
});
