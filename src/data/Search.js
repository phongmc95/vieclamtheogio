import {
  IconFilerMap,
  IconFilterAcademyLevel,
  IconFilterJob,
  IconFilterRank,
  IconFilterSalary,
  IconFilterWorkForm,
} from '../../assets/icon';
import React from 'react';

const search = [
  {id: 1, title: 'Ngành nghề', img: <IconFilterJob />, isCheck: true},
  {id: 2, title: 'Địa điểm', img: <IconFilerMap />, isCheck: false},
  {id: 3, title: 'Mức lương', img: <IconFilterSalary />, isCheck: false},
  {
    id: 4,
    title: 'Hình thức làm việc',
    img: <IconFilterWorkForm />,
    isCheck: false,
  },
  // {id: 5, title: 'Cấp bậc', img: <IconFilterRank />, isCheck: false},
  {
    id: 6,
    title: 'Trình độ học vấn',
    img: <IconFilterAcademyLevel />,
    isCheck: false,
  },
];
export default search;
