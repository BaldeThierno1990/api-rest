const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  location: { type: String },
  userId: { type: String },

  price: { type: Number },
});

module.exports = mongoose.model("Thing", thingSchema);
