import Maintenance from '../models/maintenance_model.js';

export const store = async (req, res) => {
    try {
        const price = services => {
            let add = 0;
            services.forEach((service) => {
                add += service.price
            })
            return add;
        }
        await Maintenance.create({
            workshop: req.body.workshop,
            vehicle: req.body.vehicle,
            services: req.body.services,
            date: req.body.date,
            totalCost: price(req.body.services)
        });
        res.json(201);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Maintenance.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Maintenance.findById(req.params.id).populate(['workshop', 'vehicle', 'services']).exec();
        res.json(content);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Maintenance.findByIdAndDelete(req.params.id).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};