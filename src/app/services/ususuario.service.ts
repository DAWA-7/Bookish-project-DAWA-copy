import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../interfaces/user';

export class UsusuarioService {

  ELEMENT_DATA: User[] = [
    {cedula: 351216, nombres: 'Guiller Rafael', usuario: "Correa Lasso", correo: 'Av. Ecuador entre Bco.Guayaquil y Belgica', contrasenia:'32'},
    {cedula: 351216, nombres: 'Ernesto Rafael', usuario: "Suarez Ramirez", correo: 'Alborada', contrasenia:'22'},
    {cedula: 351216, nombres: 'Vanessa Maria', usuario: "Ramirez Ugarte", correo: '9 de Octubre', contrasenia:'45'},
  ];  
  constructor() { }

  getUsuario(){
    return this.ELEMENT_DATA.slice()
  }
  agregarUsuario(usuario: User){
    this.ELEMENT_DATA.unshift(usuario) 
  }

  updateUser(data: User){
    var cedula = this.ELEMENT_DATA.find(user => user.cedula == data.cedula)
    if(data.cedula == cedula?.cedula){
      var index  = this.ELEMENT_DATA.findIndex(user => user.cedula == data.cedula)
      this.ELEMENT_DATA[index] = data
    }
    // return this.ELEMENT_DATA.fill(data)
  }
}
