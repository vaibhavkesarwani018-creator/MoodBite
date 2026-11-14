
import { Router } from 'express';

import Dish from '../models/Dish.js';
import Restaurant from '../models/Restaurant.js';

const router = Router();

router.get('/', async (req, res) => {

    try {

        const { mood, area, diet, maxPrice } = req.query;

        // Check whether a mood was selected
        if (!mood) {
            return res.status(400).json({
                message: 'Please select a mood'
            });
        }

        const moodValue = mood.toLowerCase().trim();

        // Celebratory means buffet restaurants
        if (moodValue === 'celebratory') {

            const filter = {
                buffetAvailable: true
            };

            if (area) {
                filter.area = area;
            }

            const restaurants = await Restaurant.find(filter)
                .populate('dishes');

            return res.json(restaurants);
        }

        // These are the remaining valid moods
        const allowedMoods = [
            'cheesy',
            'spicy',
            'period-cravings',
            'sweet'
        ];

        if (!allowedMoods.includes(moodValue)) {
            return res.status(400).json({
                message: 'Invalid mood'
            });
        }

        // Find dishes suitable for the selected mood
        const dishFilter = {
            moods: moodValue
        };

        if (diet) {
            dishFilter.diet = diet;
        }

        if (maxPrice !== undefined && maxPrice !== '') {

            const price = Number(maxPrice);

            if (!Number.isFinite(price) || price < 0) {
                return res.status(400).json({
                    message: 'Invalid price'
                });
            }

            dishFilter.price = {
                $lte: price
            };
        }

        const matchingDishes = await Dish.find(dishFilter);

        if (matchingDishes.length === 0) {
            return res.json([]);
        }

        // Get the IDs of matching dishes
        const dishIds = matchingDishes.map(
            dish => dish._id
        );

        // Find restaurants serving those dishes
        const restaurantFilter = {
            dishes: {
                $in: dishIds
            }
        };

        if (area) {
            restaurantFilter.area = area;
        }

        const restaurants = await Restaurant.find(restaurantFilter)
            .populate('dishes');

        // Display only the dishes matching the selected mood
        const matchingIds = matchingDishes.map(
            dish => dish._id.toString()
        );

        const results = restaurants.map(restaurant => {

            const restaurantData = restaurant.toObject();

            restaurantData.dishes = restaurantData.dishes.filter(
                dish => matchingIds.includes(dish._id.toString())
            );

            return restaurantData;
        });

        res.json(results);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

export default router;
