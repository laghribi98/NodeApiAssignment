const { SchemaType } = require("mongoose");
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let MatiereSchema = Schema({
  id: Number,
  libelle : String,
  profImage: String,
  matiereImage : String,
  assignments : [{
      type:Schema.Types.ObjectId,
      ref:"Assignments",
  }]
});
MatiereSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model("Matiere", MatiereSchema);