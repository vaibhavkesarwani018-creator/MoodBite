
import { Router } from 'express';
import Restaurant from '../models/Restaurant.js';

const router = Router();

// Return the five available moods
router.get('/moods', (req, res) => {

    res.json([
        'cheesy',
        'spicy',
        'celebratory',
        'period-cravings',
        'sweet'
    ]);

});

// Return all available restaurant areas
router.get('/areas', async (req, res) => {

    try {

        const areas = await Restaurant.distinct('area');

        res.json(areas);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

export default router;
