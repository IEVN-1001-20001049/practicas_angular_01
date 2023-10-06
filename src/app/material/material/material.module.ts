import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule
  ],
  imports: [
    CommonModule,
    
  ]
})
export class MaterialModule { }
