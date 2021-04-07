let matiere = require("../model/Matiere");

/*
// Récupérer tous les Matieres (GET)
function getMatieres(req, res){
    Matiere.find((err, Matieres) => {
        if(err){
            res.send(err)
        }

        res.send(Matieres);
    });
}
*/
// AVEC PAGINATION
function getMatieres(req, res) {
  var aggregateQuery = matiere.aggregate();
  matiere.aggregatePaginate(
    aggregateQuery,
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, matieres) => {
      if (err) {
        res.send(err);
      }

      res.send(matieres);
    }
  );
}

// Récupérer un Matiere par son id (GET)
function getMatiere(req, res) {
  let matiereId = req.params.id;

  matiere.findOne({ id: matiereId }, (err, matiere) => {
    if (err) {
      res.send(err);
    }
    res.json(matiere);
  });
}

// Ajout d'un Matiere (POST)
function postMatiere(req, res) {
  let Matiere = new Matiere();
  matiere.id = req.body.id;
  matiere.libelle = req.body.libelle;
  matiere.profImage = req.body.profImage;
  matiere.matiereImage = req.body.matiereImage;

  console.log("POST Matiere reçu :");
  console.log(matiere);

  Matiere.save((err) => {
    if (err) {
      res.send("cant post Matiere ", err);
    }
    res.json({ message: `${Matiere.nom} saved!` });
  });
}

// Update d'un Matiere (PUT)
function updateMatiere(req, res) {
  console.log("UPDATE recu Matiere : ");
  console.log(req.body);
  Matiere.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, Matiere) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json({ message: "updated" });
      }

      // console.log('updated ', Matiere)
    }
  );
}

// suppression d'un Matiere (DELETE)
function deleteMatiere(req, res) {
  Matiere.findByIdAndRemove(req.params.id, (err, Matiere) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${Matiere.nom} deleted` });
  });
}

module.exports = {
  getMatieres,
  postMatiere,
  getMatiere,
  updateMatiere,
  deleteMatiere,
};
