const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    Topic:{
        type:String,
        required:true
    },

    Name:{
        type:String,
        required:true
    },

    Date:{
        type:String,
        required:true
    },

    Address:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Posts',postSchema);