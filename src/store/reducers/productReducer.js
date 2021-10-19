/* eslint-disable quotes */
const defaultState = {
  products: [
    {
      id: '1',
      name: 'Ibanez JGM5 Jon Gomm Signature Acoustic Guitar',
      price: '1279',
      img: '/img/guitar-img-3.jpg',
      alt: 'Ibanez JGM5',
      quantity: 1,
      status: 'preorder',
      text: "Jon Gomm is one of the best acoustic guitarists around today and he's teamed up with Ibanez to release a signature model that's perfect for the modern, percussive fingerstyle he's known for. The JGM5 has been designed to make modern fingerstyle a smooth and accessible experience. From the asymmetric jumbo cutaway body shape and wide string spacing to the combination of a soundhole pickup, internal microphone, and a tap pickup, everything about the JGM5 is designed to be a modern fingerstyle dream."
    },
    {
      id: '2',
      name: 'Gretsch Electromatic G5022CWFE Rancher Falcon Jumbo Guitar White',
      price: '629',
      img: '/img/guitar-img-2.jpg',
      alt: 'Gretsch Electromatic',
      quantity: 1,
      status: 'in stock',
      text: "The G5022CBFE Rancher™ Falcon™ Jumbo Cutaway Acoustic/Electric gives you full-bodied jumbo tone with full-on Gretsch White Falcon regalia, gilded appointments and professional onboard electronics for peerless amplified tone.Its jumbo cutaway body includes dazzling gold-sparkle binding on the top, back, sound hole, fingerboard and headstock. Other premium features include a solid spruce top with scalloped 'X'-bracing and classic Rancher triangular sound hole, maple sides and arched back, maple neck, 21-fret rosewood fingerboard with Neo-Classic™ 'thumbnail' inlays"
    },
    {
      id: '3',
      name: 'Faith Guitars Blood Moon Series Neptune Electro Acoustic with Cutaway',
      price: '799',
      img: '/img/guitar-img-1.jpg',
      alt: 'Neptune Electro Acoustic',
      quantity: 1,
      status: 'preorder',
      text: "The Faith Blood Moon series is incredibly popular in acoustic guitar circles. The reason for this is the Trembesi back, sides & top wood. Not only is it figured and gorgeous to look at but it sounds warm and punchy! I think it is fair to say that there are very few guitars that can beat this in terms of looks. Made out of high quality AAA Trembesi with its stunning natural grain finished in what Faith call their 'Blood Moon Burst' there are guitars twice or even three times the price that don't look like this!"
    },
    {
      id: '4',
      name: 'Alvarez Artist Elite AGE95CESHB Grand Auditorium Electro Acoustic',
      price: '469',
      img: '/img/guitar-img-4.jpg',
      alt: 'Alvarez Artist Elite',
      quantity: 1,
      status: 'in stock',
      text: "The Alvarez Artist Elite range is the culmination of years of research and development by some of the best luthiers in the world. With over 50 years experience making guitars, the American company set out to create a stunning looking instrument packed with more value than any of its competitors. This incredible line-up is fit and finished to the highest quality. Built with premium tonewoods, hardware and ergonomic design to create both an effortless playing experience and exquisite sound."
    },
    {
      id: '5',
      name: 'Fender California Series Redondo Player in Belmont Blue',
      price: '319',
      img: '/img/guitar-img-5.jpg',
      alt: 'Fender California Series',
      quantity: 1,
      status: 'in stock',
      text: "Fender's California Series Redondo Player offers bold acoustic sound and eye-catching looks in an affordable package. Whether you're a beginner looking for their first guitar or a more experienced player looking to add an acoustic to their collection the Redondo Player provides great value. The Redondo Player has a dreadnought body shape which is known for its big, powerful sound with plenty of emphasis on the bass and mid-range. The back and sides of the Redondo are made from mahogany, a popular tonewood that complements the dreadnought."
    },
    {
      id: '6',
      name: 'Gibson Orianthi Signature SJ-200 Acoustic in Cherry',
      price: '4959',
      img: '/img/guitar-img-6.jpg',
      alt: 'Gibson Orianthi',
      quantity: 1,
      status: 'preorder',
      text: "Fiery Australian-born guitarist Orianthi Panagaris has been knocking people out with her playing for over a decade and has played and collaborated with Michael Jackson, Alice Cooper, Carrie Underwood, and Richie Sambora, among others. Now she has a new Gibson signature model, and it's a knockout, too. Featuring an SJ-200 body with a AAA Sitka spruce top and flamed maple back paired with an ES-345 neck, it's definitely a bit different than a standard SJ-200. Other personal touches include an ebony fingerboard with new lotus neck inlays and a mother of pearl Orianthi O symbol"
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
