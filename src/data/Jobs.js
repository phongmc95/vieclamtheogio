import moment from 'moment';
import icons from '../constant/icons';

export const currentDate = moment(new Date()).format('DD/MM/YYYY');

export const jobs = [
  {id: 1, title: 'Bán hàng', img: icons.cart, count: '1000'},
  {id: 2, title: 'Giao hàng', img: icons.solid, count: '1000'},
  {id: 3, title: 'Hành chính', img: icons.man, count: '1000'},
  {id: 4, title: 'Phục vụ/Tạp vụ', img: icons.house, count: '1000'},
  {id: 5, title: 'Nấu ăn/Đầu bếp', img: icons.chef, count: '1000'},
  {id: 6, title: 'Xây dựng/Công trình', img: icons.bulding, count: '1000'},
];
export const profession = [
  {id: '11', title: 'trông trẻ theo giờ', parent: '2'},
  {id: '12', title: 'phục vụ tiệc cưới theo giờ', parent: '2'},
  {id: '13', title: 'tạp vụ văn phòng theo giờ', parent: '6'},
  {id: '14', title: 'rửa bát theo giờ', parent: '2'},
  {id: '15', title: 'lau nhà theo giờ', parent: '2'},
  {id: '16', title: 'vệ sinh nhà ở theo giờ', parent: '2'},
  {id: '1', title: 'bán hàng', parent: '0'},
  {id: '2', title: 'phục vụ/tạp vụ', parent: '0'},
  {id: '3', title: 'xây dựng/Công trình', parent: '0'},
  {id: '4', title: 'vận chuyển/Bốc vác', parent: '0'},
  {id: '5', title: 'nấu ăn/Đầu bếp', parent: '0'},
  {id: '6', title: 'hành chính', parent: '0'},
  {id: '7', title: 'giao hàng', parent: '0'},
  {id: '8', title: 'nhà hàng/Khách sạn', parent: '0'},
  {id: '9', title: 'tổ chức sự kiện', parent: '0'},
  {id: '10', title: 'kho bãi', parent: '0'},
];

