import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import listJob from '@data/ListJob';

export default function JobWithEmp() {
  const renderItem = ({item}) => (
    <View
      style={{
        padding: scale(20),
        borderBottomWidth: 1,
        marginTop: scale(10),
      }}>
      <Text style={[styles.title, {textTransform: 'uppercase'}]}>
        {item.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: scale(5),
              marginRight: scale(60),
            }}>
            <Image style={{marginRight: scale(10)}} source={icons.bag} />
            <Text style={{fontSize: scale(12), color: '#404040'}}>
              {item.type}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={{marginRight: scale(10)}} source={icons.money} />
            <Text style={{fontSize: scale(12), color: '#404040'}}>
              {item.salary}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: scale(5),
              marginRight: scale(70),
            }}>
            <Image style={{marginRight: scale(10)}} source={icons.local} />
            <Text style={{fontSize: scale(12), color: '#404040'}}>
              {item.add}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                marginRight: scale(10),
                height: scale(20),
                width: scale(20),
              }}
              source={icons.calendar_blue}
            />
            <Text style={{fontSize: scale(12), color: '#404040'}}>
              {item.deadline}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      data={listJob}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#404040',
    marginBottom: scale(12),
  },
});
