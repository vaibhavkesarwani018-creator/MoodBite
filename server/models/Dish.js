import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    moods: [{
        type: String,
        lowercase: true
    }],
    diet: {
        type: String,
        enum: ['veg', 'non-veg'],
        required: true
    },
    cuisine: String,
    price: {
        type: Number,
        required: true,
        min: 0
    },
    spice: {
        type: String,
        default: 'medium'
    }
}, { timestamps: true });

export default mongoose.model('Dish', dishSchema);
