/* eslint-disable quotes */
const defaultState = {
  products: [
    {
      id: '1',
      name: 'Ibanez JGM5 Jon Gomm Signature Acoustic Guitar',
      price: '1279',
      img: './img/guitar-img-3.jpg',
      quantity: 1,
      status: 'preorder',
      text: "Jon Gomm is one of the best acoustic guitarists around today and he's teamed up with Ibanez to release a signature model that's perfect for the modern, percussive fingerstyle he's known for. The JGM5 has been designed to make modern fingerstyle a smooth and accessible experience. From the asymmetric jumbo cutaway body shape and wide string spacing to the combination of a soundhole pickup, internal microphone, and a tap pickup, everything about the JGM5 is designed to be a modern fingerstyle dream."
    },
    {
      id: '2',
      name: 'Gretsch Electromatic G5022CWFE Rancher Falcon Jumbo Guitar White',
      price: '629',
      img: './img/guitar-img-2.jpg',
      quantity: 1,
      status: 'in stock',
      text: "The G5022CBFE Rancher™ Falcon™ Jumbo Cutaway Acoustic/Electric gives you full-bodied jumbo tone with full-on Gretsch White Falcon regalia, gilded appointments and professional onboard electronics for peerless amplified tone.Its jumbo cutaway body includes dazzling gold-sparkle binding on the top, back, sound hole, fingerboard and headstock. Other premium features include a solid spruce top with scalloped 'X'-bracing and classic Rancher triangular sound hole, maple sides and arched back, maple neck, 21-fret rosewood fingerboard with Neo-Classic™ 'thumbnail' inlays, 'V'-shaped..."
    },
    {
      id: '3',
      name: 'Faith Guitars Blood Moon Series Neptune Electro Acoustic with Cutaway',
      price: '799',
      img: './img/guitar-img-1.jpg',
      quantity: 1,
      status: 'preorder',
      text: "The Faith Blood Moon series is incredibly popular in acoustic guitar circles. The reason for this is the Trembesi back, sides & top wood. Not only is it figured and gorgeous to look at but it sounds warm and punchy! I think it is fair to say that there are very few guitars that can beat this in terms of looks. Made out of high quality AAA Trembesi with its stunning natural grain finished in what Faith call their 'Blood Moon Burst' there are guitars twice or even three times the price that don't look like this!"
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
