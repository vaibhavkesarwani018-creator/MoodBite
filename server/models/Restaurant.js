
import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true,
        lowercase: true
    },

    area: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    moods: [{
        type: String,
        lowercase: true
    }],

    latitude: Number,
    longitude: Number,

    mapUrl: String,
    swiggyUrl: String,
    zomatoUrl: String,

    buffetAvailable: {
        type: Boolean,
        default: false
    },

    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }]

}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);
