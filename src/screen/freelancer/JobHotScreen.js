import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import {jobs} from '@data/Jobs';
import fonts from '@constant/fonts';

export default function JobHotScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TitleBasic title="việc làm nổi bật" />
          {jobs.map(item => (
            <View>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.count}>
                  {item.count} Công việc sẵn sàng
                </Text>
                <Image style={styles.image} source={item.img} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginHorizontal: scale(20),
    marginTop: scale(20),
    width: '90%',
    overflow: 'hidden',
    borderRadius: scale(20),
    backgroundColor: '#307DF1',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
    elevation: 5,
    padding: scale(20),
    height: scale(150),
  },
  title: {
    fontSize: scale(26),
    fontFamily: fonts.BOLD,
    textTransform: 'uppercase',
    color: '#fff',
  },
  count: {
    fontSize: scale(16),
    lineHeight: scale(20),
    fontFamily: fonts.NORMAL,
    marginTop: scale(10),
    color: '#fff',
  },
  image: {height: scale(40), width: scale(40), marginLeft: '80%'},
});
