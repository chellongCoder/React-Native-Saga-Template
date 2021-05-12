const IMAGE_CATE =
  'https://c.files.bbci.co.uk/5435/production/_113475512__110894880_gettyimages-1055182908.jpg'
const IMAGE_TOPIC =
  'https://cloud2.spineuniverse.com/sites/default/files/imagecache/large-content/wysiwyg_imageupload/3998/2017/04/04/operating_room_green_progress-1807543_1280-1_0.jpg'
const IMAGE_DOCTOR =
  'https://65doctor.com/upload/member/photos/515/138x154rohit.PNG'

export const mocksData = {
  categories: [
    { id: 0, name: 'Dentist', image: IMAGE_CATE },
    { id: 1, name: 'Cardiology', image: IMAGE_CATE },
    { id: 2, name: 'Physical', image: IMAGE_CATE },
    { id: 3, name: 'Pediatric', image: IMAGE_CATE },
    { id: 4, name: 'Endocrinology', image: IMAGE_CATE },
    { id: 5, name: 'General Surgery', image: IMAGE_CATE },
  ],

  topics: [
    { id: 0, name: 'Vitae dolorem maxime.', cover: IMAGE_TOPIC },
    { id: 1, name: 'Vitae dolorem maxime.', cover: IMAGE_TOPIC },
    { id: 2, name: 'Vitae dolorem maxime.', cover: IMAGE_TOPIC },
    { id: 3, name: 'Vitae dolorem maxime.', cover: IMAGE_TOPIC },
  ],

  ratings: [
    {
      star: 5,
      name: 'Chất lượng'
    },
    {
      star: 4,
      name: 'Đáng giá tiền'
    },
    {
      star: 3,
      name: 'Hiệu quả sử dụng'
    },
    {
      star: 2, 
      name: 'Sẽ sử dụng lại'
    },
    {
      star: 1, 
      name: 'Giới thiệu bạn bè'
    }
  ],
  valueRating: [
    {
      index: 0,
      value: 5,
    },
    {
      index: 1,
      value: 5,
    },
    {
      index: 2,
      value: 5,
    },
    {
      index: 3,
      value: 5,
    },
    {
      index: 4,
      value: 5,
    },
  ],
  comments: [
    {
      avatar: '',
      name: 'Nguyễn Hoa',
      createAt: '11/03/2021',
      like: 10,
      reply: 9,
      rate: 5,
      rateContent: '10.0 trên cả tuyệt vời ',
      quote: "Rất thích sản phẩm của Paula Choice"
    }
  ]
}