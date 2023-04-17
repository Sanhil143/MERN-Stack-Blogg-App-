const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true
      },
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blogUser',
            
      },
      category: {
            type: String,
            required: true
      },
      blog:{
            type:String,
            required:true
      },
      comments:{
            type:Number,
            default:0
      },
      deletedAt: {
            type: Date,
            default: null
      },
      isDeleted: {
            type: Boolean,
            default: false
      },
      publishedAt: {
            type: Date,
            default: Date.now()
      },
      isPublished: {
            type: Boolean,
            default: true
      }
}, { timestamps: true });

module.exports = new mongoose.model('blogs', blogSchema);