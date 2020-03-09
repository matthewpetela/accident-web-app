import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    cityName: {type: String, required:true},
    population: {type: mongoose.Number, required:true},
    crashData:{
        crashes: mongoose.Number,
        insurance: String
    }
});

export default mongoose.model('cities', citySchema);