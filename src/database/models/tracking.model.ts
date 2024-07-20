
import mongoose, { Schema, model } from "mongoose";

const trackingSchema  = new Schema({
    newsLetterOwnerId:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        default:0
    }
}, {timestamps: true})

const Tracking = mongoose.models.Trackings || model('Trackings', trackingSchema);

export default Tracking;