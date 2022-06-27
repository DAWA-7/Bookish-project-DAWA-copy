import { UsusuarioService } from './../../services/ususuario.service';
import { User } from './../../interfaces/user';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit {

  actionBtn:string = "Guardar"
  userForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private _serviceUsuer: UsusuarioService,
     private router: Router, @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<AgregarUserComponent>) {

    
   }
   
   
  //  @Inject(MAT_DIALOG_DATA) public editarDatos: any ,

  

  ngOnInit(): void {
    
    this.userForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      edad: ['', Validators.required]
    })
    

    if(this.editarDatos){
      this.actionBtn = "Actualizar"
      this.userForm.controls['cedula'].setValue(this.editarDatos.cedula),
      this.userForm.controls['nombre'].setValue(this.editarDatos.nombre),
      this.userForm.controls['apellido'].setValue(this.editarDatos.apellido),
      this.userForm.controls['direccion'].setValue(this.editarDatos.direccion),
      this.userForm.controls['edad'].setValue(this.editarDatos.edad)
    }

    
  }

  closeDialog(){
    this.dialogRef.close()
  }
  
  agregarUsuario(){
    if(!this.editarDatos){
      const user: User = {
        cedula: this.userForm.value.cedula,
        nombres: this.userForm.value.nombres,
        usuario: this.userForm.value.usuario,
        correo: this.userForm.value.correo,
        contrasenia: this.userForm.value.contrasenia
        
      }
      this.router.navigate(['/listar-catalogo'])
      .then(()=>this.router.navigate([''],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))

    }else{
      const user: User = {
        cedula: this.userForm.value.cedula,
        nombres: this.userForm.value.nombres,
        usuario: this.userForm.value.usuario,
        correo: this.userForm.value.correo,
        contrasenia: this.userForm.value.contrasenia
      }
      this.router.navigate(['/listar-catalogo'])
      .then(()=>this.router.navigate(['/'],{state:{editarDatos: this._serviceUsuer.updateUser(user)}}))
    }
    
    // window.location.reload()
    // this._serviceUsuer.agregarUsuario(user)
    // var reload = window.location.reload

    // this.router.navigate(['/pag'])
    // .then(()=>this.router.navigate(['/'],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))
    
  
    // this._serviceUsuer.agregarUsuario(user)
    
    // this.router.navigate([''])
    
  }
  
  // addUsuario(){
  //   console.log(this.userForm.value)
    
  // }


}
