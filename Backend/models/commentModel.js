const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
      commentedBy:{
            type:String,
            default:'Guest'
      },
      blogId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'blogs',
      },
      comment:{
            type:String,
            required:true
      },
      commentedAt:{
            type:Date,
            default:Date.now()
      },
      isDeleted:{
            type:Boolean,
            default:false
      },
      deleteAt:{
            type:Date,
            default:null
      },
},{timestamps:true});


module.exports = mongoose.model('commentBlogs', commentSchema);