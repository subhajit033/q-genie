import mongoose, { Schema, model } from 'mongoose';

const trackingSchema = new Schema({
  newsLetterOwnerId: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Tracking =
  mongoose.models.Trackings || model('Trackings', trackingSchema);

export default Tracking;
