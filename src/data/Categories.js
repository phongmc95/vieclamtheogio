import {
  IconFilerMap,
  IconFilterAcademyLevel,
  IconFilterJob,
  IconFilterRank,
  IconFilterSalary,
  IconFilterWorkForm,
} from '../../assets/icon';
import React from 'react';

const Categories = [
  {id: 1, title: 'Ngành nghề', img: <IconFilterJob />, isCheck: true},
  {id: 2, title: 'Khu vực', img: <IconFilerMap />, isCheck: false},

  // {id: 5, title: 'Cấp bậc', img: <IconFilterRank />, isCheck: false},
  {
    id: 6,
    title: 'Trình độ học vấn',
    img: <IconFilterAcademyLevel />,
    isCheck: false,
  },
];
export default Categories;
