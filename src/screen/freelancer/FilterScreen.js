import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import {jobs} from '@data/Jobs';
import search from '@data/Search';
import fonts from '@constant/fonts';
import colors from '../../constant/colors';
import {literacy, location, salary, workingForm} from '../../data/Jobs';
import {listRank} from '../../data/ListJob';
import Button from '../../components/Button/Button';
import {useSelector} from 'react-redux';
import Categories from '../../data/Categories';

export default function FilterScreen({navigation}) {
  const role = useSelector(state => state.Authen.check_type);
  const [state, setState] = useState('Ngành nghề');
  const [listState, setListState] = useState(
    role === 'emp' ? Categories : search,
  );
  const [listJob, setListJob] = useState(jobs);
  const [listLocation, setListLocation] = useState(location);
  const [listSalary, setListSalary] = useState(salary);
  const [listWorkForm, setListWorkForm] = useState(workingForm);
  // const [listPost, setListPost] = useState(listRank);
  const [listAcademyLevel, setListAcademyLevel] = useState(literacy);
  const [job, setJob] = useState('');
  const [locations, setLocation] = useState('');
  const [salarys, setSalary] = useState('');
  // const [rank, setRank] = useState('');
  const [workform, setWorkForm] = useState('');
  const [academyLevel, setAcademyLevel] = useState('');

  console.log(role);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => handleState(item, index)}>
        <View style={styles.viewSearch}>
          <View style={styles.imgSearch(item)}>{item.img}</View>
          <Text style={styles.titleSearch}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleState = (item, index) => {
    setState(item.title);
    const _listState = listState.map((it, idx) => {
      return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
    });
    setListState(_listState);
  };

  const handleJob = (item, index) => {
    setJob(item.title);

    const _job = JSON.parse(JSON.stringify(listJob));
    const _listJob = _job.map((it, idx) => {
      return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
    });
    setListJob(_listJob);
  };

  const handleMap = (item, index) => {
    setLocation(item.title);

    const _job = JSON.parse(JSON.stringify(listLocation));
    const _listJob = _job.map((it, idx) => {
      return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
    });
    setListLocation(_listJob);
  };

  const handleSalary = (item, index) => {
    setSalary(item.title);
    const _job = JSON.parse(JSON.stringify(listSalary));
    const _listJob = _job.map((it, idx) => {
      return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
    });
    setListSalary(_listJob);
  };

  const handleWorkForm = (item, index) => {
    setWorkForm(item.title);
    const _job = JSON.parse(JSON.stringify(listWorkForm));
    const _listJob = _job.map((it, idx) => {
      return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
    });
    setListWorkForm(_listJob);
  };

  // const handleRank = (item, index) => {
  //   setRank(item.title);
  //   const _job = JSON.parse(JSON.stringify(listPost));
  //   const _listJob = _job.map((it, idx) => {
  //     return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
  //   });
  //   setListPost(_listJob);
  // };

  const handleAcademyLevel = (item, index) => {
    setAcademyLevel(item.title);
    const _job = JSON.parse(JSON.stringify(listAcademyLevel));
    const _listJob = _job.map((it, idx) => {
      return idx === index ? {...it, isCheck: true} : {...it, isCheck: false};
    });
    setListAcademyLevel(_listJob);
  };

  const confirm = () => {
    navigation.navigate('ListJob', {
      title: job,
      salary: salarys,
      min_education: academyLevel,
      working_form: workform,
      work_location: locations,
      type: 'filter',
      search: '',
    });
  };
  const params_filter = () => {
    navigation.navigate('Search_User', {
      job_adress: locations,
      industry: job,
    });
  };

  return (
    <View>
      <TitleBasic title="Bộ lọc" />
      <View style={styles.content}>
        <FlatList
          data={listState ? listState : null}
          numColumns={3}
          key={(item, index) => item.id}
          renderItem={renderItem}
        />
      </View>

      {job ? <Text>{job}</Text> : null}
      {locations ? <Text>{locations}</Text> : null}
      {salarys ? <Text>{salarys}</Text> : null}
      {workform ? <Text>{workform}</Text> : null}
      {academyLevel ? <Text>{academyLevel}</Text> : null}
      {state === 'Ngành nghề' && (
        <View style={styles.viewTextSearch}>
          {listJob.map((item, index) => (
            <View style={styles.list}>
              <TouchableOpacity onPress={() => handleJob(item, index)}>
                <Text style={styles.title}>
                  <Image
                    source={
                      item.isCheck === false ? icons.check : icons.checked
                    }
                  />
                  {'   '}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {state === 'Khu vực' && (
        <View style={styles.viewTextSearch}>
          {listLocation.map((item, index) => (
            <View style={styles.list}>
              <TouchableOpacity onPress={() => handleMap(item, index)}>
                <Text style={styles.title}>
                  <Image
                    source={
                      item.isCheck === false ? icons.check : icons.checked
                    }
                  />
                  {'   '}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {state === 'Mức lương' && (
        <View style={styles.viewTextSearch}>
          {listSalary.map((item, index) => (
            <View style={styles.list}>
              <TouchableOpacity onPress={() => handleSalary(item, index)}>
                <Text style={styles.title}>
                  <Image
                    source={
                      item.isCheck === false ? icons.check : icons.checked
                    }
                  />
                  {'   '}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {state === 'Hình thức làm việc' && (
        <View style={styles.viewTextSearch}>
          {listWorkForm.map((item, index) => (
            <View style={styles.list}>
              <TouchableOpacity onPress={() => handleWorkForm(item, index)}>
                <Text style={styles.title}>
                  <Image
                    source={
                      item.isCheck === false ? icons.check : icons.checked
                    }
                  />
                  {'   '}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* {state === 'Cấp bậc' && (
        <View style={styles.viewTextSearch}>
          <TextInput
            placeholder="Nhập để tìm kiếm"
            style={styles.inputSearch}
          />
          {listPost.map((item, index) => (
            <View style={styles.list}>
              <TouchableOpacity onPress={() => handleRank(item, index)}>
                <Text style={styles.title}>
                  <Image
                    source={
                      item.isCheck === false ? icons.check : icons.checked
                    }
                  />
                  {'   '}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )} */}

      {state === 'Trình độ học vấn' && (
        <View style={styles.viewTextSearch}>
          {listAcademyLevel.map((item, index) => (
            <View style={styles.list}>
              <TouchableOpacity onPress={() => handleAcademyLevel(item, index)}>
                <Text style={styles.title}>
                  <Image
                    source={
                      item.isCheck === false ? icons.check : icons.checked
                    }
                  />
                  {'   '}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity
        onPress={() => {
          role === 'emp' ? params_filter() : confirm();
        }}
        style={styles.btnConfirm}>
        <Button bg={colors.BLUE} color={colors.WHITE} title="Áp dụng" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: '100%',
    height: scale(205),
    flexWrap: 'wrap',
    marginTop: scale(33),
    paddingLeft: scale(10),
  },
  viewSearch: {
    width: scale(110),
    height: scale(100),
    alignItems: 'center',
  },
  imgSearch: item => ({
    height: scale(40),
    width: scale(40),
    backgroundColor: item.isCheck === true ? colors.BLUE : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  }),
  titleSearch: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '80%',
    marginTop: scale(5),
    fontSize: scale(16),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  viewTextSearch: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: colors.LIGHT_WHITE,
  },
  inputSearch: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    fontStyle: 'italic',
    margin: scale(20),
    width: '90%',
    borderWidth: 1,
    borderColor: '#307df1',
    borderRadius: scale(30),
    paddingVertical: scale(8),
    paddingLeft: scale(20),
    backgroundColor: colors.WHITE,
  },
  list: {
    marginTop: scale(5),
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: scale(18),
    color: '#404040',
    marginLeft: scale(10),
    fontFamily: fonts.NORMAL,
  },
  btnConfirm: {alignItems: 'center', bottom: '70%', borderRadius: 5},
});
