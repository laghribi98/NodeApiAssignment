let mongoose = require("mongoose");
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
  id: Number,
  dateDeRendu: String,
  nom: String,
  rendu: Boolean,
  auteur: String,
  remarque: String,
  imageProf : String,
  imageMatiere:String,
  matiere:{
    type:Schema.Types.ObjectId,
    ref:"Matiere",
  }
});
AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model("Assignment", AssignmentSchema);
