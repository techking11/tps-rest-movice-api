const Movice = require("../models/movice");

/**
 * /api/movices
 * GET All Movices
 */

exports.listMovices = async (req, res) => {
    let {limit = 10, page = 1, category, search} = req.query;
    const limitRecords = parseInt(limit);
    const skip = (page - 1) * limit;

    let query = {};
    if(search) {
        query = {$text: {$search: search}};
    }

    if(category) query.category = category;

    try {
        //const movices = await Movice.find({category: category}).limit(limitRecords).skip(skip);
        const movices = await Movice.find(query).limit(limitRecords).skip(skip);
        res.json({page: page, limt: limitRecords, movices});
    } catch (error) {
        res.status(400).json({message: err});
    }
};

/**
 * /api/movices
 * POST Single Movice
 */

exports.insertSingleMovice = async(req, res) => {
    const newMovice = new Movice({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        thumbnail: req.body.thumbnail
    });

    try {
        await newMovice.save();
        res.json(newMovice);
    } catch (error) {
        res.status(400).json({message: err});
    }
}

/**
 * /api/movices/:id
 * PATCH Single Movice
 */

exports.updateSingleMovice = async(req, res) => {
    let paramId = req.params.id;
    let name = req.body.name;

    try {
        const updateMovice = await Movice.updateOne({_id: paramId}, {name: name});
        res.json(updateMovice);
    } catch (error) {
        res.status(400).json({message: err});
    }
}

/**
 * /api/movices/:id
 * DELETE Single Movice
 */

exports.deleteSingleMovice = async(req, res) => {
    let paramId = req.params.id;

    try {
        const data = await Movice.deleteOne({_id: paramId});
        res.json(data);
    } catch (error) {
        res.status(400).json({message: err});
    }
}