
var mongoose = require('mongoose');

// Create the MovieSchema.
var sceneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    comment: {
        type: [String],
    },

});
// Export the model schema.
module.exports = sceneSchema;
