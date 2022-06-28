import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { WindowModelService } from 'app/services/window-model.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  public frmLogin:FormGroup;

  constructor(private service: WindowModelService,private router: Router, private formBuilder: FormBuilder) { 
    this.frmLogin = this.formBuilder.group({
      usuario: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  /*@Input()
  Usuarios: any;*/
  
  ngOnInit(): void {

  }

  onSubmit(usuario: String, password: String){
    if(usuario == "usuario" && password == "usuario"){
      this.router.navigate(['/home']);
      this.service.$modal.emit(true);
    }
    else{
      
      alert("Error en las credenciales")
      window.location.reload();

    }
  }

}
