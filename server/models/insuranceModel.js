//Using mongoose for Model
import mongoose from 'mongoose';

const insuranceSchema = new mongoose.Schema({
  city: {type: String, required: true},
  state: {type: String, required: true},
  rate: {type: mongoose.Number, required: true},
});

export default mongoose.model('insurance', insuranceSchema);
