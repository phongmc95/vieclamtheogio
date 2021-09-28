import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../constant/icons';
import images from '../../constant/images';

export default function TitleJob(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.titleBox}>
      <View style={{flexDirection: 'row', marginBottom: scale(20)}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: scale(30), width: scale(30)}}
            source={icons.back}
          />
        </TouchableOpacity>
        <View style={{width: '82%'}}></View>
        <Image
          style={{height: scale(23), width: scale(23), marginTop: scale(5)}}
          source={icons.heart_wb}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: scale(15)}}>
        <Image
          style={{
            marginLeft: scale(16),
            marginRight: scale(10),
            height: scale(79),
            width: scale(79),
          }}
          source={props.logo}
        />
        <View style={{width: '65%'}}>
          <Text
            style={{
              fontSize: scale(18),
              lineHeight: scale(20),
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#fff',
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: scale(12),
              lineHeight: scale(20),
              textTransform: 'uppercase',
              color: '#fff',
              marginTop: scale(5),
            }}>
            {props.company}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', marginRight: '20%'}}>
          <Image
            style={{height: scale(20), width: scale(20), marginTop: scale(2)}}
            source={icons.calendar_white}
          />
          <Text
            style={{
              fontSize: scale(12),
              lineHeight: scale(20),
              color: '#fff',
              marginLeft: scale(5),
            }}>
            Hạn nộp: <Text>{props.deadline}</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: scale(20), width: scale(20), marginTop: scale(2)}}
            source={icons.eye_white}
          />
          <Text
            style={{
              fontSize: scale(12),
              lineHeight: scale(20),
              color: '#fff',
              marginLeft: scale(5),
            }}>
            Lượt xem: <Text>{props.view}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: '#307DF1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    height: scale(185),
  },
});
