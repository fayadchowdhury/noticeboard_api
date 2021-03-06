const { model, Schema } = require('mongoose');

const MaterialSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    materialtype: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    adminid: {
        type: String,
        required: true
    }
})

module.exports = model("Material", MaterialSchema);