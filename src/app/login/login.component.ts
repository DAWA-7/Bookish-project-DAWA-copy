import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  frmLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  usuarios: any;
  ngOnInit(): void {
    this.usuarios = [{
        nombres: 'Andrés Dávila',
        usuario: 'andresdav',
        correo: 'andres.davila@ug.edu.ec',
        contrasenia: '12345'
      }
    ];
  }

  onSubmit(){
    if((this.frmLogin.value.usuario == this.usuarios.usuario) && (this.frmLogin.value.password == this.usuarios.contrasenia)){
      this.router.navigate(['/home'])
    }
    else{
      alert("Error en las credenciales")
    }
  }

}
