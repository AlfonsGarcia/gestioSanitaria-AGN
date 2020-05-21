'use strict'

class Pacient extends Persona{
  constructor(nomRebut, cognomRebut, nifRebut, malaltia) {
    //nom = nom;
    super	(nomRebut, cognomRebut, nifRebut);

    this.malaltia = malaltia;
  }
}

