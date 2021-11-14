import React from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import {scale} from 'react-native-size-matters';
import jobs from '@data/Jobs';

export default function JobDesied() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>ngành nghề mong muốn</Text>
        <TextInput placeholder="Nhập để tìm kiếm" style={styles.search} />
      </View>
      {jobs.map(item => (
        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: scale(10),
            paddingHorizontal: scale(10),
          }}>
          <Text style={{fontSize: scale(18), color: '#404040'}}>
            {item.title}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#307df1',
    textTransform: 'uppercase',
    marginTop: scale(20),
  },
  search: {
    fontSize: scale(16),
    width: scale(315),
    height: scale(40),
    borderRadius: scale(20),
    borderWidth: 1,
    backgroundColor: '#fff',
    fontStyle: 'italic',
    borderColor: '#307DF1',
    paddingLeft: scale(20),
    marginVertical: scale(20),
  },
});
