const MensArrPathProduct = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(Path => `/Mens/${Path}/Product/:product`);

const WomensArrPathProduct = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(Path => `/Womens/${Path}/Product/:product`);

const ChildrensArrPathProduct = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(Path => `/Childrens/${Path}/Product/:product`);

export const ArrPathProduct = [
  ...MensArrPathProduct,
  ...WomensArrPathProduct,
  ...ChildrensArrPathProduct
];

const MensArrPathPageList = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(Path => `/Mens/${Path}/:PageList`);

const WomensArrPathPageList = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(Path => `/Womens/${Path}/:PageList`);

const ChildrensArrPathPageList = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(Path => `/Childrens/${Path}/:PageList`);

export const ArrPathPageList = [
  ...MensArrPathPageList,
  ...WomensArrPathPageList,
  ...ChildrensArrPathPageList
];
