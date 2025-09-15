import cover1 from '../assets/images/bedroom_bungalow_contemporary_cover.jpg';
import bungalowPreview1 from '../assets/images/bedroom_bungalow_contemporary_preview_1.jpg';
import bungalowPreview2 from '../assets/images/bedroom_bungalow_contemporary_preview_2.jpg';
import bungalowPreview3 from '../assets/images/bedroom_bungalow_contemporary_preview_3.jpg';
import cover2 from '../assets/images/bedroom_cozy_townhouse_cover.jpg';
import townhousePreview1 from '../assets/images/bedroom_cozy_townhouse_preview_1.jpg';
import townhousePreview2 from '../assets/images/bedroom_cozy_townhouse_preview_2.jpg';
import townhousePreview3 from '../assets/images/bedroom_cozy_townhouse_preview_3.jpg';
import cover3 from '../assets/images/bedroom_duplex_modern_cover.jpg';
import duplexPreview1 from '../assets/images/bedroom_duplex_modern_preview_1.jpg';
import duplexPreview2 from '../assets/images/bedroom_duplex_modern_preview_2.jpg';
import duplexPreview3 from '../assets/images/bedroom_duplex_modern_preview_3.jpg';
import cover4 from '../assets/images/bedroom_classic_house_cover.jpg';
import classicPreview1 from '../assets/images/bedroom_classic_house_preview_1.jpg';
export const properties_list = [
  {
    id: 1,
    name: '4 Bedroom Classic Family Home',
    seller_name: 'Property Navigators',
    price: 280000000,
    location: 'Lagos',
    for: 'Sale',
    rent_payment_type: null,
    details: {
      land_size: 520,
      building_size: 300,
      year_built: 2012,
      year_renovated: 2020,
      floor_level: '2 Floors',
    },
    status: 'Closed',
    image: {
      cover: cover4,
      preview: [classicPreview1],
    },
    interiors: {
      bedroom: 4,
      toilet: 4,
      parking_garage: 4,
      kitchen: 1,
    },
  },
  {
    id: 2,
    name: '3 Bedroom Contemporary',
    seller_name: 'Daniels Home',
    price: 5000000,
    location: 'Lagos',
    for: 'Rent',
    rent_payment_type: 'yearly',
    details: {
      land_size: 400,
      building_size: 240,
      year_built: 2018,
      year_renovated: null,
      floor_level: 'Bungalow',
    },
    status: 'Available',
    image: {
      cover: cover1,
      preview: [
        // bungalowPreview1,
        bungalowPreview2,
        bungalowPreview3,
      ],
    },
    interiors: {
      bedroom: 3,
      toilet: 3,
      parking_garage: 2,
      kitchen: 1,
    },
  },
  {
    id: 3,
    name: '2 Bedroom Cozy Townhouse',
    seller_name: 'Lekki Farms',
    price: 2500000,
    location: 'Lagos',
    for: 'Rent',
    rent_payment_type: 'yearly',
    details: {
      land_size: 200,
      building_size: 140,
      year_built: 2016,
      year_renovated: 2021,
      floor_level: 'Duplex',
    },
    status: 'Upcoming',
    image: {
      cover: cover2,
      preview: [townhousePreview1, townhousePreview2, townhousePreview3],
    },
    interiors: {
      bedroom: 2,
      toilet: 2,
      parking_garage: 1,
      kitchen: 1,
    },
  },
  {
    id: 4,
    name: '5 Bedroom Duplex',
    seller_name: 'Masco Builders',
    price: 420000000,
    location: 'Lagos',
    for: 'Sale',
    rent_payment_type: null,
    details: {
      land_size: 500,
      building_size: 340,
      year_built: 2020,
      year_renovated: null,
      floor_level: 'Duplex',
    },
    status: 'Sold',
    image: {
      cover: cover3,
      preview: [duplexPreview1, duplexPreview2, duplexPreview3],
    },
    interiors: {
      bedroom: 5,
      toilet: 5,
      parking_garage: 3,
      kitchen: 1,
    },
  },
  {
    id: 5,
    name: '3 Bedroom Contemporary',
    seller_name: 'Daniels Home',
    price: 5000000,
    location: 'Lagos',
    for: 'Rent',
    rent_payment_type: 'yearly',
    details: {
      land_size: 400,
      building_size: 240,
      year_built: 2018,
      year_renovated: null,
      floor_level: 'Bungalow',
    },
    status: 'Available',
    image: {
      cover: cover1,
      preview: [bungalowPreview1, bungalowPreview2, bungalowPreview3],
    },
    interiors: {
      bedroom: 3,
      toilet: 3,
      parking_garage: 2,
      kitchen: 1,
    },
  },

  {
    id: 6,
    name: '4 Bedroom Classic Family Home',
    seller_name: 'Property Navigators',
    price: 280000000,
    location: 'Lagos',
    for: 'Sale',
    rent_payment_type: null,
    details: {
      land_size: 520,
      building_size: 300,
      year_built: 2012,
      year_renovated: 2020,
      floor_level: '2 Floors',
    },
    status: 'Closed',
    image: {
      cover: cover4,
      preview: [classicPreview1],
    },
    interiors: {
      bedroom: 4,
      toilet: 4,
      parking_garage: 4,
      kitchen: 1,
    },
  },
  {
    id: 7,
    name: '3 Bedroom Contemporary',
    seller_name: 'Daniels Home',
    price: 5000000,
    location: 'Lagos',
    for: 'Rent',
    rent_payment_type: 'yearly',
    details: {
      land_size: 400,
      building_size: 240,
      year_built: 2018,
      year_renovated: null,
      floor_level: 'Bungalow',
    },
    status: 'Available',
    image: {
      cover: cover1,
      preview: [bungalowPreview1, bungalowPreview2, bungalowPreview3],
    },
    interiors: {
      bedroom: 3,
      toilet: 3,
      parking_garage: 2,
      kitchen: 1,
    },
  },
];
