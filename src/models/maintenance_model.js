import { Schema, model } from "mongoose";


const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    services: [new Schema({
        name: {
            type: Schema.Types.String,
            required: true
        },
        price: {
            type: Schema.Types.Number,
            required: true
        }
    })],
    date: {
        type: Schema.Types.Date,
        required: true
    },
    totalCost: {
        type: Schema.Types.Number,
        default: 0
    }
});

const Maintenance = model('Maintenance', maintenanceSchema);

export default Maintenance;