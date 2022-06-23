import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule,
    MatButtonModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
