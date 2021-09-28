import axiosClient from '../axiosClient';

const District_NTD = {
  getAll: data => {
    const url = 'p_district.php';
    return axiosClient.post(url, data);
  },
};
export default District_NTD;
