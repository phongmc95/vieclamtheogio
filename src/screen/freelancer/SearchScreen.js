import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleSearch from '../../components/title/TitleSearch';
import icons from '../../constant/icons';
import jobs from '../../data/Jobs';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TitleSearch title="Tìm kiếm" />
      <View style={{paddingHorizontal: scale(20), marginTop: scale(20)}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: scale(16),
              fontWeight: '500',
              color: '#404040',
              width: '90%',
            }}>
            Tìm kiếm gần đây
          </Text>
          <Image
            style={{
              height: scale(30),
              width: scale(23),
              marginBottom: scale(17),
            }}
            source={icons.trash_black}
          />
        </View>
        {jobs.map(item => (
          <Text
            style={{
              fontSize: scale(16),
              fontWeight: '300',
              color: '#404040',
              borderBottomWidth: 0.5,
              borderColor: '#000',
              paddingBottom: scale(5),
              marginBottom: scale(5),
            }}>
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
