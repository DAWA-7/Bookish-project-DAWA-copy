import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private dialog:MatDialog, private router:Router) { }


  sendLogin(): void{
    if (this.router != null){
        this.router.navigate(['login']);
    }
  }
  
}
