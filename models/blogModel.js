const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true
      },
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blogUser',
            required:true
      },
      category: {
            type: String,
            required: true
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