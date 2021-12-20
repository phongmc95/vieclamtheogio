import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import fonts from '@constant/fonts';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function JobHotScreen({route, navigation}) {
  const {list} = route.params;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs/career',
    };

    axios(config)
      .then(function (response) {
        setJobs(response.data.career);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, []);

  const renderItem = ({item}) => {
    const count = list.filter(it => it.career === item.title).length;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ListJob', {
            list: list,
            title: item.title,
          })
        }>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.count}>{count} Công việc sẵn sàng</Text>
          <Image style={styles.image} source={item.img} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TitleBasic title="việc làm nổi bật" />
      <ScrollView style={{marginBottom: scale(20)}}>
        <FlatList
          data={jobs}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
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
    borderRadius: scale(20),
    backgroundColor: '#307DF1',
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
