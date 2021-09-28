import axiosClient from '../axiosClient';

const HomeAPi = {
  getAll: data => {
    const url = 'com_hoso_qlchung.php';
    return axiosClient.post(url, data);
  },
};

export default HomeAPi;
