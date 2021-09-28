import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../components/title/TitleBasic';
import icons from '../../constant/icons';
import jobs from '../../data/Jobs';
import search from '../../data/Search';

export default function FilterScreen() {
  const [check, setCheck] = useState(false);
  return (
    <View>
      <TitleBasic title="Tìm kiếm nâng cao" />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: scale(255),
          flexWrap: 'wrap',
          marginTop: scale(33),
          paddingLeft: scale(10),
        }}>
        {search.map(item => (
          <View
            style={{
              width: scale(110),
              height: scale(110),
              alignItems: 'center',
            }}>
            <Image
              style={{height: scale(40), width: scale(40)}}
              source={item.img}
            />
            <Text
              style={{
                textAlign: 'center',
                flexWrap: 'wrap',
                width: '80%',
                marginTop: scale(5),
                fontSize: scale(16),
                color: '#404040',
              }}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
        }}>
        <TextInput
          placeholder="Nhập để tìm kiếm"
          style={{
            fontSize: scale(16),
            fontWeight: '300',
            fontStyle: 'italic',
            margin: scale(20),
            width: '90%',
            borderWidth: 1,
            borderColor: '#307df1',
            borderRadius: scale(30),
            paddingVertical: scale(8),
            paddingLeft: scale(20),
          }}
        />

        {jobs.map(item => (
          <View
            style={{
              marginTop: scale(5),
              flexDirection: 'row',
              paddingHorizontal: scale(20),
            }}>
            <TouchableOpacity onPress={() => setCheck(!check)}>
              <Image
                style={{marginTop: scale(4.5)}}
                source={!check ? icons.check : icons.checked}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scale(18),
                color: '#404040',
                marginLeft: scale(10),
              }}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
