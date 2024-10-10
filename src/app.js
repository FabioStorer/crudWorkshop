import express from 'express';
import 'dotenv/config.js';
import './db.js';
import maintenance_route from './routes/maintenance_route.js';
import vehicle_route from './routes/vehicle_route.js';
import workshop_route from './routes/workshop_route.js';

const app = express();

app.use(express.json());

app.use('/maintenance', maintenance_route);
app.use('/vehicle', vehicle_route);
app.use('/workshop', workshop_route);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at port ${process.env.API_PORT}`);
});