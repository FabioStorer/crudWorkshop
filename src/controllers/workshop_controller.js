import Workshop from '../models/workshop_model.js';

export const store = async (req, res) => {
    try {
        await Workshop.create(req.body);
        res.json(201);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Workshop.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Workshop.findById(req.params.id).populate('maintenances').exec();
        res.json(content);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        await Workshop.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Workshop.findByIdAndDelete(req.params.id).exec();
        res.json(200);
    } catch (error) {
        res.status(401).send(error.message);
    }
};