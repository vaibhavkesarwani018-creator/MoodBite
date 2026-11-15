import 'dotenv/config';
import mongoose from 'mongoose';

import Restaurant from './models/Restaurant.js';
import Dish from './models/Dish.js';

const restaurants = [

    // =========================
    // BHILAI
    // =========================

    {
        name: 'Subway',
        city: 'bhilai',
        moods: ['cheesy'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Subway+Nehru+Nagar+Bhilai/@21.2186297,81.313259,15z/data=!4m10!1m2!2m1!1ssubway!3m6!1s0x3a293dc42ae5375b:0xb9b4836525ee5f1d!8m2!3d21.2051714!4d81.3231518!15sCgZzdWJ3YXkiA4gBAVoIIgZzdWJ3YXmSAQ1zYW5kd2ljaF9zaG9w4AEA!16s%2Fg%2F11ntl7ph82?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/subway-nehru-nagar-rest1401492',
        zomatoUrl: ''
    },

    {
        name: 'The Basil Street',
        city: 'bhilai',
        moods: ['cheesy'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/basil+street+bhilai/data=!4m2!3m1!1s0x3a293dcda9ca1869:0x3e6f33574054a8c4?sa=X&ved=1t:242&ictx=111',
        swiggyUrl: '',
        zomatoUrl: 'https://www.zomato.com/durg-bhilai/the-basil-street-nehru-nagar/order'
    },

    {
        name: 'Hotel Grand Dhillon',
        city: 'bhilai',
        moods: [],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Grand+Dhillon/@21.2006517,81.3211213,17z/data=!4m9!3m8!1s0x3a293cd92ea42ce7:0x92eca40e0a2bf89b!5m2!4m1!1i2!8m2!3d21.2006467!4d81.3236962!16s%2Fg%2F1tffmr_p?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/hotel-grand-dhillon-priyadarsani-parisar-west-nehru-nagar-chowk-bhilai-rest100068',
        zomatoUrl: ''
    },

    {
        name: 'Kake Di Hatti',
        city: 'bhilai',
        moods: ['spicy'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Kake+Di+Hatti+Bhilai/@21.2049966,81.3206288,17z/data=!3m1!4b1!4m6!3m5!1s0x3a293df252e92c1f:0xf7bcbc07af97131f!8m2!3d21.2049916!4d81.3232037!16s%2Fg%2F11vzgp06sn?hl=en&entry=ttu',
        swiggyUrl: '',
        zomatoUrl: 'https://www.zomato.com/durg-bhilai/kake-di-hatti-2-nehru-nagar/order'
    },

    {
        name: "Haldiram's",
        city: 'bhilai',
        moods: ['spicy', 'sweet'],
        buffetAvailable: false,
        mapUrl: "https://www.google.com/maps/place/Haldiram's+-+Surya+Treasure+Island+Mall/@21.2190322,81.3205587,17z/data=!3m1!4b1!4m6!3m5!1s0x3a293d1f8d925b3f:0xe10cb06de5ea191a!8m2!3d21.2190272!4d81.3231336!16s%2Fg%2F11t_sg_hsz?hl=en&entry=ttu",
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/haldirams-restaurant-junwani-road-nehru-nagar-rest726509',
        zomatoUrl: ''
    },

    {
        name: "Domino's Pizza",
        city: 'bhilai',
        moods: ['cheesy'],
        buffetAvailable: false,
        mapUrl: "https://www.google.com/maps/place/Domino's+Pizza+%7C+Surya+Treasure+Island+Bhilai/@21.2190322,81.3205587,17z/data=!3m1!5s0x3a293d2388b4ca6d:0x7ab4b26c42fd22bd!4m6!3m5!1s0x3a293d3c62aff2b3:0x74869a3f22e2fcfd!8m2!3d21.2180573!4d81.3226864!16s%2Fg%2F1pv5tkn55?hl=en&entry=ttu",
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/dominos-pizza-nehru-nagar-durg-bhilai-rest345965',
        zomatoUrl: ''
    },

    {
        name: 'KFC',
        city: 'bhilai',
        moods: ['spicy'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/KFC/@21.2177106,81.3200362,17z/data=!3m2!4b1!5s0x3a293d3c8958afd5:0xdd0cbad7d2e96bb5!4m6!3m5!1s0x3a293d3c974b8abb:0xb8fa0106f307f223!8m2!3d21.2177056!4d81.3226111!16s%2Fg%2F124sthtmr?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/kfc-nehru-nagar-durg-bhilai-rest126739',
        zomatoUrl: ''
    },

    {
        name: 'Ek Saath Specialty Coffee & Pizzeria',
        city: 'bhilai',
        moods: ['cheesy', 'period-cravings'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Ek+Saath+Specialty+Coffee+%26+Pizzeria+OG/@21.2073925,81.317472,17z/data=!3m1!4b1!4m6!3m5!1s0x3a293ded4a777e57:0x892618694814b3f0!8m2!3d21.2073875!4d81.3200469!16s%2Fg%2F11vzb8288r?entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/ek-saath-specialty-coffee-and-pizzeria-nehru-nagar-rest1227686',
        zomatoUrl: ''
    },

    {
        name: 'Crossroads Restaurant',
        city: 'bhilai',
        moods: [],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Crossroads+Restaurant/@21.2177741,81.330096,17z/data=!3m2!4b1!5s0x3a293d31c72771af:0x7f1d7187be94ef5d!4m6!3m5!1s0x3a293d31c3e65f91:0xb11eb21ef3717df9!8m2!3d21.2177691!4d81.3326709!16s%2Fg%2F11f1k107w_?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/cross-roads-restaurant-kohka-junwani-rest479601',
        zomatoUrl: ''
    },

    {
        name: 'The Belgian Waffle Co.',
        city: 'bhilai',
        moods: ['sweet'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/The+Belgian+Waffle+Co/@21.2177741,81.330096,17z/data=!4m6!3m5!1s0x3a293d4259fe6ed7:0x6045ca2015f93581!8m2!3d21.2140327!4d81.3230098!16s%2Fg%2F11t_vkvkcb?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/the-belgian-waffle-co-chpl-dream-homes-junwani-rest710873',
        zomatoUrl: ''
    },

    {
        name: 'Jaika Bakery',
        city: 'bhilai',
        moods: ['sweet'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Jaika+Bakery/@21.2150096,81.3150354,17z/data=!3m1!4b1!4m6!3m5!1s0x3a293d1808ccda95:0x254e1aeeb029cd15!8m2!3d21.2150046!4d81.3176103!16s%2Fg%2F124svccxz?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/jaika-bakery-smriti-nagar-junwani-road-smriti-nagar-rest99278',
        zomatoUrl: ''
    },

    {
        name: 'Naturals Ice Cream',
        city: 'bhilai',
        moods: ['sweet'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Naturals+Ice+Cream/@21.2069492,81.3267389,17z/data=!3m2!4b1!5s0x3a293d28798a769b:0xed395c699136536!4m6!3m5!1s0x3a293d26ffca91dd:0x6207403502b64613!8m2!3d21.2069442!4d81.3293138!16s%2Fg%2F11bz0dcw23?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/natural-ice-cream-nehru-nagar-durg-bhilai-rest99194',
        zomatoUrl: ''
    },

    {
        name: 'Indian Coffee House',
        city: 'bhilai',
        moods: ['period-cravings'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Indian+Coffee+House/@21.2174187,81.3271877,17z/data=!3m1!4b1!4m6!3m5!1s0x3a293d002787a79b:0x609b0282e1d92a5b!8m2!3d21.2174137!4d81.3297626!16s%2Fg%2F11y2ww_4fp?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/bhilai/indian-coffee-house-sector-10-sector-10-market-bhilai-rest728042',
        zomatoUrl: ''
    },


    // =========================
    // JABALPUR
    // =========================

    {
        name: 'Subway',
        city: 'jabalpur',
        moods: ['cheesy'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Subway+Napier+Town+Jabalpur/@23.1623336,79.9343569,17z/data=!3m1!4b1!4m6!3m5!1s0x3981afbcb508f09f:0x1648d9929936a7a5!8m2!3d23.1623287!4d79.9369318!16s%2Fg%2F11zh72lmyz?entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/subway-anand-talkies-road-russel-chowk-rest1400394',
        zomatoUrl: ''
    },

    {
        name: "Domino's Pizza",
        city: 'jabalpur',
        moods: ['cheesy'],
        buffetAvailable: false,
        mapUrl: "https://www.google.com/maps/place/Domino's+Pizza+%7C+Russel+Chowk+Jabalpur/@23.1623336,79.9343569,17z/data=!3m1!5s0x3981ae0dd6a7d595:0xc1c97aa18f2d757f!4m6!3m5!1s0x3981af005cc17fc7:0xa0266833319fc709!8m2!3d23.1639702!4d79.9360891!16s%2Fg%2F11vysmnwrq?entry=ttu",
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/dominos-pizza-laxmipur-vijay-nagar-rest97398',
        zomatoUrl: ''
    },

    {
        name: 'Vijan Mahal',
        city: 'jabalpur',
        moods: [],
        buffetAvailable: true,
        mapUrl: 'https://www.google.com/maps/place/Hotel+Vijan+Mahal/@23.123866,79.9651627,17z/data=!3m1!4b1!4m9!3m8!1s0x3981ac4dc8b58e85:0x40959fea276573c8!5m2!4m1!1i2!8m2!3d23.1238611!4d79.9677376!16s%2Fg%2F11b8_zwmtr?entry=ttu',
        swiggyUrl: '',
        zomatoUrl: ''
    },

    {
        name: 'Shawn Elizey',
        city: 'jabalpur',
        moods: [],
        buffetAvailable: true,
        mapUrl: 'https://www.google.com/maps/place/SHAWN+ELIZEY/@23.1284146,79.8676393,17z/data=!3m1!4b1!4m9!3m8!1s0x3981b36306ab629b:0x4abec8ac48e0dc29!5m2!4m1!1i2!8m2!3d23.1284097!4d79.8702142!16s%2Fg%2F11h40xwmmx?entry=ttu',
        swiggyUrl: '',
        zomatoUrl: ''
    },

    {
        name: 'Wang Chinese Cuisine',
        city: 'jabalpur',
        moods: ['spicy', 'period-cravings'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Wang+Chinese+Cuisine/@23.148638,79.9281819,17z/data=!3m1!4b1!4m6!3m5!1s0x3981adc1bcdc0417:0x7da14f7440e6b001!8m2!3d23.1486331!4d79.9307568!16s%2Fg%2F11flc5lkq2?entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/wang-chinese-cuisine-katanga-square-gorakhpur-rest160812',
        zomatoUrl: ''
    },

    {
        name: '99 Pancakes',
        city: 'jabalpur',
        moods: ['sweet'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/99+Pancakes/@23.1506972,79.9325747,17z/data=!3m2!4b1!5s0x3981ade3c4127323:0x4423f471fc18398c!4m6!3m5!1s0x3981af3b5505d6e9:0xcf96e34d689892b!8m2!3d23.1506923!4d79.9351496!16s%2Fg%2F11h3lcw43d?entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/99-pancakes-katanga-square-gorakhpur-rest262899',
        zomatoUrl: ''
    },

    {
        name: 'The Oven Classics',
        city: 'jabalpur',
        moods: ['sweet'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/The+Oven+Classics+Bakery/@23.1482696,79.9242412,17z/data=!3m1!4b1!4m6!3m5!1s0x3981ad1b6426f2d5:0xef8e6be22457e74b!8m2!3d23.1482647!4d79.9268161!16s%2Fg%2F11svdw2hrh?hl=en&entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/the-oven-classics-cantt-station-road-south-civil-lines-rest226740',
        zomatoUrl: ''
    },

    {
        name: 'Barbeque Nation',
        city: 'jabalpur',
        moods: [],
        buffetAvailable: true,
        mapUrl: 'https://www.google.com/maps/place/Barbeque+Nation+-+Jagat+Mall/@23.1524215,79.9322242,17z/data=!3m1!4b1!4m6!3m5!1s0x3981ad32a4b6762f:0xf1db19d7967113c2!8m2!3d23.1524184!4d79.9338365!16s%2Fg%2F11pyhjs416?entry=ttu',
        swiggyUrl: '',
        zomatoUrl: ''
    },

    {
        name: "Haldiram's",
        city: 'jabalpur',
        moods: ['spicy', 'sweet'],
        buffetAvailable: false,
        mapUrl: "https://www.google.com/maps/place/Haldiram's+Sweet+%26+Restaurant+Jabalpur/@23.1600834,79.9273581,17z/data=!3m1!4b1!4m6!3m5!1s0x3981afb6e60c28df:0x3d37e4cdc0bd0c30!8m2!3d23.1600785!4d79.929933!16s%2Fg%2F11s5csylmq?entry=ttu",
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/haldirams-restaurant-bloom-chowk-civic-center-jab-rest622716',
        zomatoUrl: ''
    },

    {
        name: 'Darbar Veg Restaurant',
        city: 'jabalpur',
        moods: ['spicy'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Darbar+veg+restaurant/@23.1670396,79.9333165,17z/data=!3m1!4b1!4m6!3m5!1s0x3981af0c2702b617:0xd7fc8363ae6266e4!8m2!3d23.1670347!4d79.9358914!16s%2Fg%2F11gy9zvm0j?entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/darbar-veg-restaurant-marhatal-rest162357',
        zomatoUrl: ''
    },

    {
        name: 'Sheesha Sky Lounge',
        city: 'jabalpur',
        moods: [],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Sheesha+Sky+Lounge+Jabalpur/@23.1663438,79.9306939,17z/data=!3m1!4b1!4m6!3m5!1s0x3981afd1074960d7:0x4a7b8c9c66274500!8m2!3d23.1663389!4d79.9332688!16s%2Fg%2F11fhl9jyc1?entry=ttu',
        swiggyUrl: '',
        zomatoUrl: 'https://www.zomato.com/jabalpur/sheesha-sky-lounge-napier-town'
    },

    {
        name: 'Naturals Ice Cream',
        city: 'jabalpur',
        moods: ['sweet'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Naturals+Ice+Cream/@23.1637666,79.9429805,17z/data=!3m1!4b1!4m6!3m5!1s0x3981afb64168ec83:0xcf28b1711a05cc95!8m2!3d23.1637617!4d79.9455554!16s%2Fg%2F11rwb0y5db?entry=ttu',
        swiggyUrl: 'https://www.swiggy.com/city/jabalpur/natural-ice-cream-muskan-park-south-civil-line-swami-dayanand-rest538236',
        zomatoUrl: ''
    },

    {
        name: 'Indian Coffee House',
        city: 'jabalpur',
        moods: ['period-cravings'],
        buffetAvailable: false,
        mapUrl: 'https://www.google.com/maps/place/Indian+Coffee+House/@23.1540833,79.9463548,17z/data=!3m2!4b1!5s0x3981add894c74421:0xb1d3796e399a5326!4m6!3m5!1s0x3981add8eb101a65:0xe3bf84c1e41ef4cc!8m2!3d23.1540784!4d79.9489297!16s%2Fg%2F1tf7w3k_?entry=ttu',
        swiggyUrl: '',
        zomatoUrl: 'https://www.zomato.com/jabalpur/restaurants/indian-coffee-house-1?subzone=179121&category=2'
    }

];

await mongoose.connect(process.env.MONGO_URI);

console.log('Connected to MongoDB');


await Restaurant.deleteMany({});
await Dish.deleteMany({});

for (const restaurant of restaurants) {

    await Restaurant.create({

        name: restaurant.name,
        city: restaurant.city,

        area: restaurant.city === 'bhilai' ? 'Bhilai' : 'Jabalpur',

        address: restaurant.city === 'bhilai'
            ? 'Bhilai, Chhattisgarh'
            : 'Jabalpur, Madhya Pradesh',

        moods: restaurant.moods,
        buffetAvailable: restaurant.buffetAvailable,

        mapUrl: restaurant.mapUrl,
        swiggyUrl: restaurant.swiggyUrl,
        zomatoUrl: restaurant.zomatoUrl,

        dishes: []

    });

}

console.log('Successfully added', restaurants.length, 'restaurants');

await mongoose.disconnect();