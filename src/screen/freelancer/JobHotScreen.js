import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../components/title/TitleBasic';
import icons from '../../constant/icons';
import jobs from '../../data/Jobs';

export default function JobHotScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleBasic title="việc làm nổi bật" />
        {jobs.map(item => (
          <View>
            <View
              style={{
                marginHorizontal: scale(20),
                marginTop: scale(20),
                width: '90%',
                borderRadius: scale(20),
                backgroundColor: '#307DF1',
                elevation: 5,
                padding: scale(20),
                height: scale(150),
              }}>
              <Text
                style={{
                  fontSize: scale(26),
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: scale(16),
                  lineHeight: scale(20),
                  fontWeight: '300',
                  marginTop: scale(10),
                  color: '#fff',
                }}>
                {item.count} Công việc sẵn sàng
              </Text>
              <Image
                style={{height: scale(40), width: scale(40), marginLeft: '80%'}}
                source={item.img}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
