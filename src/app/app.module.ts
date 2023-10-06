import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';
import { MultiplicacionAxBComponent } from './formularios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './cinepolis/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    MultiplicacionAxBComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
