'use strict'

class Hospital {
  constructor(nom, maximPacients) {
    this.nomHospital = nom;
    this.maximPacients = maximPacients;
    this.pacientsIngressats = [];
    this.ingressarPacients = ingressarPacients;
   // this.donarDaltaPacient = donarDaltaPacient;
    //this.morirPacient = morirPacient;
  }
  
    ingressarPacients(pacient) {
      console.log("hola");
      console.log(this.maximPacients);
      if (pacient != null && (this.pacientsIngressats.length < this.maximPacients))
        this.pacientsIngressats.push(pacient);
    }
/*
    donarDaltaPacient(llitPacient) {
      alert("S'ha donat d'alta el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

    morirPacient(llitPacient) {
      alert("Encara que s'ha fet tot el que s'ha pogut, el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " ha mort de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }
*/
}
