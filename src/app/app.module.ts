import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';
import { MultiplicacionAxBComponent } from './formularios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    MultiplicacionAxBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
