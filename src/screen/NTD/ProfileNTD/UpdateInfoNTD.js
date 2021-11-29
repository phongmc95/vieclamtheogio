import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,Alert
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, CameraIcon, Selecter} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import TextInputStyle from '../../../components/TextInputStyle';
import TextInputSelected from '../../../components/TextInputSelected';
import {provinces} from '../../../data/Jobs';
import SelectModal from '../../../components/SelectModal';
import ButtonStyle from '../../../components/ButtonStyle';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateProfileEPl, PostLogo} from '../../../redux/actions/actions';
import ModalStyle from '../../../components/ModalStyle';
import {validateEmail, isVietnamesePhoneNumber} from '../../../base/Validate';

const UpdateInfoNTD = ({navigation}) => {
  const dispatch = useDispatch();

  const datalocal = useSelector(state => state.ProfileEPl.data);


  const [name, setName] = useState('');
  const [quyMo, setquyMo] = useState('');
  const [mst, setMst] = useState('');
  const [diaChi, setdiachi] = useState('');
  const [province, setProvince] = useState('');
  const [isProvince, setIsProvince] = useState(false);
  const [phone, setPhone] = useState('');
  const [web, setWeb] = useState('');
  const [intro, setIntro] = useState('');
  const [nameContact, setNameContact] = useState('');
  const [addressContact, setAddressContact] = useState('');
  const [phoneContact, setPhoneContact] = useState('');
  const [emailContact, setEmailContact] = useState('');
  const [logo, setLogo] = useState(null);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const options = {
    mediaType: 'photo',
     includeBase64: true,
    maxWidth: 2048,
    maxHeight: 2048,
  };
  const onUpdateProfile = () => {
    dispatch(
      UpdateProfileEPl(

        name,
        quyMo,
        mst,
        diaChi,
        province.title,

        web,
        intro,
        phone,
        datalocal.user.email,
        datalocal.user._id
      ),
    );
   if(logo){
     updateLogo()
   }
    Alert.alert(
      "Thông báo",
      "Cập nhập thông tin thành công",
      [

        { text: "OK", onPress: () => navigation.navigate('Profile') }
      ]
    );


  };
  const updateLogo = () => {
    dispatch(PostLogo(logo,  datalocal.user.email));
  };
  const onAddJob = () => {
    if (
      !name ||
      !quyMo ||
      !mst ||
      !diaChi ||
      !province ||
      !phone ||
      !intro
    ) {
      setModal(true);
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else if (!isVietnamesePhoneNumber(phone)) {
      setModal(true);
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại !');
    } else {
      onUpdateProfile();
    }


  };
  const openLibry = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }

      setLogo(response);
    });
  };
  const selectProvince = item => {
    setProvince(item);
    handleSelectProvince();
  };

  const handleSelectProvince = () => {
    setIsProvince(!isProvince);
  };

  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Cập nhập thông tin</Text>
      </View>
      <ScrollView>
        <View style={styles.viewAvtar}>
          <Image
            source={
              !logo
                ? require('../../../../assets/img/logoVin.png')
                : {uri: logo.assets[0].uri}
            }
            style={[styles.avatar, {opacity: !logo ? 0.5 : 1}]}
          />
          <TouchableOpacity style={styles.btnCamera} onPress={openLibry}>
            <CameraIcon />
          </TouchableOpacity>
          <Text style={styles.titleAvatar}>Cập nhật ảnh đại diện</Text>
        </View>

        <View style={styles.main}>
          <Text
            style={{
              fontSize: scale(16),
              fontFamily: fonts.BOLD,
              marginBottom: scale(15),
            }}>
            THÔNG TIN CÔNG TY
          </Text>
          <TextInputStyle
            Label="Tên công ty"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInputStyle
            Label="Quy mô công ty"
            value={quyMo}
            keyboardType={'number-pad'}
            onChangeText={text => setquyMo(text)}
          />
          <TextInputStyle
            Label="Mã số thuế"
            value={mst}
            keyboardType={'number-pad'}
            onChangeText={text => setMst(text)}
          />
          <TextInputStyle
            Label="Địa chỉ công ty"
            value={diaChi}
            onChangeText={text => setdiachi(text)}
          />
          <TextInputSelected
            Label="Tỉnh/ Thành phố"
            value={province.title}
            onChangeText={text => setProvince(text)}
            onPress={handleSelectProvince}
          />

          <TextInputStyle
            Label="Điện thoại"
            value={phone}
            keyboardType={'number-pad'}
            onChangeText={text => setPhone(text)}
          />
          <TextInputStyle
            Label="Website"
            value={web}
            onChangeText={text => setWeb(text)}
          />

          <TextInputStyle
            Label="Giới thiệu công ty"
            value={intro}
            onChangeText={text => setIntro(text)}
          />
        </View>
        <View style={styles.foodter}>
          <ButtonStyle
            styleBtn={{width: 150}}
            Title={'Cập nhập'}
            onPress={
              // updateLogo
              onAddJob
            }
          />
        </View>
      </ScrollView>
      <SelectModal
        isVisible={isProvince}
        onBackdropPress={handleSelectProvince}
        label={'Tỉnh/ Thành phố'}
        onPress={item => selectProvince(item)}
        data={provinces}
      />
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
    </View>
  );
};

export default UpdateInfoNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(100),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: scale(20),
    fontFamily: fonts.BOLD,
    marginLeft: scale(20),
    textTransform: 'uppercase',
    marginBottom: scale(12),
  },
  goback: {
    marginLeft: scale(10),
    marginBottom: scale(15),
  },
  avatar: {
    width: scale(100),
    height: scale(100),

    borderRadius: scale(50),
  },
  viewAvtar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  btnCamera: {
    position: 'absolute',
    alignItems: 'center',
  },
  titleAvatar: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
    backgroundColor: colors.WHITE,
  },
  textInput: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    marginLeft: scale(5),
  },
  TextTitle: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    marginLeft: scale(5),
    marginTop: scale(10),
  },
  Selecter: {
    width: scale(25),

    alignItems: 'center',
    justifyContent: 'center',
  },
  foodter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(20),
  },
  btnupdate: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    paddingHorizontal: scale(33),
    paddingVertical: scale(11),
    backgroundColor: '#307DF1',
    borderRadius: scale(30),
    color: 'white',
  },
});
