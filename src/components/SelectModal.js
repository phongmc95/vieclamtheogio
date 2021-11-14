import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {isIos} from '../Utils/CheckDevice';
import {scale} from 'react-native-size-matters';
import jobs from '../data/Jobs';
const SelectModal = props => {
  const {isVisible, onBackdropPress, label, onPress} = props;
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={600}
      animationOutTiming={600}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View style={styles.viewmodal}>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.viewcontent}>
          <ScrollView>
            {jobs.map(item => {
              return (
                <TouchableOpacity key={item.id} onPress={onPress(item)}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SelectModal;

const styles = StyleSheet.create({
  viewmodal: {
    maxHeight: '60%',
    backgroundColor: '#F5F5FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#307df1',
    fontWeight: '700',
    marginTop: isIos ? 50 : null,
  },
  viewcontent: {
    padding: 20,
  },
  txtcontent: {
    paddingHorizontal: scale(15),
    textAlign: 'center',
    fontSize: 16,
    color: '#404040',
    fontWeight: '700',
  },
});
