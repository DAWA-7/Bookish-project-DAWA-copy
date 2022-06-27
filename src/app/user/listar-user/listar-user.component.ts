import { UsusuarioService } from './../../services/ususuario.service';
import { User } from './../../interfaces/user';
import { AgregarUserComponent } from './../agregar-user/agregar-user.component';
import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit {

  listUsuario: User[] = []
  displayedColumns: string[] = ['cedula', 'nombres', 'usuario', 'correo', 'contrasenia', 'modificar'];
  //para llamar al matdialog
  dataSource = new MatTableDataSource<any>;
  constructor(private usuerService: UsusuarioService, public dialog: MatDialog) {}
  openDialog() {
  
    this.dialog.open(AgregarUserComponent);
  }

  closeDialog(){
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.listUsuario = this.usuerService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuario);
    
  }
  //↑
  
  // cargaUsuario(){
  //   this.listUsuario = this.usuerService.getUsuario();
  //   this.dataSource = new MatTableDataSource(this.listUsuario);
  // }
  editUsuario(element: any){
    this.dialog.open(AgregarUserComponent,{
      data:element 
      
    })

     
  }

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
