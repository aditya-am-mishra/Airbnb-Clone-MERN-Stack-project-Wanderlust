
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  }
});

// Add passport-local-mongoose plugin to handle password and authentication methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
