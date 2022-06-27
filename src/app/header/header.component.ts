import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { WindowModelService } from 'app/services/window-model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged!: boolean;
  constructor(private service: WindowModelService,private dialog:MatDialog, private router:Router) {
    this.isLogged = false;
    this.service.$modal.subscribe(valor => {
      this.isLogged = valor
      console.log("valor: "+valor);
    })
   }

  sendLogin(): void{
    if (this.router != null){
        this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.router.navigate(['/home']);
    this.service.$modal.emit(false);
  }
  
}
