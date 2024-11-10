import { CityName } from '../const';
import { Offer } from '../types/offer';

export const OFFERS_MOCK: Offer[] = [
  {
    id: 'ee08b6c0-5bc7-42b3-b8de-e2ac4b3b4470',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 244,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    bedrooms: 5,
    goods: [
      'Washing machine',
      'Breakfast',
      'Kitchen'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    maxAdults: 7
  },
  {
    id: 'b4f8458c-fdf0-4473-80be-04ecfc138ceb',
    title: 'Wood and stone place',
    type: 'house',
    price: 831,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    bedrooms: 2,
    goods: [
      'Washer',
      'Heating',
      'Laptop friendly workspace',
      'Coffee machine',
      'Washing machine',
      'Breakfast',
      'Cable TV',
      'Air conditioning'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg'
    ],
    maxAdults: 4
  },
  {
    id: 'c2e1fe98-278f-4aa1-85b2-30a9be434190',
    title: 'House in countryside',
    type: 'house',
    price: 106,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    bedrooms: 3,
    goods: [
      'Heating',
      'Baby seat',
      'Washer',
      'Breakfast',
      'Dishwasher',
      'Washing machine',
      'Laptop friendly workspace',
      'Fridge',
      'Towels',
      'Coffee machine',
      'Air conditioning'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
    maxAdults: 6
  },
  {
    id: '485d7965-660c-48f0-bc85-52ebe00bce9c',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 187,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    bedrooms: 4,
    goods: [
      'Fridge',
      'Towels',
      'Kitchen'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg'
    ],
    maxAdults: 4
  }
];
