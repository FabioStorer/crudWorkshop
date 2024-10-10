import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
    plate: {
        type: Schema.Types.String,
        min: 7,
        max: 7,
        unique: true,
        required: true
    },
    model: {
        type: Schema.Types.String,
        required: true
    },
    year: {
        type: Schema.Types.String,
        min: 1950,
        max: 2024,
        unique: true,
        required: true
    },
    owner: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    maintenances: {
        type: Schema.Types.ObjectId,
        ref: 'Maintenance'
    }
});

const Vehicle = model('Vehicle', vehicleSchema);

export default Vehicle;