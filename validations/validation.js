const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;


const isValidId = (objectId) => {
      return mongoose.Types.ObjectId.isValid(objectId)
} 
module.exports = {isValidId}