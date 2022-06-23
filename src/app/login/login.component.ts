import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  public frmLogin:FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.frmLogin = this.formBuilder.group({
      usuario: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  @Input()
  Usuarios: any;
  
  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.frmLogin.get('usuario')!.value);
    console.log(this.Usuarios['usuario']);
    if((this.frmLogin.get('usuario')!.value == this.Usuarios['usuario']) && (this.frmLogin.get('password')!.value == this.Usuarios['contrasenia'])){
      this.router.navigate(['/home'])
    }
    else{
      alert("Error en las credenciales")
    }
  }

}