export const working_day = [
  {
    day: 'Thứ 2',
    sessions: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
  {
    day: 'Thứ 3',
    sessions: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
  {
    day: 'Thứ 4',
    session: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
  {
    day: 'Thứ 5',
    sessions: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
  {
    day: 'Thứ 6',
    sessions: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
  {
    day: 'Thứ 7',
    session: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
  {
    day: 'Chủ Nhật',
    session: {
      morning: false,
      afternoon: false,
      evening: false,
    },
  },
];

export const Salary = [
  {
    id: '1',
    title: 'Dưới 5 triệu',
  },
  {
    id: '2',
    title: '5 - 10 triệu',
  },
  {
    id: '3',
    title: '10 - 15 triệu',
  },
  {
    id: '4',
    title: 'Trên 20 triệu',
  },
];

export const Literacy = [
  {
    id: '1',
    title: 'Trung học cơ sở',
  },
  {
    id: '2',
    title: 'Trung học phổ thông',
  },
  {
    id: '3',
    title: 'Cao đẳng',
  },
  {
    id: '4',
    title: 'Đại học',
  },
];

export const WorkingForm = [
  {
    id: '1',
    title: 'Việc làm toàn thời gian',
  },
  {
    id: '2',
    title: 'Việc làm bán thời gian',
  },
  {
    id: '3',
    title: 'Việc làm tại nhà',
  },
  {
    id: '4',
    title: 'Việc làm thời vụ',
  },
];

export const provinces = [
  {
    id: '1',
    title: 'Hà Nội',
  },
  {
    id: '2',
    title: 'Hải Phòng',
  },
  {
    id: '3',
    title: 'Bắc Giang',
  },
  {
    id: '4',
    title: 'Bắc Kạn',
  },
  {
    id: '5',
    title: 'Bắc Ninh',
  },
  {
    id: '6',
    title: 'Cao Bằng',
  },
  {
    id: '7',
    title: 'Điện Biên',
  },
  {
    id: '8',
    title: 'Hòa Bình',
  },
  {
    id: '9',
    title: 'Hải Dương',
  },
  {
    id: '10',
    title: 'Hà Giang',
  },
  {
    id: '11',
    title: 'Hà Nam',
  },
  {
    id: '12',
    title: 'Hưng Yên',
  },
  {
    id: '13',
    title: 'Lào Cai',
  },
  {
    id: '14',
    title: 'Lai Châu',
  },
  {
    id: '15',
    title: 'Lạng Sơn',
  },
  {
    id: '16',
    title: 'Ninh Bình',
  },
  {
    id: '17',
    title: 'Nam Định',
  },
  {
    id: '18',
    title: 'Phú Thọ',
  },
  {
    id: '19',
    title: 'Quảng Ninh',
  },
  {
    id: '20',
    title: 'Sơn La',
  },
  {
    id: '21',
    title: 'Thái Bình',
  },
  {
    id: '22',
    title: 'Thái Nguyên',
  },
  {
    id: '23',
    title: 'Tuyên Quang',
  },
  {
    id: '24',
    title: 'Vĩnh Phúc',
  },
  {
    id: '25',
    title: 'Yên Bái',
  },
  {
    id: '26',
    title: 'Đà Nẵng',
  },
  {
    id: '27',
    title: 'Thừa Thiên Huế',
  },
  {
    id: '28',
    title: 'Khánh Hòa',
  },
  {
    id: '29',
    title: 'Lâm Đồng',
  },
  {
    id: '30',
    title: 'Bình Định',
  },
  {
    id: '31',
    title: 'Bình Thuận',
  },
  {
    id: '32',
    title: 'Đắk Lắk',
  },
  {
    id: '33',
    title: 'Đắk Nông',
  },
  {
    id: '34',
    title: 'Gia Lai',
  },
  {
    id: '35',
    title: 'Hà Tĩnh',
  },
  {
    id: '36',
    title: 'Kon Tum',
  },
  {
    id: '37',
    title: 'Nghệ An',
  },
  {
    id: '38',
    title: 'Ninh Thuận',
  },
  {
    id: '39',
    title: 'Phú Yên',
  },
  {
    id: '40',
    title: 'Quảng Bình',
  },
  {
    id: '41',
    title: 'Quảng Nam',
  },
  {
    id: '42',
    title: 'Quảng Ngãi',
  },
  {
    id: '43',
    title: 'Quảng Trị',
  },
  {
    id: '44',
    title: 'Thanh Hóa',
  },
  {
    id: '45',
    title: 'Hồ Chí Minh',
  },
  {
    id: '46',
    title: 'Bình Dương',
  },
  {
    id: '47',
    title: 'Bà Rịa Vũng Tàu',
  },
  {
    id: '48',
    title: 'Cần Thơ',
  },
  {
    id: '49',
    title: 'An Giang',
  },
  {
    id: '50',
    title: 'Bạc Liêu',
  },
  {
    id: '51',
    title: 'Bình Phước',
  },
  {
    id: '52',
    title: 'Bến Tre',
  },
  {
    id: '53',
    title: 'Cà Mau',
  },
  {
    id: '54',
    title: 'Đồng Tháp',
  },
  {
    id: '55',
    title: 'Đồng Nai',
  },
  {
    id: '56',
    title: 'Hậu Giang',
  },
  {
    id: '57',
    title: 'Kiên Giang',
  },
  {
    id: '58',
    title: 'Long An',
  },
  {
    id: '59',
    title: 'Sóc Trăng',
  },
  {
    id: '60',
    title: 'Tiền Giang',
  },
  {
    id: '61',
    title: 'Tây Ninh',
  },
  {
    id: '62',
    title: 'Trà Vinh',
  },
  {
    id: '63',
    title: 'Vĩnh Long',
  },
];
