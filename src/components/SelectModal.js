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
import {jobs} from '../data/Jobs';
import fonts from '../constant/fonts';
const SelectModal = props => {
  const {isVisible, onBackdropPress, label, onPress, data} = props;
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={600}
      animationOutTiming={600}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={styles.modal}>
      <View style={styles.viewModal}>
        <Text style={styles.title}>{label}</Text>
        <ScrollView>
          {data?.map(item => {
            return (
              <TouchableOpacity key={item.id} onPress={() => onPress(item)}>
                <View style={styles.viewContent}>
                  <Text style={styles.txtContent}>
                    {item.id}. {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SelectModal;

const styles = StyleSheet.create({
  viewModal: {
    maxHeight: '60%',
    backgroundColor: '#F5F5FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: scale(20),
  },
  title: {
    fontSize: scale(24),
    color: '#307df1',
    fontFamily: fonts.BOLD,
    marginBottom: scale(20),
    textAlign: 'center',
  },
  viewContent: {
    borderBottomWidth: 1,
    paddingVertical: scale(15),
    paddingHorizontal: scale(10),
  },
  txtContent: {
    fontSize: scale(18),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  modal: {margin: 0, justifyContent: 'flex-end'},
});
