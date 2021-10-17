const defaultState = {
  products: [
    {
      id: '1',
      name: 'Ibanez JGM5 Jon Gomm Signature Acoustic Guitar',
      price: '1279',
      img: './img/guitar-img-3.jpg',
      quantity: 1
    },
    {
      id: '2',
      name: 'Gretsch Electromatic G5022CWFE Rancher Falcon Jumbo Guitar White',
      price: '629',
      img: './img/guitar-img-2.jpg',
      quantity: 1
    },
    {
      id: '3',
      name: 'Faith Guitars Blood Moon Series Neptune Electro Acoustic with Cutaway',
      price: '799',
      img: './img/guitar-img-1.jpg',
      quantity: 1
    }
  ],
  product: {}
};

const PRODUCT = 'PRODUCT';

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT:
      return { ...state, product: state.products };
    default:
      return state;
  }
};

export default productReducer;
