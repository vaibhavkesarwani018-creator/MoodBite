import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latitude: Number,
    longitude: Number,
    mapUrl: String,

    buffetAvailable: {
        type: Boolean,
        default: false
    },

    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }],
    swiggyUrl: String,
    zomatoUrl: String
}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);
