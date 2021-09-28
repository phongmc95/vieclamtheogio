import axiosClient from '../axiosClient';

const City_NTD = {
  getAll: params => {
    const url = 'p_pro.php';
    return axiosClient.get(url, {params});
  },
};
export default City_NTD;
