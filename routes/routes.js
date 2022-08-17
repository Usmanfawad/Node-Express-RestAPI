const express = require('express');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;


//Post Method to insert data into mongo
router.post('/post', async (req, res) => {
    const data = new Model({
        address: req.body.address,
        status: req.body.status
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})