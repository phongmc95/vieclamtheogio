import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import Button from '../../../components/Button/Button';

export default function TimeWorking({navigation}) {
  const [time_id, setTime_id] = useState([]);
  const [id, setId] = useState('');
  const time_working = unique(time_id);
  console.log(time_working);

  function unique(arr) {
    return Array.from(new Set(arr)); //
  }

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  // console.log(unique(arrayRemove(time_id, id)))
  const [t2, setT2] = useState([
    {id: 21, title: 'Sáng', isCkeck: false},
    {id: 22, title: 'Chiều', isCkeck: false},
    {id: 23, title: 'Tối', isCkeck: false},
  ]);

  const [t3, setT3] = useState([
    {id: 31, title: 'Sáng', isCkeck: false},
    {id: 32, title: 'Chiều', isCkeck: false},
    {id: 33, title: 'Tối', isCkeck: false},
  ]);

  const [t4, setT4] = useState([
    {id: 41, title: 'Sáng', isCkeck: false},
    {id: 42, title: 'Chiều', isCkeck: false},
    {id: 43, title: 'Tối', isCkeck: false},
  ]);

  const [t5, setT5] = useState([
    {id: 51, title: 'Sáng', isCkeck: false},
    {id: 52, title: 'Chiều', isCkeck: false},
    {id: 53, title: 'Tối', isCkeck: false},
  ]);

  const [t6, setT6] = useState([
    {id: 61, title: 'Sáng', isCkeck: false},
    {id: 62, title: 'Chiều', isCkeck: false},
    {id: 63, title: 'Tối', isCkeck: false},
  ]);

  const [t7, setT7] = useState([
    {id: 71, title: 'Sáng', isCkeck: false},
    {id: 72, title: 'Chiều', isCkeck: false},
    {id: 73, title: 'Tối', isCkeck: false},
  ]);

  const [cn, setCN] = useState([
    {id: 81, title: 'Sáng', isCkeck: false},
    {id: 82, title: 'Chiều', isCkeck: false},
    {id: 83, title: 'Tối', isCkeck: false},
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>ngành nghề mong muốn</Text>
        </View>
        <View style={{marginTop: scale(20)}}>
          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 2</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={t2}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _t2 = JSON.parse(JSON.stringify(t2));
                    _t2[index].isCkeck = !item.isCkeck;
                    setT2(_t2);
                    setId(item.id);
                    const value = item.id;
                    setTime_id([...time_id, item.id]);
                    // const a = time_id
                    //   .some(item => item === value)
                    //   .filter((item, value) => {
                    //     return !value.includes(item);
                    //   });
                    // console.log(a);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 3</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={t3}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _t3 = JSON.parse(JSON.stringify(t3));
                    _t3[index].isCkeck = !item.isCkeck;
                    setT3(_t3);
                    setTime_id([...time_id, item.id]);
                    setId(item.id);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 4</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={t4}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _t4 = JSON.parse(JSON.stringify(t4));
                    _t4[index].isCkeck = !item.isCkeck;
                    setT4(_t4);
                    setTime_id([...time_id, item.id]);
                    setId(item.id);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 5</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={t5}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _t5 = JSON.parse(JSON.stringify(t5));
                    _t5[index].isCkeck = !item.isCkeck;
                    setT5(_t5);
                    setTime_id([...time_id, item.id]);
                    setId(item.id);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 6</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={t6}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _t6 = JSON.parse(JSON.stringify(t6));
                    _t6[index].isCkeck = !item.isCkeck;
                    setT6(_t6);
                    setTime_id([...time_id, item.id]);
                    setId(item.id);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 7</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={t7}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _t7 = JSON.parse(JSON.stringify(t7));
                    _t7[index].isCkeck = !item.isCkeck;
                    setT7(_t7);
                    setTime_id([...time_id, item.id]);
                    setId(item.id);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Chủ nhật</Text>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={cn}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    const _cn = JSON.parse(JSON.stringify(cn));
                    _cn[index].isCkeck = !item.isCkeck;
                    setCN(_cn);
                    setTime_id([...time_id, item.id]);
                    setId(item.id);
                  }}>
                  <Text
                    style={[
                      styles.button,
                      {
                        color: !item.isCkeck ? '#307DF1' : '#fff',
                        backgroundColor: !item.isCkeck ? '#ebebeb' : '#FFA800',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: scale(20)}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RegisterFlc', {time_working})
              }>
              <Button title="Hoàn tất" color="#fff" bg="#307df1" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontWeight: 'bold',
  },
  button: {
    fontSize: scale(16),
    color: '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
  },
});
