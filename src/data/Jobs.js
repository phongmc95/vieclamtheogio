import icons from '../constant/icons';

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
