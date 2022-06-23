import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'dawa-project';
  /*public Usuarios:Usuarios[]=[];*/

  ngOnInit(): void {

    
    /*this.Usuarios = [
      {
        nombres: 'Andrés Dávila',
        usuario: 'andresdav',
        correo: 'andres.davila@ug.edu.ec',
        contrasenia: '12345'
      },
      {
        nombres: 'Helen bernal',
        usuario: 'helenber',
        correo: 'helen.bernal@ug.edu.ec',
        contrasenia: '12345'
      },
    ]*/
  }
  
}
