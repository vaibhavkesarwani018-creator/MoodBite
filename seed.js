import 'dotenv/config';
import mongoose from 'mongoose';
import Dish from './models/Dish.js';
import Restaurant from './models/Restaurant.js';

const dishes = [
  { name: 'Veg Momos', moods: ['stressed', 'bored', 'tired'], diet: 'veg', cuisine: 'Tibetan', price: 120, spice: 'medium' },
  { name: 'Paneer Biryani', moods: ['happy', 'tired'], diet: 'veg', cuisine: 'Mughlai', price: 220, spice: 'medium' },
  { name: 'Chicken Biryani', moods: ['happy', 'tired'], diet: 'non-veg', cuisine: 'Mughlai', price: 260, spice: 'hot' },
  { name: 'Chocolate Brownie', moods: ['sad', 'stressed'], diet: 'veg', cuisine: 'Dessert', price: 150, spice: 'mild' },
  { name: 'Masala Dosa', moods: ['bored', 'happy'], diet: 'veg', cuisine: 'South Indian', price: 110, spice: 'medium' },
  { name: 'Spicy Chilli Paneer', moods: ['spicy', 'bored'], diet: 'veg', cuisine: 'Indo-Chinese', price: 200, spice: 'hot' },
  { name: 'Khichdi with Ghee', moods: ['sad', 'tired'], diet: 'veg', cuisine: 'Indian', price: 130, spice: 'mild' },
];

// TODO: replace with REAL Bhilai restaurants, areas and links before your demo.
const restaurantData = [
  { name: 'Sample Restaurant 1', area: 'Sector 6', address: 'Replace me', dishNames: ['Veg Momos', 'Spicy Chilli Paneer'], swiggyUrl: '', zomatoUrl: '' },
  { name: 'Sample Restaurant 2', area: 'Supela', address: 'Replace me', dishNames: ['Paneer Biryani', 'Chicken Biryani'], swiggyUrl: '', zomatoUrl: '' },
  { name: 'Sample Restaurant 3', area: 'Sector 6', address: 'Replace me', dishNames: ['Chocolate Brownie', 'Masala Dosa', 'Khichdi with Ghee'], swiggyUrl: '', zomatoUrl: '' },
];

await mongoose.connect(process.env.MONGO_URI);
await Dish.deleteMany();
await Restaurant.deleteMany();

const created = await Dish.insertMany(dishes);
const idByName = Object.fromEntries(created.map((d) => [d.name, d._id]));

await Restaurant.insertMany(
  restaurantData.map(({ dishNames, ...r }) => ({ ...r, dishes: dishNames.map((n) => idByName[n]) }))
);

console.log(`Seeded ${created.length} dishes and ${restaurantData.length} restaurants`);
await mongoose.disconnect();
