const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({ // new mongoose.Schema
  title: {type: String, required: true, unique: true},
  level: {type: String, enum: [ "Easy Peasy", "Amateur Chef", "UltraPro Chef" ]},
  ingredients: {type: Array},
  cuisine: {type: String, required: true},
  dishType:{type: String, enum:["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]},
  image: {type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
  duration: {type: Number, min: 0},
  creator: {type: String},
  created: {type: Date, default: new Date()}
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;