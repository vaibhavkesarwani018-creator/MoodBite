
import 'dotenv/config';
import mongoose from 'mongoose';

import Dish from './models/Dish.js';
import Restaurant from './models/Restaurant.js';

const restaurantData = [

    {
        name: 'Shivkashi',
        area: 'Sector 6',
        address: 'Sector 6 A Market, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shivkashi+Sector+6+A+Market+Bhilai',
        swiggyUrl: '',
        zomatoUrl: '',
        buffetAvailable: false,

        dishes: [

            {
                name: 'Aalu Tikki',
                moods: ['spicy'],
                diet: 'veg',
                cuisine: 'Street Food',
                price: 60,
                spice: 'medium'
            },
            {
                name: 'Bhelpuri',
                moods: ['spicy'],
                diet: 'veg',
                cuisine: 'Street Food',
                price: 50,
                spice: 'medium'
            },
            {
                name: 'Butter Dosa',
                moods: ['period-cravings'],
                diet: 'veg',
                cuisine: 'South Indian',
                price: 120,
                spice: 'mild'
            },
            {
                name: 'Cheese Pav Bhaji',
                moods: ['cheesy', 'spicy'],
                diet: 'veg',
                cuisine: 'Street Food',
                price: 140,
                spice: 'medium'
            },
            {
                name: 'Classic Pani Puri',
                moods: ['spicy'],
                diet: 'veg',
                cuisine: 'Street Food',
                price: 60,
                spice: 'hot'
            }

        ]
    },

    {
        name: 'Hari Raj Restaurant',
        area: 'Sector 5',
        address: 'Civic Centre, Sector 5, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hari+Raj+Restaurant+Civic+Centre+Bhilai',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/hari-raj-restaurant-civic-center-civic-centre-bhilai-rest256586',
        zomatoUrl: '',
        buffetAvailable: false,

        dishes: [

            {
                name: 'Sada Dosa',
                moods: ['period-cravings'],
                diet: 'veg',
                cuisine: 'South Indian',
                price: 135,
                spice: 'mild'
            },
            {
                name: 'Masala Dosa',
                moods: ['spicy'],
                diet: 'veg',
                cuisine: 'South Indian',
                price: 165,
                spice: 'medium'
            },
            {
                name: 'Onion Uttapam',
                moods: ['period-cravings'],
                diet: 'veg',
                cuisine: 'South Indian',
                price: 165,
                spice: 'mild'
            }

        ]
    },

    {
        name: 'Indian Coffee House',
        area: 'Supela',
        address: 'Akash Ganga, Supela, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Indian+Coffee+House+Akash+Ganga+Supela+Bhilai',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/indian-coffee-house-akash-ganga-akash-ganga-supela-rest728502',
        zomatoUrl: '',
        buffetAvailable: false,

        dishes: [

            {
                name: 'Masala Dosa',
                moods: ['spicy'],
                diet: 'veg',
                cuisine: 'South Indian',
                price: 198,
                spice: 'medium'
            },
            {
                name: 'Sada Dosa',
                moods: ['period-cravings'],
                diet: 'veg',
                cuisine: 'South Indian',
                price: 132,
                spice: 'mild'
            },
            {
                name: 'Hot Coffee',
                moods: ['period-cravings', 'sweet'],
                diet: 'veg',
                cuisine: 'Beverages',
                price: 42,
                spice: 'mild'
            }

        ]
    },

    {
        name: 'Nukkad The Chaitastic Teafe',
        area: 'Nehru Nagar',
        address: 'Commercial Complex, Nehru Nagar, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nukkad+The+Chaitastic+Teafe+Nehru+Nagar+Bhilai',
        swiggyUrl: '',
        zomatoUrl: '',
        buffetAvailable: false,

        dishes: [

            {
                name: 'Veg Biryani',
                moods: [],
                diet: 'veg',
                cuisine: 'Indian',
                price: 224,
                spice: 'medium'
            },
            {
                name: 'Corn Delight Pizza',
                moods: ['cheesy'],
                diet: 'veg',
                cuisine: 'Italian',
                price: 194,
                spice: 'mild'
            },
            {
                name: 'Papdi Chaat',
                moods: ['spicy'],
                diet: 'veg',
                cuisine: 'Street Food',
                price: 133,
                spice: 'medium'
            }

        ]
    },

    {
        name: 'The Grand Cafe',
        area: 'Nehru Nagar',
        address: 'Nehru Nagar Square, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The+Grand+Cafe+Nehru+Nagar+Bhilai',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/the-grand-cafe-nehru-nagar-rest1441012',
        zomatoUrl: '',
        buffetAvailable: false,

        dishes: [

            {
                name: 'Rasmalai',
                moods: ['sweet'],
                diet: 'veg',
                cuisine: 'Dessert',
                price: 90,
                spice: 'mild'
            },
            {
                name: 'Gulab Jamun',
                moods: ['sweet'],
                diet: 'veg',
                cuisine: 'Dessert',
                price: 85,
                spice: 'mild'
            }

        ]
    },

    {
        name: 'Hangamaa Cafe',
        area: 'Nehru Nagar',
        address: 'Nehru Nagar, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hangamaa+Cafe+Nehru+Nagar+Bhilai',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/hangamaa-cafe-nehru-nagar-rest1011574',
        zomatoUrl: '',
        buffetAvailable: false,

        dishes: [

            {
                name: 'Cheese Broccoli Soup',
                moods: ['cheesy', 'period-cravings'],
                diet: 'veg',
                cuisine: 'Continental',
                price: 249,
                spice: 'mild'
            },
            {
                name: 'Cheese Balls',
                moods: ['cheesy'],
                diet: 'veg',
                cuisine: 'Snacks',
                price: 209,
                spice: 'mild'
            },
            {
                name: 'Hot Chocolate',
                moods: ['sweet', 'period-cravings'],
                diet: 'veg',
                cuisine: 'Beverages',
                price: 209,
                spice: 'mild'
            }

        ]
    },

    {
        name: 'The Coal Factory',
        area: 'Power House',
        address: 'Hotel Ashish International, Power House, Bhilai, Chhattisgarh',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=The+Coal+Factory+Hotel+Ashish+International+Bhilai',
        swiggyUrl: '',
        zomatoUrl: 'https://www.zomato.com/durg-bhilai/the-coal-factory-janjgiri/order',
        buffetAvailable: true,

        // Buffet menu and price should be confirmed with the restaurant.
        dishes: []

    }

];

// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);

console.log('Connected to MongoDB');

// Remove old sample data
await Dish.deleteMany({});
await Restaurant.deleteMany({});

// Insert new restaurants and their dishes
for (const restaurantDataItem of restaurantData) {

    let createdDishes = [];

    if (restaurantDataItem.dishes.length > 0) {

        createdDishes = await Dish.insertMany(
            restaurantDataItem.dishes
        );

    }

    const newRestaurant = new Restaurant({

        name: restaurantDataItem.name,
        area: restaurantDataItem.area,
        address: restaurantDataItem.address,
        mapUrl: restaurantDataItem.mapUrl,
        swiggyUrl: restaurantDataItem.swiggyUrl,
        zomatoUrl: restaurantDataItem.zomatoUrl,
        buffetAvailable: restaurantDataItem.buffetAvailable,

        dishes: createdDishes.map(dish => dish._id)

    });

    await newRestaurant.save();

}

console.log('Successfully added restaurants and dishes!');

// Disconnect from MongoDB
await mongoose.disconnect();
