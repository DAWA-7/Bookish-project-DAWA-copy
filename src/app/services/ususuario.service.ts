import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsusuarioService {

  ELEMENT_DATA: User[] = [
    {cedula: 9123456789, nombres: 'Andres Davila', usuario: 'andresdav', correo: 'andres.davila@ug.edu.ec', contrasenia: '12345'}, 
    {cedula: 9236548932, nombres: 'Helen bernal', usuario: 'helenber', correo: 'helen.bernal@ug.edu.ec', contrasenia: '12345'}, 
    {cedula: 9654893217, nombres: 'Nefi Reyes', usuario: 'nefirey', correo:'nefi.reyes@ug.edu.ec', contrasenia: '12345'},  
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
