const db = require('../db/index');

const bandasController = {
    index:function(req, res) {
        let bandas = []
        for (let i = 0; i < db.lista.length; i++) {
          bandas.push (db.lista[i])}
        res.render('listadoBandas',{listado: bandas});
      },

    id: function(req,res){
      let id= req.params.id
      let resultados
      for (let i = 0; i < db.lista.length; i++) {
        if(id == db.lista[i].id){
          resultados= db.lista[i]}}
      res.render('detalleBandas',{listado:resultados})
    },

    genero: function(req,res){
      let generos = req.params.genero.toLowerCase()
      let resultados = [];
      for (let i = 0; i < db.lista.length; i++) {
        if (generos == db.lista[i].genero.toLowerCase()) {
          resultados.push(db.lista[i])
        }
      }
      res.render('porGenero',{listado: resultados})
    }
}
module.exports = bandasController;