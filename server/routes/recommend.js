
import { Router } from 'express';

import Restaurant from '../models/Restaurant.js';
import '../models/Dish.js';

const router = Router();

router.get('/', async (req, res) => {

    try {

        const { mood, city, area } = req.query;

        if (!mood || !city) {
            return res.status(400).json({
                message: 'Please select both mood and city'
            });
        }

        const moodValue = mood.toLowerCase().trim();
        const cityValue = city.toLowerCase().trim();

        const allowedCities = ['bhilai', 'jabalpur'];

        if (!allowedCities.includes(cityValue)) {
            return res.status(400).json({
                message: 'Invalid city selected'
            });
        }

        const allowedMoods = [
            'cheesy',
            'spicy',
            'celebratory',
            'period-cravings',
            'sweet'
        ];

        if (!allowedMoods.includes(moodValue)) {
            return res.status(400).json({
                message: 'Invalid mood selected'
            });
        }

        const filter = {
            city: cityValue
        };

        if (area) {
            filter.area = area.trim();
        }

        if (moodValue === 'celebratory') {

            filter.buffetAvailable = true;

        } else {

            filter.moods = moodValue;

        }

        const restaurants = await Restaurant.find(filter)
            .populate('dishes');

        res.json(restaurants);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: 'Something went wrong while finding restaurants'
        });

    }

});

export default router;
