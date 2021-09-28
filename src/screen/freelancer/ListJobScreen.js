import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../components/title/TitleBasic';
import icons from '../../constant/icons';
import listJob from '../../data/ListJob';

export default function ListJobScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TitleBasic title="danh sách việc" />
      <View style={{padding: scale(20)}}>
        <FlatList
          data={listJob}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('JobDetail', {item})}>
              <View style={styles.boxJob}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.logoJob} source={item.logo} />
                  <View
                    style={{
                      marginHorizontal: scale(8),
                      width: '65%',
                    }}>
                    <Text style={[styles.txtTitleJob]}>{item.title}</Text>
                    <Text style={styles.txtAddress}>{item.company}</Text>
                    <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                      <Image style={styles.iconJob} source={icons.bag} />
                      <Text style={styles.txtStatus}>{item.type}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                      <Image style={styles.iconJob} source={icons.money} />
                      <Text style={styles.txtStatus}>{item.salary}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                      <Image style={styles.iconJob} source={icons.local} />
                      <Text style={styles.txtStatus}>{item.add}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(5),
    width: scale(305),
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: scale(20),
    marginLeft: scale(3),
    borderColor: '#404040'
  },
  logoJob: {
    width: scale(79),
    height: scale(79),
    marginTop: scale(15),
  },
  txtTitleJob: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  txtAddress: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
  },
  iconHeart: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(5),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
  },
});
